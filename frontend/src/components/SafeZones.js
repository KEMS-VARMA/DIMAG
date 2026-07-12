import React, { useState, useEffect } from 'react';
import Header from './Header';
import { ShieldCheck, MapPin } from 'lucide-react';

function SafeZones({ goBack }) {
  const [loading, setLoading] = useState(true);
  
  const mockZones = [
    { id: 1, name: "City Central Stadium", distance: "2.5 km away", capacity: "High", status: "Open" },
    { id: 2, name: "St. Jude's High School", distance: "4.1 km away", capacity: "Medium", status: "Open" },
    { id: 3, name: "Community Hall North", distance: "7.0 km away", capacity: "Full", status: "Closed" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Header goBack={goBack} />
      <main className="main-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="form-header" style={{ marginBottom: '1rem', borderBottom: 'none' }}>
            <ShieldCheck size={36} color="var(--color-safe)" />
            <h1 style={{ fontSize: '2.5rem' }}>Safe Zones</h1>
          </div>
          
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            These are verified shelters currently accepting evacuees.
          </p>

          <div className="item-list">
            {loading ? (
              // Skeleton loading state
              <>
                {[1, 2, 3].map((n) => (
                  <div key={n} className="item-card skeleton" style={{ height: '100px' }}></div>
                ))}
              </>
            ) : (
              mockZones.map(zone => (
                <div key={zone.id} className="item-card solid-border solid-shadow">
                  <div className="item-info">
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={20} color="var(--color-sos)" />
                      {zone.name}
                    </h3>
                    <p>{zone.distance} • Capacity: <strong>{zone.capacity}</strong></p>
                  </div>
                  
                  <div className={`status-badge ${zone.status === 'Open' ? 'status-completed' : ''}`} style={{
                    backgroundColor: zone.status === 'Open' ? 'var(--color-safe)' : '#ccc',
                    color: zone.status === 'Open' ? 'white' : 'var(--color-text)'
                  }}>
                    {zone.status}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SafeZones;