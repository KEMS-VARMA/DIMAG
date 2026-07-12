import React from 'react';
import { Activity, ArrowLeft } from 'lucide-react';

function Header({ goBack, hideBack = false }) {
  return (
    <nav className="navbar solid-shadow" style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {!hideBack && (
          <button className="btn-back solid-shadow" onClick={goBack} aria-label="Go back">
            <ArrowLeft size={24} />
          </button>
        )}
        <div className="navbar-brand">
          <Activity size={28} color="var(--color-sos)" strokeWidth={3} />
          DIMAG
        </div>
      </div>
    </nav>
  );
}

export default Header;
