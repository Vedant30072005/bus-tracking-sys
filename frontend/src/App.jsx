import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import SchedulePage from './pages/SchedulePage';
import TrackBus from './pages/TrackBus';
import AuthPage from './pages/AuthPage';
import AdminPanel from './pages/AdminPanel';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/track" element={<TrackBus />} />
              <Route path="/track/:busId" element={<TrackBus />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </main>
          <Routes>
            <Route path="/track/:busId" element={null} />
            <Route path="*" element={<Footer />} />
          </Routes>
          <ChatBot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
