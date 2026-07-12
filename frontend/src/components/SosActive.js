import React, { useState, useEffect } from 'react';
import Header from './Header';
import { AlertTriangle, MapPin } from 'lucide-react';

function SosActive({ goBack }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate location capturing
    const timer = setTimeout(() => {
      // We will pretend it succeeds
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSimulateError = () => {
    setError(true);
    setLoading(false);
  };

  const handleRetry = () => {
    setError(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  if (error) {
    return (
      <div className="app-container">
        <Header goBack={goBack} />
        <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="form-container solid-border solid-shadow" style={{ textAlign: 'center', padding: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-sos)' }}>Location Error</h2>
            <p style={{ marginBottom: '2rem' }}>Location access needed to send SOS.</p>
            <button className="btn btn-outline" onClick={handleRetry}>Try Again</button>
          </div>
        </main>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="app-container">
        <Header goBack={goBack} />
        <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="form-container solid-border solid-shadow" style={{ textAlign: 'center', padding: '4rem', width: '100%', maxWidth: '500px' }}>
            <div className="skeleton animate-pulse" style={{ height: '60px', width: '60px', borderRadius: '50%', margin: '0 auto 2rem auto' }}></div>
            <div className="skeleton" style={{ height: '2rem', width: '80%', margin: '0 auto 1rem auto' }}></div>
            <div className="skeleton" style={{ height: '1rem', width: '60%', margin: '0 auto' }}></div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header goBack={goBack} />
      <main className="main-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        
        <div className="form-container solid-border solid-shadow" style={{ textAlign: 'center', width: '100%', maxWidth: '600px', border: '5px solid var(--color-sos)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
             <AlertTriangle size={80} color="var(--color-sos)" className="animate-pulse" />
          </div>
          
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--color-sos)' }}>SOS SENT</h1>
          <p style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '2rem' }}>
            Help is on the way. Stay where you are if it's safe to do so.
          </p>
          
          <div className="solid-border" style={{ padding: '1rem', marginBottom: '2rem', backgroundColor: 'var(--color-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
             <MapPin size={24} color="var(--color-sos)" />
             <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Sector 4, City Center</span>
             <span style={{ color: 'var(--color-text-light)', marginLeft: '1rem' }}>{new Date().toLocaleTimeString()}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div className="status-badge status-active" style={{ fontSize: '1.1rem', padding: '0.5rem 1rem' }}>
                Status: Active
             </div>
          </div>

          <button className="btn btn-outline" onClick={goBack} style={{ width: '100%' }}>
            Cancel SOS
          </button>
        </div>

      </main>
    </div>
  );
}

export default SosActive;
