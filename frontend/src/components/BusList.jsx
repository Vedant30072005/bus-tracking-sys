import { useState } from 'react';
import BusCard from './BusCard';

export default function BusList({ buses, onBusClick }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(8);

  const filteredBuses = buses.filter(bus => {
    const matchesFilter = filter === 'all' || bus.status === filter;
    const matchesSearch = search === '' || 
      bus.name?.toLowerCase().includes(search.toLowerCase()) ||
      bus.busNumber?.toLowerCase().includes(search.toLowerCase()) ||
      bus.route?.from?.toLowerCase().includes(search.toLowerCase()) ||
      bus.route?.to?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedBuses = filteredBuses.slice(0, limit);

  return (
    <div>
      <div className="filters-bar">
        <input
          type="text"
          placeholder="Search bus name, number, or city..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            flex: 1,
            minWidth: '200px',
            padding: '8px 16px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-xl)',
            color: 'var(--text-primary)',
            fontFamily: 'inherit',
            fontSize: '0.85rem'
          }}
        />
        {['all', 'running', 'stopped', 'delayed'].map(f => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? '🚌 All' : f === 'running' ? '🟢 Running' : f === 'stopped' ? '🔴 Stopped' : '🟡 Delayed'}
          </button>
        ))}
      </div>

      {filteredBuses.length === 0 ? (
        <div className="empty-state">
          <div className="emoji">🔍</div>
          <h3>No buses found</h3>
          <p>Try a different search or filter</p>
        </div>
      ) : (
        <>
          <div className="bus-grid">
            {displayedBuses.map(bus => (
              <BusCard key={bus.id} bus={bus} onClick={onBusClick} />
            ))}
          </div>
          {filteredBuses.length > limit && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="btn-secondary" 
                onClick={() => setLimit(prev => prev + 8)}
                style={{ width: 'auto', padding: '10px 24px' }}
              >
                Show More Buses
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
