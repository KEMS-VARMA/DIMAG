import React from 'react';
import Header from './Header';
import { AlertCircle, Megaphone, HandHeart, ClipboardList } from 'lucide-react';

function MyRequests({ goBack }) {
  // Mock populated data as requested
  const mockRequests = [
    { id: 1, type: "Emergency SOS", location: "Sector 4, City Center", status: "Active", date: "10:45 AM, Today" },
    { id: 2, type: "Disaster Report", location: "Main Street Bridge", status: "Pending", date: "09:30 AM, Today" },
    { id: 3, type: "Help Offer", location: "North Side Shelter", status: "Resolved", date: "Yesterday" }
  ];

  const getIcon = (type) => {
    switch(type) {
      case "Emergency SOS": return <AlertCircle size={24} color="var(--color-sos)" />;
      case "Disaster Report": return <Megaphone size={24} color="var(--color-report)" />;
      case "Help Offer": return <HandHeart size={24} color="var(--color-help)" />;
      default: return <ClipboardList size={24} />;
    }
  };

  return (
    <div className="app-container">
      <Header goBack={goBack} />
      <main className="main-content">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="form-header" style={{ marginBottom: '1rem', borderBottom: 'none' }}>
            <ClipboardList size={36} />
            <h1 style={{ fontSize: '2.5rem' }}>My Requests</h1>
          </div>

          <div className="item-list">
            {mockRequests.map((req) => (
              <div key={req.id} className="item-card solid-border solid-shadow" style={{ cursor: 'pointer' }}>
                <div className="item-info" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', border: 'var(--border-width) solid var(--color-black)', borderRadius: '50%' }}>
                    {getIcon(req.type)}
                  </div>
                  <div>
                    <h3>{req.type}</h3>
                    <p style={{ color: 'var(--color-text)' }}><strong>{req.location}</strong></p>
                    <p style={{ fontSize: '0.9rem' }}>{req.date}</p>
                  </div>
                </div>
                
                <div className={`status-badge status-${req.status.toLowerCase()}`}>
                  {req.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyRequests;