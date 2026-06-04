import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            🚌 <span>Where Is My Bus</span>
          </div>
          <p className="footer-desc">
            Track your bus in real-time, view schedules, and never miss a ride again. 
            Built with ❤️ for Indian commuters.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/track">Track Bus</Link></li>
            <li><Link to="/auth">Login</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Popular Routes</h4>
          <ul>
            <li><a href="#!">Mumbai → Pune</a></li>
            <li><a href="#!">Delhi → Jaipur</a></li>
            <li><a href="#!">Bangalore → Chennai</a></li>
            <li><a href="#!">Pune → Goa</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Technologies</h4>
          <ul>
            <li><a href="https://leafletjs.com" target="_blank" rel="noreferrer">Leaflet.js</a></li>
            <li><a href="https://www.openstreetmap.org" target="_blank" rel="noreferrer">OpenStreetMap</a></li>
            <li><a href="https://socket.io" target="_blank" rel="noreferrer">Socket.io</a></li>
            <li><a href="https://react.dev" target="_blank" rel="noreferrer">React.js</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Where Is My Bus. All rights reserved. | Free & Open Source
      </div>
    </footer>
  );
}
