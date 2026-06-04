import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export default function AdminPanel() {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buses');
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [toast, setToast] = useState(null);

  // Form state for adding new bus
  const [newBus, setNewBus] = useState({
    busNumber: '', name: '', type: 'AC Semi-Sleeper', routeId: '', driverId: '', capacity: 40, amenities: ''
  });

  const fetchData = async () => {
    try {
      const [busRes, routeRes] = await Promise.all([
        axios.get(`${API}/buses`),
        axios.get(`${API}/routes`)
      ]);
      setBuses(busRes.data);
      setRoutes(routeRes.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/auth');
      return;
    }
    fetchData();
  }, [user, navigate]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddBus = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...newBus,
        amenities: newBus.amenities.split(',').map(a => a.trim()).filter(Boolean)
      };
      await axios.post(`${API}/buses`, payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showToast('Bus added successfully!');
      setShowAddModal(false);
      setNewBus({ busNumber: '', name: '', type: 'AC Semi-Sleeper', routeId: '', driverId: '', capacity: 40, amenities: '' });
      fetchData();
    } catch (err) {
      showToast(err.response?.data?.message || 'Failed to add bus', 'error');
    }
  };

  const handleDeleteBus = async (busId) => {
    if (!confirm('Are you sure you want to delete this bus?')) return;
    try {
      await axios.delete(`${API}/buses/${busId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showToast('Bus deleted');
      fetchData();
    } catch (err) {
      console.error(err);
      showToast('Failed to delete bus', 'error');
    }
  };

  const handleDeleteRoute = async (routeId) => {
    if (!confirm('Are you sure you want to delete this route?')) return;
    try {
      await axios.delete(`${API}/routes/${routeId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showToast('Route deleted');
      fetchData();
    } catch (err) {
      console.error(err);
      showToast('Failed to delete route', 'error');
    }
  };

  if (!user || user.role !== 'admin') return null;

  return (
    <div className="admin-page page-enter">
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        ⚙️ Admin Panel
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Manage buses, routes, and drivers. Logged in as <strong>{user.name}</strong>.
      </p>

      {/* Tabs */}
      <div className="admin-tabs">
        <button className={`admin-tab ${activeTab === 'buses' ? 'active' : ''}`} onClick={() => setActiveTab('buses')}>
          🚌 Buses ({buses.length})
        </button>
        <button className={`admin-tab ${activeTab === 'routes' ? 'active' : ''}`} onClick={() => setActiveTab('routes')}>
          🛤️ Routes ({routes.length})
        </button>
      </div>

      {loading ? (
        <div className="loading-spinner"><div className="spinner"></div></div>
      ) : activeTab === 'buses' ? (
        <>
          <button 
            className="btn-primary" 
            onClick={() => setShowAddModal(true)}
            style={{ width: 'auto', padding: '10px 24px', marginBottom: '1.5rem' }}
          >
            + Add New Bus
          </button>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Bus Number</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Route</th>
                  <th>Driver</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {buses.map(bus => (
                  <tr key={bus.id}>
                    <td style={{ fontWeight: 600 }}>{bus.busNumber}</td>
                    <td>{bus.name}</td>
                    <td>
                      <span className={`bus-type-badge ${
                        bus.type?.toLowerCase().includes('non') ? 'badge-nonac' :
                        bus.type?.toLowerCase().includes('sleeper') ? 'badge-sleeper' : 'badge-ac'
                      }`}>
                        {bus.type}
                      </span>
                    </td>
                    <td>{bus.route?.from} → {bus.route?.to}</td>
                    <td>{bus.driver?.name || '—'}</td>
                    <td>
                      <span className={`status-indicator status-${bus.status}`}>
                        <span className="status-dot"></span>
                        {bus.status}
                      </span>
                    </td>
                    <td>
                      <button className="admin-btn admin-btn-edit" onClick={() => navigate(`/track/${bus.id}`)}>
                        Track
                      </button>
                      <button className="admin-btn admin-btn-delete" onClick={() => handleDeleteBus(bus.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Route Name</th>
                <th>From</th>
                <th>To</th>
                <th>Distance</th>
                <th>Duration</th>
                <th>Stops</th>
                <th>Schedules</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {routes.map(route => (
                <tr key={route.id}>
                  <td style={{ fontWeight: 600 }}>{route.routeName}</td>
                  <td>{route.from}</td>
                  <td>{route.to}</td>
                  <td>{route.distance}</td>
                  <td>{route.duration}</td>
                  <td>{route.stops?.length || 0}</td>
                  <td>{route.schedule?.length || 0}</td>
                  <td>
                    <button className="admin-btn admin-btn-edit" onClick={() => navigate(`/schedule?from=${route.from}&to=${route.to}`)}>
                      View
                    </button>
                    <button className="admin-btn admin-btn-delete" onClick={() => handleDeleteRoute(route.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Bus Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Bus</h3>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddBus}>
              <div className="form-group">
                <label>Bus Number</label>
                <input 
                  type="text" 
                  value={newBus.busNumber} 
                  onChange={e => setNewBus({...newBus, busNumber: e.target.value})}
                  placeholder="MH-04-XX-1234"
                  required
                />
              </div>
              <div className="form-group">
                <label>Bus Name</label>
                <input 
                  type="text" 
                  value={newBus.name} 
                  onChange={e => setNewBus({...newBus, name: e.target.value})}
                  placeholder="Express Bus Name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select 
                  value={newBus.type} 
                  onChange={e => setNewBus({...newBus, type: e.target.value})}
                >
                  <option>AC Sleeper</option>
                  <option>AC Semi-Sleeper</option>
                  <option>Non-AC</option>
                </select>
              </div>
              <div className="form-group">
                <label>Route</label>
                <select 
                  value={newBus.routeId} 
                  onChange={e => setNewBus({...newBus, routeId: e.target.value})}
                  required
                >
                  <option value="">Select Route</option>
                  {routes.map(r => (
                    <option key={r.id} value={r.id}>{r.from} → {r.to}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Capacity</label>
                <input 
                  type="number" 
                  value={newBus.capacity} 
                  onChange={e => setNewBus({...newBus, capacity: Number(e.target.value)})}
                />
              </div>
              <div className="form-group">
                <label>Amenities (comma separated)</label>
                <input 
                  type="text" 
                  value={newBus.amenities} 
                  onChange={e => setNewBus({...newBus, amenities: e.target.value})}
                  placeholder="AC, WiFi, Charging Point"
                />
              </div>
              <button type="submit" className="btn-primary">Add Bus</button>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
