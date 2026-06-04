import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000/api';

export default function ChatBot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hello! I'm your Bus Assistant.\nAsk me about routes, schedules, live tracking, or fare details!\n\n🌐 **I support:** English, Hindi, Gujarati, Hinglish & Gujlish!\n(e.g., 'Mumbai se Pune bus kab hai?' or 'Where is my bus?')",
      from: 'bot',
      time: new Date().toISOString()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    axios.get(`${API}/chat/suggestions`)
      .then(res => setSuggestions(res.data.en || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    setMessages(prev => [...prev, { from: 'user', text: userMsg, time: new Date() }]);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post(`${API}/chat`, { message: userMsg });
      const botReply = res.data.reply;

      // Update suggestions based on language
      if (res.data.language === 'gu') {
        axios.get(`${API}/chat/suggestions`).then(r => setSuggestions(r.data.gu || []));
      } else {
        axios.get(`${API}/chat/suggestions`).then(r => setSuggestions(r.data.en || []));
      }

      setMessages(prev => [...prev, {
        from: 'bot',
        text: botReply,
        time: new Date(),
        data: res.data.data
      }]);
    } catch {
      setMessages(prev => [...prev, {
        from: 'bot',
        text: '⚠️ Sorry, something went wrong. Please try again.',
        time: new Date()
      }]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatText = (text) => {
    // Simple markdown-like formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderInteractiveData = (data) => {
    if (!data) return null;
    
    if (data.type === 'tracking' || data.type === 'buses' || data.type === 'drivers') {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
          {data.buses.slice(0, 3).map(bus => (
            <button 
              key={bus.id} 
              className="btn-primary" 
              style={{ fontSize: '0.75rem', padding: '6px 10px', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => {
                navigate(`/track/${bus.id}`);
                setIsOpen(false);
              }}
            >
              <span>Track {bus.name}</span>
              <span>→</span>
            </button>
          ))}
        </div>
      );
    }

    if (data.type === 'delays') {
      const all = [...(data.delayed || []), ...(data.stopped || [])];
      if (all.length === 0) return null;
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
          {all.slice(0, 3).map(bus => (
            <button 
              key={bus.id} 
              className="btn-secondary" 
              style={{ fontSize: '0.75rem', padding: '6px 10px', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              onClick={() => {
                navigate(`/track/${bus.id}`);
                setIsOpen(false);
              }}
            >
              <span>Check {bus.name}</span>
              <span>→</span>
            </button>
          ))}
        </div>
      );
    }

    if (data.type === 'routes' || data.type === 'schedule' || data.type === 'fare' || data.type === 'stops') {
      const routes = data.type === 'routes' ? data.routes : [data.route];
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px' }}>
          {routes.slice(0, 3).map(r => (
            <button 
              key={r.id} 
              className="btn-primary" 
              style={{ fontSize: '0.75rem', padding: '6px 10px', width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--primary-dark)' }}
              onClick={() => {
                navigate(`/schedule?from=${r.from}&to=${r.to}`);
                setIsOpen(false);
              }}
            >
              <span>View {r.from} to {r.to}</span>
              <span>→</span>
            </button>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="chatbot-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
        id="chatbot-toggle"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
            <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
            <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
          </svg>
        )}
        {!isOpen && <span className="chatbot-fab-pulse"></span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window" id="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <span>🚌</span>
              </div>
              <div>
                <h4>Bus Assistant</h4>
                <span className="chatbot-status">
                  <span className="chatbot-status-dot"></span>
                  Online • EN, HI & GU
                </span>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages" id="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg ${msg.from}`}>
                {msg.from === 'bot' && (
                  <div className="chatbot-msg-avatar">🤖</div>
                )}
                <div className="chatbot-msg-bubble">
                  <div
                    className="chatbot-msg-text"
                    dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                  />
                  {msg.data && renderInteractiveData(msg.data)}
                  <span className="chatbot-msg-time">{formatTime(msg.time)}</span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="chatbot-msg bot">
                <div className="chatbot-msg-avatar">🤖</div>
                <div className="chatbot-msg-bubble">
                  <div className="chatbot-typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && suggestions.length > 0 && (
            <div className="chatbot-suggestions">
              {suggestions.map((s, i) => (
                <button key={i} className="chatbot-chip" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question... / ગુજરાતીમાં લખો..."
              className="chatbot-input"
              id="chatbot-input"
              disabled={loading}
            />
            <button
              className="chatbot-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              aria-label="Send message"
              id="chatbot-send"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
