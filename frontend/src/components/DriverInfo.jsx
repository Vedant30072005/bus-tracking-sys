import { useState } from 'react';

export default function DriverInfo({ driver }) {
  const [rating, setRating] = useState(driver?.rating || 0);
  const [hasRated, setHasRated] = useState(false);
  const [tipped, setTipped] = useState(false);

  if (!driver) return null;

  const handleRate = (newRating) => {
    if (!hasRated) {
      setRating(newRating);
      setHasRated(true);
      alert(`Thank you for rating ${driver.name} ${newRating} stars!`);
    }
  };

  const handleTip = () => {
    setTipped(true);
    alert(`Redirecting to UPI/Payment gateway to tip ${driver.name}...`);
  };

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          onClick={() => handleRate(i)}
          style={{ 
            cursor: hasRated ? 'default' : 'pointer', 
            color: i <= Math.round(rating) ? '#FFD700' : 'var(--text-dim)',
            fontSize: '1.1rem',
            marginRight: '2px',
            transition: 'color 0.2s'
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="glass-card driver-card" style={{ position: 'relative' }}>
      {rating >= 4.5 && (
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#FFD700', color: '#000', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          🏆 Top Rated
        </div>
      )}
      <div className="driver-header">
        <img 
          src={driver.photo} 
          alt={driver.name} 
          className="driver-avatar"
          onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${driver.name}`; }}
        />
        <div>
          <div className="driver-name">{driver.name}</div>
          <div className="driver-rating" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>{renderStars()}</div>
            <span>{rating.toFixed(1)}/5</span>
          </div>
        </div>
      </div>
      <div className="driver-details">
        <div className="driver-detail-row">
          <span className="icon">📞</span>
          <span>{driver.phone}</span>
        </div>
        <div className="driver-detail-row">
          <span className="icon">🪪</span>
          <span>{driver.license}</span>
        </div>
        <div className="driver-detail-row">
          <span className="icon">⏱️</span>
          <span>{driver.experience} experience</span>
        </div>
      </div>
      
      <button 
        onClick={handleTip}
        className="btn-secondary"
        style={{ 
          marginTop: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          background: tipped ? 'var(--accent-green)' : 'transparent'
        }}
        disabled={tipped}
      >
        <span style={{ fontSize: '1.2rem' }}>💸</span>
        {tipped ? 'Tip Sent! Thank you.' : 'Tip Driver'}
      </button>
    </div>
  );
}
