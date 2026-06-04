import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const { user } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect
  if (user) {
    return (
      <div className="auth-page page-enter">
        <div className="glass-card auth-card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👋</div>
          <h2>Welcome, {user.name}!</h2>
          <p className="auth-subtitle">You are already logged in.</p>
          
          <button className="btn-primary" onClick={() => navigate('/')} style={{ marginBottom: '1rem' }}>
            Go to Home
          </button>
          
          {user.role === 'admin' && (
            <button className="btn-secondary" onClick={() => navigate('/admin')}>
              Open Admin Panel
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page page-enter">
      <div className="glass-card auth-card">
        <div style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>🚌</div>
        <h2>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="auth-subtitle">
          {mode === 'login' 
            ? 'Sign in to track buses and access your account' 
            : 'Join Where Is My Bus to start tracking'}
        </p>

        {mode === 'login' ? (
          <LoginForm onSuccess={() => navigate('/')} />
        ) : (
          <RegisterForm onSuccess={() => navigate('/')} />
        )}

        <div className="auth-toggle">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button onClick={() => setMode('register')}>Sign Up</button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setMode('login')}>Sign In</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
