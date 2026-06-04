import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import socket from '../socket';
import Map from '../components/Map';
import BusList from '../components/BusList';
import BusCard from '../components/BusCard';
import { motion } from 'framer-motion';
import { Search, Map as MapIcon, Bus, Route as RouteIcon, Navigation, Clock, Activity, ArrowRight } from 'lucide-react';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export default function Home() {
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [liveBuses, setLiveBuses] = useState([]);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [loading, setLoading] = useState(true);
  const [nearestStop, setNearestStop] = useState(null);
  const [findingLocation, setFindingLocation] = useState(false);
  const [selectedStationForBuses, setSelectedStationForBuses] = useState(null);
  const navigate = useNavigate();

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleFindNearestStop = () => {
    if (!("geolocation" in navigator)) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setFindingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let allStops = [];
        routes.forEach(r => {
          if (r.stops) {
            r.stops.forEach(s => allStops.push({ ...s, routeName: `${r.from} → ${r.to}` }));
          }
        });

        if (allStops.length === 0) {
          alert("No stops data available right now.");
          setFindingLocation(false);
          return;
        }

        const stopsWithDistance = allStops.map(stop => ({
          ...stop,
          distance: calculateDistance(latitude, longitude, stop.lat, stop.lng)
        }));

        stopsWithDistance.sort((a, b) => a.distance - b.distance);
        
        // Take top 3 unique stops by name
        const topStops = [];
        const seenNames = new Set();
        for (const stop of stopsWithDistance) {
          if (!seenNames.has(stop.name)) {
            seenNames.add(stop.name);
            topStops.push(stop);
            if (topStops.length === 3) break;
          }
        }

        setNearestStop(topStops);
        setFindingLocation(false);
      },
      (err) => {
        alert("Failed to get location. Please allow location access.");
        setFindingLocation(false);
      },
      { timeout: 10000 }
    );
  };

  const handleStopClick = (stop) => {
    const route = routes.find(r => `${r.from} → ${r.to}` === stop.routeName || r.routeName === stop.routeName);
    
    let relevantBuses = [];
    if (route) {
       const sourceBuses = liveBuses.length > 0 ? liveBuses : buses;
       relevantBuses = sourceBuses.filter(b => b.routeId === route.id || (b.route && b.route.id === route.id));
    }
    
    // Add distance to stop for each bus
    relevantBuses = relevantBuses.map(b => {
      const lat = b.location?.lat || b.currentLocation?.lat;
      const lng = b.location?.lng || b.currentLocation?.lng;
      let dist = Infinity;
      if (lat && lng) {
        dist = calculateDistance(stop.lat, stop.lng, lat, lng);
      }
      return { ...b, distanceToStop: dist };
    }).sort((a,b) => a.distanceToStop - b.distanceToStop);

    setSelectedStationForBuses({ stop, buses: relevantBuses });
  };

  useEffect(() => {
    // Fetch buses and routes
    Promise.all([
      axios.get(`${API}/buses`),
      axios.get(`${API}/routes`)
    ]).then(([busRes, routeRes]) => {
      setBuses(busRes.data);
      setRoutes(routeRes.data);
      setLoading(false);
    }).catch(err => {
      console.error('Failed to fetch data:', err);
      setLoading(false);
    });

    // Connect socket for live updates
    socket.connect();
    socket.emit('get:all-buses');

    socket.on('all:bus-locations', (data) => {
      setLiveBuses(data);
    });

    return () => {
      socket.off('all:bus-locations');
      socket.disconnect();
    };
  }, []);

  const handleSearch = () => {
    if (searchFrom || searchTo) {
      navigate(`/schedule?from=${searchFrom}&to=${searchTo}`);
    }
  };

  const handleBusClick = (bus) => {
    navigate(`/track/${bus.id || bus.busId}`);
  };

  const runningBuses = buses.filter(b => b.status === 'running').length;
  const totalRoutes = routes.length;

  const mapBuses = liveBuses.length > 0 ? liveBuses : buses.map(b => ({
    ...b,
    busId: b.id,
    location: b.currentLocation
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div 
      className="page-enter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="hero">
        <motion.h1 variants={itemVariants}>
          Track Your Bus <span className="highlight">Live</span>
        </motion.h1>
        <motion.p variants={itemVariants}>
          Real-time bus tracking across India. Never miss your bus again — 
          see live locations, schedules, and estimated arrival times.
        </motion.p>

        {/* Search Bar */}
        <motion.div variants={itemVariants} className="search-bar">
          <div className="search-input-wrapper">
            <Navigation className="search-icon" size={18} />
            <input
              type="text"
              placeholder="From city..."
              value={searchFrom}
              onChange={e => setSearchFrom(e.target.value)}
              id="search-from"
            />
          </div>
          <div className="search-divider"></div>
          <div className="search-input-wrapper">
            <MapIcon className="search-icon" size={18} />
            <input
              type="text"
              placeholder="To city..."
              value={searchTo}
              onChange={e => setSearchTo(e.target.value)}
              id="search-to"
            />
          </div>
          <button onClick={handleSearch} id="search-btn">
            <Search size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Search Routes
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="stats-bar">
          <div className="stat-item">
            <div className="stat-value">{runningBuses}</div>
            <div className="stat-label">Buses Running</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{totalRoutes}</div>
            <div className="stat-label">Active Routes</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{buses.length}</div>
            <div className="stat-label">Total Buses</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Live Tracking</div>
          </div>
        </motion.div>
      </section>

      {/* Nearest Bus Stop Finder */}
      <motion.section variants={itemVariants} className="section" style={{ paddingTop: 0 }}>
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <MapIcon className="title-icon" size={24} /> Find Nearest Bus Stop
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Allow location access to find the closest bus stop to you and see which routes it serves.
          </p>
          
          {!nearestStop ? (
            <button 
              className="btn-primary" 
              onClick={handleFindNearestStop}
              disabled={findingLocation}
              style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}
            >
              {findingLocation ? "Locating..." : "📍 Find My Nearest Stop"}
            </button>
          ) : Array.isArray(nearestStop) ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {nearestStop.map((stop, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleStopClick(stop)}
                    style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--accent-blue)', textAlign: 'left', minWidth: '280px', flex: '1 1 280px', cursor: 'pointer' }}
                  >
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>
                      #{idx + 1} Closest Stop
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{stop.name}</h3>
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Navigation size={16} /> 
                      {stop.distance < 1 ? `${(stop.distance * 1000).toFixed(0)} meters away` : `${stop.distance.toFixed(1)} km away`} 
                      • ~{Math.ceil(stop.distance * 15)} min walk
                    </div>
                    <div style={{ fontSize: '0.9rem', padding: '8px', background: 'var(--bg-glass)', borderRadius: '6px' }}>
                      <strong>Serves Route:</strong> {stop.routeName}
                    </div>
                  </div>
                ))}
              </div>
              <button 
                className="btn-secondary" 
                onClick={() => setNearestStop(null)}
                style={{ padding: '0.6rem 2rem', marginTop: '0.5rem' }}
              >
                Clear Results
              </button>
            </div>
          ) : null}
        </div>
      </motion.section>

      {/* Live Map */}
      <motion.section variants={itemVariants} className="section">
        <div className="section-header">
          <h2 className="section-title">
            <MapIcon className="title-icon" size={24} /> Live Bus Map
          </h2>
          <button 
            className="section-link" 
            onClick={() => navigate('/track')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            Open Full Map <ArrowRight size={16} />
          </button>
        </div>
        <Map 
          buses={mapBuses} 
          routes={routes}
          onBusClick={handleBusClick}
        />
      </motion.section>

      {/* Bus List */}
      <motion.section variants={itemVariants} className="section">
        <div className="section-header">
          <h2 className="section-title">
            <Bus className="title-icon" size={24} /> Active Buses
          </h2>
        </div>
        {loading ? (
          <div className="loading-spinner"><div className="spinner"></div></div>
        ) : (
          <BusList buses={buses} onBusClick={handleBusClick} />
        )}
      </motion.section>


      {/* Routes Overview */}
      <motion.section variants={itemVariants} className="section">
        <div className="section-header">
          <h2 className="section-title">
            <RouteIcon className="title-icon" size={24} /> Popular Routes
          </h2>
          <button 
            className="section-link"
            onClick={() => navigate('/schedule')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            View All Schedules <ArrowRight size={16} />
          </button>
        </div>
        <div className="route-grid">
          {routes.slice(0, 6).map((route, index) => (
            <motion.div 
              key={route.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className="glass-card route-card"
              onClick={() => navigate(`/schedule?from=${route.from}&to=${route.to}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="route-card-header">
                <div className="route-card-cities">
                  {route.from} <ArrowRight className="route-arrow-icon" size={16} /> {route.to}
                </div>
                <span className="route-active-buses">
                  <Activity size={14} style={{ marginRight: '4px' }}/> {route.activeBuses || 0} active
                </span>
              </div>
              <div className="route-card-meta">
                <span><RouteIcon size={14} /> {route.distance}</span>
                <span><Clock size={14} /> {route.duration}</span>
                <span><Navigation size={14} /> {route.stops?.length || 0} stops</span>
              </div>
              <div className="route-card-fares">
                <span className="fare-tag fare-nonac">Non-AC: ₹{route.fare?.nonAc}</span>
                <span className="fare-tag fare-ac">AC: ₹{route.fare?.ac}</span>
                <span className="fare-tag fare-sleeper">Sleeper: ₹{route.fare?.sleeper}</span>
              </div>
              <div className="route-card-schedule">
                <Clock size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                {route.schedule?.length || 0} daily departures
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Station Buses Modal */}
      {selectedStationForBuses && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-card" style={{ width: '90%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Buses at {selectedStationForBuses.stop.name}</h3>
              <button onClick={() => setSelectedStationForBuses(null)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', color: 'var(--text-primary)', cursor: 'pointer' }}>&times;</button>
            </div>
            
            {selectedStationForBuses.buses.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No buses currently found for this route.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {selectedStationForBuses.buses.map(bus => (
                  <div key={bus.id} onClick={() => navigate(`/track/${bus.id || bus.busId}`)} style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: '8px', cursor: 'pointer', borderLeft: `4px solid ${bus.status === 'running' ? '#00e676' : bus.status === 'delayed' ? '#ffd740' : '#ff5252'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <strong style={{ fontSize: '1.1rem' }}>{bus.name}</strong>
                      <span className={`status-badge status-${bus.status}`}>{bus.status}</span>
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>Bus No: {bus.busNumber}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)' }}>
                      Distance to stop: {bus.distanceToStop < 1 ? `${(bus.distanceToStop * 1000).toFixed(0)} meters` : `${bus.distanceToStop.toFixed(1)} km`}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
