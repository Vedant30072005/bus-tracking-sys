import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { socket } from '../socket';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export default function DriverDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [selectedBusId, setSelectedBusId] = useState('');
  const [isDriving, setIsDriving] = useState(false);
  const [watchId, setWatchId] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    if (!user || user.role !== 'driver') {
      navigate('/auth');
      return;
    }
    
    // Fetch buses
    axios.get(`${API}/buses`)
      .then(res => setBuses(res.data))
      .catch(err => console.error("Error fetching buses:", err));
      
    return () => stopDriving(); // cleanup on unmount
  }, [user, navigate]);

  const startDriving = () => {
    if (!selectedBusId) {
      alert('Please select a bus first!');
      return;
    }
    
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    setLocationError(null);
    setIsDriving(true);
    
    const id = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('driver:update-location', {
          busId: selectedBusId,
          lat: latitude,
          lng: longitude
        });
      },
      (error) => {
        console.error("GPS Error:", error);
        setLocationError(error.message);
        setIsDriving(false);
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    );
    
    setWatchId(id);
  };

  const stopDriving = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsDriving(false);
  };

  if (!user || user.role !== 'driver') return null;

  return (
    <div className="page-enter" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>👨‍✈️ Driver Dashboard</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Welcome back, {user.name}!</p>
      </div>

      <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        {locationError && (
          <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <strong>GPS Error:</strong> {locationError}
            <br/><small>Please ensure location permissions are granted.</small>
          </div>
        )}

        {!isDriving ? (
          <>
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Select your bus:</label>
              <select 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '1.1rem' }}
                value={selectedBusId} 
                onChange={(e) => setSelectedBusId(e.target.value)}
              >
                <option value="">-- Choose Bus --</option>
                {buses.map(bus => (
                  <option key={bus.id} value={bus.id}>{bus.busNumber} ({bus.route?.from} to {bus.route?.to})</option>
                ))}
              </select>
            </div>
            
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '1.2rem', background: 'var(--primary-color)' }}
              onClick={startDriving}
            >
              🟢 Start Broadcasting GPS
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: '#ecfdf5', color: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>
              <span className="material-icons" style={{ animation: 'pulse 2s infinite' }}>📡</span>
            </div>
            <h2 style={{ marginBottom: '0.5rem', color: '#10b981' }}>Live Tracking Active</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Your phone is currently sending live GPS updates to the server.<br/>
              Passengers can now track your bus in real-time!
            </p>
            
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '16px', fontSize: '1.2rem', background: '#ef4444' }}
              onClick={stopDriving}
            >
              🛑 Stop Trip
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
