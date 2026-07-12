import React from 'react';
import { AlertCircle, ShieldCheck, Megaphone, HandHeart, ClipboardList } from 'lucide-react';

function Home({
  handleSOS,
  handleReport,
  handleHelp,
  handleSafeZones,
  handleMyRequests
}) {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Emergency Dashboard
        </h1>
        <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>
          No One Is Alone During a Disaster. Quick actions below.
        </p>
      </div>

      <div className="home-grid">
        <div className="action-card card-sos solid-border solid-shadow" onClick={handleSOS}>
          <AlertCircle size={48} strokeWidth={2.5} />
          <div>
            <h2>SEND SOS</h2>
            <p>Immediate life-threatening emergency</p>
          </div>
        </div>

        <div className="action-card card-safe solid-border solid-shadow" onClick={handleSafeZones}>
          <ShieldCheck size={48} strokeWidth={2.5} color="var(--color-text)" />
          <div>
            <h2>SAFE ZONES</h2>
            <p>Find nearby verified shelters</p>
          </div>
        </div>

        <div className="action-card card-report solid-border solid-shadow" onClick={handleReport}>
          <Megaphone size={48} strokeWidth={2.5} color="var(--color-text)" />
          <div>
            <h2>REPORT DISASTER</h2>
            <p>Notify authorities of an incident</p>
          </div>
        </div>

        <div className="action-card card-help solid-border solid-shadow" onClick={handleHelp}>
          <HandHeart size={48} strokeWidth={2.5} />
          <div>
            <h2>I CAN HELP</h2>
            <p>Offer community or NGO support</p>
          </div>
        </div>

        <div className="action-card solid-border solid-shadow" onClick={handleMyRequests}>
          <ClipboardList size={48} strokeWidth={2.5} color="var(--color-text)" />
          <div>
            <h2>MY REQUESTS</h2>
            <p>Track your submitted reports & SOS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;