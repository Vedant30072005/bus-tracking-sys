import { useEffect, useState } from 'react';

export default function ETA({ busLocation, stops, currentStopIndex }) {
  const [eta, setEta] = useState(null);
  const [nextStop, setNextStop] = useState(null);

  // Haversine distance in km
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function toRad(deg) {
    return deg * (Math.PI / 180);
  }

  useEffect(() => {
    if (!busLocation || !stops || stops.length === 0) return;

    // Find next upcoming stop
    let nearestIdx = currentStopIndex || 0;
    let minDist = Infinity;

    if (!currentStopIndex && currentStopIndex !== 0) {
      for (let i = 0; i < stops.length; i++) {
        const dist = getDistance(
          busLocation.lat, busLocation.lng,
          stops[i].lat, stops[i].lng
        );
        if (dist < minDist) {
          minDist = dist;
          nearestIdx = i;
        }
      }
    }

    // Next stop is one after nearest
    const nextIdx = Math.min(nearestIdx + 1, stops.length - 1);
    const next = stops[nextIdx];
    setNextStop(next);

    // Calculate distance to next stop in km
    const distKm = getDistance(busLocation.lat, busLocation.lng, next.lat, next.lng);
    
    // Assume average speed of 40 km/h for city, 60 km/h for highway
    const avgSpeed = distKm > 20 ? 60 : 40;
    const etaMinutes = Math.round((distKm / avgSpeed) * 60);

    setEta(etaMinutes);
  }, [busLocation, stops, currentStopIndex]); // eslint-disable-next-line react-hooks/exhaustive-deps



  if (!eta || !nextStop) return null;

  return (
    <div className="eta-display">
      <div className="eta-label">Estimated Arrival</div>
      <div className="eta-value">
        {eta < 1 ? '< 1 min' : eta > 60 ? `${Math.floor(eta / 60)}h ${eta % 60}m` : `${eta} min`}
      </div>
      <div className="eta-subtitle">
        Next stop: {nextStop.name}
      </div>
    </div>
  );
}
