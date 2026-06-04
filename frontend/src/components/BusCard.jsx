import { motion } from 'framer-motion';
import { ArrowRight, Wind, Shield, Coffee } from 'lucide-react';

export default function BusCard({ bus, onClick }) {
  const getBadgeClass = (type) => {
    if (type?.toLowerCase().includes('ac') && !type?.toLowerCase().includes('non')) return 'badge-ac';
    if (type?.toLowerCase().includes('non')) return 'badge-nonac';
    if (type?.toLowerCase().includes('sleeper')) return 'badge-sleeper';
    return 'badge-ac';
  };

  const getAmenityIcon = (amenity) => {
    const text = amenity.toLowerCase();
    if (text.includes('ac')) return <Wind size={12} />;
    if (text.includes('safe') || text.includes('gps')) return <Shield size={12} />;
    if (text.includes('water') || text.includes('snack')) return <Coffee size={12} />;
    return null;
  };

  return (
    <motion.div 
      className="glass-card bus-card" 
      onClick={() => onClick && onClick(bus)} 
      id={`bus-card-${bus.id}`}
      whileHover={{ scale: 1.02, translateY: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bus-card-header">
        <div>
          <div className="bus-card-name">{bus.name}</div>
          <div className="bus-card-number">{bus.busNumber}</div>
        </div>
        <span className={`bus-type-badge ${getBadgeClass(bus.type)}`}>
          {bus.type}
        </span>
      </div>

      <div className="bus-card-route">
        <span>{bus.route?.from || '—'}</span>
        <ArrowRight className="route-arrow-icon" size={16} />
        <span>{bus.route?.to || '—'}</span>
      </div>

      <div className="bus-card-footer">
        <div className={`status-indicator status-${bus.status}`}>
          <span className="status-dot"></span>
          {bus.status?.charAt(0).toUpperCase() + bus.status?.slice(1)}
        </div>
        <div className="bus-card-amenities">
          <span className="amenity-tag" style={{ border: '1px solid var(--border-glass)' }}>
            {bus.crowdLevel === 'Empty' ? '🟢' : bus.crowdLevel === 'Packed' ? '🔴' : '🟡'} {bus.crowdLevel || 'Moderate'}
          </span>
          {bus.amenities?.slice(0, 2).map((a, i) => (
            <span key={i} className="amenity-tag">
              {getAmenityIcon(a)} {a}
            </span>
          ))}
          {bus.amenities?.length > 2 && (
            <span className="amenity-tag">+{bus.amenities.length - 2}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
