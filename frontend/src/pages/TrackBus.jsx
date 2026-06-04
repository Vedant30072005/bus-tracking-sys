import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import socket from '../socket';
import Map from '../components/Map';
import DriverInfo from '../components/DriverInfo';
import ETA from '../components/ETA';
import BusList from '../components/BusList';
import BusCard from '../components/BusCard';
import { motion } from 'framer-motion';
import { Bus } from 'lucide-react';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export default function TrackBus() {
  const { busId } = useParams();
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [routeDetails, setRouteDetails] = useState(null);
  const [busLocation, setBusLocation] = useState(null);
  const [allBusLocations, setAllBusLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Phase 3 States
  const [proximityAlertSet, setProximityAlertSet] = useState(false);
  const proximityAlertSetRef = useRef(false);
  const [crowdLevel, setCrowdLevel] = useState('Moderate');
  const [destinationWeather, setDestinationWeather] = useState(null);

  useEffect(() => {
    proximityAlertSetRef.current = proximityAlertSet;
  }, [proximityAlertSet]);

  useEffect(() => {
    if (routeDetails?.stops?.length > 0) {
      const dest = routeDetails.stops[routeDetails.stops.length - 1];
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${dest.lat}&longitude=${dest.lng}&current_weather=true`)
        .then(res => setDestinationWeather(res.data.current_weather))
        .catch(err => console.error("Weather fetch failed", err));
    }
  }, [routeDetails]);

  const handleNotifyMe = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications.");
      return;
    }
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        setProximityAlertSet(true);
        alert("Proximity alert set! We will notify you when the bus gets closer.");
      }
    });
  };

  // Fetch buses list
  useEffect(() => {
    axios.get(`${API}/buses`).then(res => {
      setBuses(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // When busId is provided, fetch that bus detail
  useEffect(() => {
    if (busId) {
      axios.get(`${API}/buses/${busId}`).then(res => {
        setSelectedBus(res.data);
        setBusLocation(res.data.currentLocation);
        if (res.data.routeDetails) {
          setRouteDetails(res.data.routeDetails);
        }
      }).catch(err => console.error(err));
    }
  }, [busId]);

  // Socket connection for live tracking
  useEffect(() => {
    socket.connect();

    if (busId) {
      socket.emit('track:bus', busId);
      socket.on('bus:location', (data) => {
        if (data.busId === busId) {
          setBusLocation(data.location);
          setSelectedBus(prev => prev ? { ...prev, currentLocation: data.location, status: data.status } : prev);
        }
      });
    }

    socket.emit('get:all-buses');
    socket.on('all:bus-locations', (data) => {
      setAllBusLocations(data);
    });

    return () => {
      if (busId) {
        socket.emit('untrack:bus', busId);
        socket.off('bus:location');
      }
      socket.off('all:bus-locations');
      socket.disconnect();
    };
  }, [busId]);

  // GPS Simulation (Demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      setAllBusLocations(prev => prev.map(loc => ({
        ...loc,
        lat: loc.lat + (Math.random() - 0.5) * 0.001,
        lng: loc.lng + (Math.random() - 0.5) * 0.001
      })));
      setBuses(prev => prev.map(b => {
        if (!b.currentLocation?.lat) return b;
        return {
          ...b,
          currentLocation: {
            ...b.currentLocation,
            lat: b.currentLocation.lat + (Math.random() - 0.5) * 0.001,
            lng: b.currentLocation.lng + (Math.random() - 0.5) * 0.001
          }
        };
      }));

      // Trigger mock push notification
      if (proximityAlertSetRef.current && Math.random() > 0.8) {
        new Notification("Bus Arriving Soon!", {
          body: "Get ready! Your bus is arriving in 5 minutes.",
          icon: "https://cdn-icons-png.flaticon.com/512/3448/3448339.png"
        });
        proximityAlertSetRef.current = false;
        setProximityAlertSet(false);
      }

      setBusLocation(prev => {
        if (!prev || !prev.lat) return prev;
        return {
          ...prev,
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001
        };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectBus = (bus) => {
    const id = bus.busId || bus.id;
    navigate(`/track/${id}`);
  };

  // Determine current stop index based on bus position
  const getCurrentStopIndex = () => {
    if (!busLocation || !routeDetails?.stops) return 0;
    let nearestIdx = 0;
    let minDist = Infinity;
    routeDetails.stops.forEach((stop, idx) => {
      const dist = Math.sqrt(
        Math.pow(stop.lat - busLocation.lat, 2) +
        Math.pow(stop.lng - busLocation.lng, 2)
      );
      if (dist < minDist) {
        minDist = dist;
        nearestIdx = idx;
      }
    });
    return nearestIdx;
  };

  const currentStopIdx = getCurrentStopIndex();

  // Map data
  const mapBuses = busId && selectedBus 
    ? [{ ...selectedBus, busId: selectedBus.id, location: busLocation || selectedBus.currentLocation }]
    : allBusLocations.length > 0 
      ? allBusLocations 
      : buses.map(b => ({ ...b, busId: b.id, location: b.currentLocation }));

  const mapRoutes = routeDetails ? [routeDetails] : [];
  const mapStops = routeDetails?.stops || [];
  const mapCenter = busLocation ? [busLocation.lat, busLocation.lng] : null;

  return (
    <div className="page-enter">
      {busId && selectedBus ? (
        /* Tracking a specific bus */
        <div className="track-page">
          <div className="track-sidebar">
            <button 
              className="btn-secondary" 
              onClick={() => navigate('/track')}
              style={{ marginBottom: '1rem', width: '100%' }}
            >
              ← Back to All Buses
            </button>

            <h2>🚌 {selectedBus.name}</h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              {selectedBus.busNumber} • {selectedBus.type}
            </p>

            {/* Status */}
            <div className={`status-indicator status-${selectedBus.status}`} style={{ marginBottom: '1rem', fontSize: '1rem' }}>
              <span className="status-dot"></span>
              {selectedBus.status?.toUpperCase()}
            </div>

            {/* ETA */}
            <ETA 
              busLocation={busLocation} 
              stops={routeDetails?.stops || []} 
              currentStopIndex={currentStopIdx}
            />

            {/* Notify Me Button */}
            <button 
              onClick={handleNotifyMe}
              className="btn-primary"
              style={{ 
                marginBottom: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: proximityAlertSet ? 'var(--accent-green)' : 'var(--gradient-blue)' 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              {proximityAlertSet ? "Alert Set!" : "Notify Me When Nearby"}
            </button>

            {/* Share WhatsApp */}
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(`I'm tracking the ${selectedBus.name} (${selectedBus.busNumber}). Track it live here: ${window.location.href}`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem', width: '100%', background: '#25D366', color: '#fff', border: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Share ETA on WhatsApp
            </a>

            {/* Route Info */}
            {routeDetails && (
              <div className="glass-card" style={{ padding: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                  Route
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>
                  {routeDetails.from} → {routeDetails.to}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {routeDetails.distance} • {routeDetails.duration}
                </div>
                {destinationWeather && (
                  <div style={{ marginTop: '12px', padding: '10px', background: 'var(--bg-glass)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', border: '1px solid var(--border-glass)' }}>
                    <span style={{ fontSize: '1.4rem' }}>🌤️</span>
                    <div>
                      <div style={{ fontWeight: 600 }}>{destinationWeather.temperature}°C, {destinationWeather.windspeed} km/h wind</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Live Weather at Destination</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Driver Info */}
            {selectedBus.driver && (
              <>
                <h3 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', marginTop: '0.5rem' }}>
                  Driver Information
                </h3>
                <DriverInfo driver={selectedBus.driver} />
              </>
            )}

            {/* Stop Progress */}
            {routeDetails?.stops && (
              <div className="stop-progress">
                <h3>🚏 Stops Progress</h3>
                {routeDetails.stops.map((stop, idx) => (
                  <div 
                    key={idx} 
                    className={`stop-item ${idx < currentStopIdx ? 'passed' : ''} ${idx === currentStopIdx ? 'current' : ''}`}
                  >
                    <div className="stop-dot"></div>
                    <div className="stop-info">
                      <div className="stop-name">{stop.name}</div>
                      <div className="stop-time">
                        {stop.arrivalTime !== '--' ? `Arr: ${stop.arrivalTime}` : 'Start'} 
                        {stop.departureTime !== '--' ? ` • Dep: ${stop.departureTime}` : ' • End'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Amenities */}
            {selectedBus.amenities && selectedBus.amenities.length > 0 && (
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Amenities
                </h3>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {selectedBus.amenities.map((a, i) => (
                    <span key={i} className="amenity-tag" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>{a}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Crowd Level */}
            <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Live Crowd Level
              </h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Empty', 'Moderate', 'Packed'].map(level => (
                  <button 
                    key={level}
                    onClick={() => {
                      setCrowdLevel(level);
                      setSelectedBus(prev => ({ ...prev, crowdLevel: level }));
                    }}
                    style={{
                      flex: 1, padding: '8px 4px', borderRadius: '8px', border: '1px solid var(--border-glass)', cursor: 'pointer', fontSize: '0.8rem',
                      background: crowdLevel === level ? 'var(--accent-blue-dim)' : 'var(--bg-secondary)',
                      color: crowdLevel === level ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      fontWeight: crowdLevel === level ? 600 : 400
                    }}
                  >
                    {level === 'Empty' ? '🟢' : level === 'Moderate' ? '🟡' : '🔴'} {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="track-map">
            <Map 
              buses={mapBuses}
              routes={mapRoutes}
              stops={mapStops}
              center={mapCenter}
              zoom={10}
              fullscreen={true}
            />
          </div>
        </div>
      ) : (
        /* Bus selection view */
        <div>
          <section className="section">
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              📍 Track a Bus
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Select a bus to see its live location, route progress, and driver information.
            </p>
          </section>

          <section className="section" style={{ paddingTop: 0 }}>
            <Map 
              buses={mapBuses}
              onBusClick={handleSelectBus}
            />
          </section>

          <section className="section">
            {loading ? (
              <div className="loading-spinner"><div className="spinner"></div></div>
            ) : (
              <BusList buses={buses} onBusClick={handleSelectBus} />
            )}
          </section>


        </div>
      )}
    </div>
  );
}
