import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function LoginForm({ onSuccess }) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="auth-error">{error}</div>}
      
      <div className="form-group">
        <label htmlFor="login-email">Email or Username</label>
        <input
          id="login-email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="admin or you@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </button>

      <div style={{ 
        marginTop: '1rem', 
        padding: '12px', 
        background: 'var(--bg-glass)', 
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.8rem',
        color: 'var(--text-dim)'
      }}>
        <strong>Demo Admin:</strong> admin / admin<br/>
        <strong>Demo Driver:</strong> driver@whereismybus.com / driver123
      </div>
    </form>
  );
}
