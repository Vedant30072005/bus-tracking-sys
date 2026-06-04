import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Bus, Menu, X, User, LogOut, Settings, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <Bus className="bus-icon" size={28} />
          <span>Where Is My Bus</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={toggleTheme} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-h)', cursor: 'pointer', display: 'flex' }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/schedule" className={isActive('/schedule')} onClick={() => setMenuOpen(false)}>Schedule</Link></li>
          <li><Link to="/track" className={isActive('/track')} onClick={() => setMenuOpen(false)}>Track Bus</Link></li>
          
          {/* Login System Hidden Temporarily */}
          {/* {user ? (
            <>
              {user.role === 'admin' && (
                <li>
                  <Link to="/admin" className={isActive('/admin')} onClick={() => setMenuOpen(false)}>
                    <Settings size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Admin
                  </Link>
                </li>
              )}
              <li>
                <div className="nav-user-badge">
                  <div className="user-avatar">{user.name?.charAt(0).toUpperCase()}</div>
                  {user.name}
                </div>
              </li>
              <li>
                <button onClick={() => { logout(); setMenuOpen(false); }} className="nav-btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <LogOut size={16} /> Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/auth" className="nav-btn-primary" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <User size={16} /> Login / Register
              </Link>
            </li>
          )} */}
        </ul>
      </div>
    </motion.nav>
  );
}
