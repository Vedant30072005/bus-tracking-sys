import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom bus icon
function createBusIcon(status) {
  const color = status === 'running' ? '#00e676' : status === 'delayed' ? '#ffd740' : '#ff5252';
  return L.divIcon({
    className: '',
    html: `<div style="
      background: ${color};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 12px ${color}80;
      border: 2px solid #fff;
      color: #fff;
      font-size: 16px;
      line-height: 1;
    "><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
}

// Stop icon
function createStopIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="
      background: #ff6b35;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid #fff;
      box-shadow: 0 0 6px rgba(255,107,53,0.5);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10]
  });
}

// Auto-center map component — only fits bounds ONCE on first valid data,
// never re-fires when bus positions update (every 3s) so user zoom is preserved.
function FitBounds({ bounds }) {
  const map = useMap();
  const hasFit = useRef(false);
  useEffect(() => {
    if (!hasFit.current && bounds && bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
      hasFit.current = true;
    }
  }, [map, bounds]);
  return null;
}

// Center on specific coords — only sets view ONCE on initial mount so that
// live socket updates (every 3s) don't reset the user's manual zoom/pan.
function CenterMap({ center, zoom }) {
  const map = useMap();
  const hasCentered = useRef(false);
  useEffect(() => {
    if (!hasCentered.current && center) {
      map.setView(center, zoom || 13, { animate: true });
      hasCentered.current = true;
    }
  }, [map, center, zoom]);
  return null;
}

export default function Map({ 
  buses = [], 
  routes = [], 
  selectedBus = null, 
  stops = [],
  center = null,
  zoom = 5,
  fullscreen = false,
  onBusClick = null
}) {
  const defaultCenter = [20.5937, 78.9629]; // India center
  const mapCenter = center || defaultCenter;

  // Calculate bounds from all bus positions
  const allPoints = [
    ...buses.map(b => [b.location?.lat || b.currentLocation?.lat, b.location?.lng || b.currentLocation?.lng]).filter(p => p[0] && p[1]),
    ...stops.map(s => [s.lat, s.lng]).filter(p => p[0] && p[1])
  ];

  return (
    <div className={`map-wrapper ${fullscreen ? 'map-fullscreen' : ''}`}>
      <MapContainer 
        center={mapCenter} 
        zoom={zoom} 
        scrollWheelZoom={true}
        style={{ height: fullscreen ? 'calc(100vh - 70px)' : '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {allPoints.length > 1 && !center && <FitBounds bounds={allPoints} />}
        {center && <CenterMap center={center} zoom={zoom} />}

        {/* Bus Markers */}
        {buses.map(bus => {
          const lat = bus.location?.lat || bus.currentLocation?.lat;
          const lng = bus.location?.lng || bus.currentLocation?.lng;
          if (!lat || !lng) return null;

          return (
            <Marker
              key={bus.busId || bus.id}
              position={[lat, lng]}
              icon={createBusIcon(bus.status)}
              eventHandlers={{
                click: () => onBusClick && onBusClick(bus)
              }}
            >
              <Popup>
                <div>
                  <div className="bus-popup-name">{bus.name}</div>
                  <div className="bus-popup-route">
                    {bus.route ? `${bus.route.from} → ${bus.route.to}` : bus.busNumber}
                  </div>
                  <div className="bus-popup-route">{bus.type || ''}</div>
                  <div className={`bus-popup-status status-${bus.status}`}>
                    ● {bus.status?.toUpperCase()}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Stop Markers */}
        {stops.map((stop, idx) => {
          if (!stop.lat || !stop.lng) return null;
          return (
          <Marker
            key={`stop-${idx}`}
            position={[stop.lat, stop.lng]}
            icon={createStopIcon()}
          >
            <Popup>
              <div>
                <div className="bus-popup-name">{stop.name}</div>
                <div className="bus-popup-route">
                  Arr: {stop.arrivalTime} | Dep: {stop.departureTime}
                </div>
              </div>
            </Popup>
          </Marker>
          );
        })}

        {/* Route Polylines */}
        {routes.map((route, idx) => {
          const polylinePath = (Array.isArray(route.polyline) && route.polyline.length > 0) 
            ? route.polyline 
            : (route.stops && route.stops.length > 0) 
              ? route.stops.map(s => [s.lat, s.lng]).filter(p => p[0] && p[1])
              : [];

          return polylinePath.length > 1 && (
            <Polyline
              key={`route-${idx}`}
              positions={polylinePath}
              pathOptions={{
                color: '#00d4ff',
                weight: 5,
                opacity: 0.9,
                lineCap: 'round',
                lineJoin: 'round'
              }}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
