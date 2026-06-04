import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export default function SchedulePage() {
  const [searchParams] = useSearchParams();
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchFrom, setSearchFrom] = useState(searchParams.get('from') || '');
  const [searchTo, setSearchTo] = useState(searchParams.get('to') || '');
  const [expandedRoute, setExpandedRoute] = useState(null);

  const fetchRoutes = async () => {
    try {
      setLoading(true);
      const params = {};
      if (searchFrom) params.from = searchFrom;
      if (searchTo) params.to = searchTo;
      
      const res = await axios.get(`${API}/routes/search`, { params });
      setRoutes(res.data);
    } catch (err) {
      console.error('Failed to fetch routes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchRoutes();
  }, [searchFrom, searchTo]); // eslint-disable-next-line react-hooks/exhaustive-deps

  const getDayShort = (day) => {
    const map = { Mon: 'M', Tue: 'T', Wed: 'W', Thu: 'T', Fri: 'F', Sat: 'S', Sun: 'S' };
    return map[day] || day;
  };

  const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="page-enter schedule-container">
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        🕐 Bus Schedule & Timetable
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Search routes and view complete bus schedules with timings, stops, and fares.
      </p>

      {/* Search */}
      <div className="search-bar" style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="🏙️ From city..."
          value={searchFrom}
          onChange={e => setSearchFrom(e.target.value)}
          id="schedule-search-from"
        />
        <div className="search-divider"></div>
        <input
          type="text"
          placeholder="🏙️ To city..."
          value={searchTo}
          onChange={e => setSearchTo(e.target.value)}
          id="schedule-search-to"
        />
        <button onClick={fetchRoutes} id="schedule-search-btn">
          🔍 Search
        </button>
      </div>

      {loading ? (
        <div className="loading-spinner"><div className="spinner"></div></div>
      ) : routes.length === 0 ? (
        <div className="empty-state">
          <div className="emoji">🔍</div>
          <h3>No routes found</h3>
          <p>Try searching for different cities</p>
        </div>
      ) : (
        routes.map(route => (
          <div key={route.id} className="glass-card" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
            {/* Route Header */}
            <div 
              style={{ padding: '1.5rem', cursor: 'pointer' }}
              onClick={() => setExpandedRoute(expandedRoute === route.id ? null : route.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '4px' }}>
                    {route.from} <span style={{ color: 'var(--accent-blue)' }}>→</span> {route.to}
                  </div>
                  <div style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    {route.routeName}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>📏 {route.distance}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>⏱️ {route.duration}</span>
                  <span className="route-active-buses">🚌 {route.activeBuses || 0} running</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>
                    {expandedRoute === route.id ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {/* Fares */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <span className="fare-tag fare-nonac">Non-AC: ₹{route.fare?.nonAc}</span>
                <span className="fare-tag fare-ac">AC: ₹{route.fare?.ac}</span>
                <span className="fare-tag fare-sleeper">Sleeper: ₹{route.fare?.sleeper}</span>
              </div>
            </div>

            {/* Expanded: Schedule + Stops */}
            {expandedRoute === route.id && (
              <div style={{ borderTop: '1px solid var(--border-glass)' }}>
                {/* Schedule Table */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    📅 Schedule
                  </h3>
                  <div className="schedule-table-wrap">
                    <table className="schedule-table">
                      <thead>
                        <tr>
                          <th>Departure</th>
                          <th>Arrival</th>
                          <th>Days of Operation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {route.schedule?.map((s, idx) => (
                          <tr key={idx}>
                            <td style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>{s.departureTime}</td>
                            <td style={{ fontWeight: 600 }}>{s.arrivalTime}</td>
                            <td>
                              <div className="days-badges">
                                {allDays.map(day => (
                                  <span 
                                    key={day} 
                                    className={`day-badge ${s.days?.includes(day) ? 'active' : ''}`}
                                  >
                                    {getDayShort(day)}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Stops */}
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    🚏 Stops ({route.stops?.length || 0})
                  </h3>
                  <div className="schedule-table-wrap">
                    <table className="schedule-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Stop Name</th>
                          <th>Arrival</th>
                          <th>Departure</th>
                        </tr>
                      </thead>
                      <tbody>
                        {route.stops?.map((stop, idx) => (
                          <tr key={idx}>
                            <td style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>{stop.order || idx + 1}</td>
                            <td style={{ fontWeight: 500 }}>{stop.name}</td>
                            <td>{stop.arrivalTime}</td>
                            <td>{stop.departureTime}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Buses on this route */}
                {route.busesOnRoute && route.busesOnRoute.length > 0 && (
                  <div style={{ padding: '0 1.5rem 1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                      🚌 Buses on This Route
                    </h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {route.busesOnRoute.map(bus => (
                        <div key={bus.id} style={{
                          padding: '8px 14px',
                          background: 'var(--bg-glass)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.85rem'
                        }}>
                          <span style={{ fontWeight: 600 }}>{bus.name}</span>
                          <span style={{ color: 'var(--text-dim)', marginLeft: '8px' }}>{bus.type}</span>
                          <span className={`status-indicator status-${bus.status}`} style={{ marginLeft: '8px' }}>
                            <span className="status-dot" style={{ display: 'inline-block', width: '6px', height: '6px', marginRight: '4px' }}></span>
                            {bus.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
