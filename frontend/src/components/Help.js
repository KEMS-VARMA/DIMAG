import React, { useState } from 'react';
import Header from './Header';
import { HandHeart } from 'lucide-react';

function Help({ goBack, onSuccess }) {
  const [helpType, setHelpType] = useState('Provide Food & Water');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!location.trim()) {
      newErrors.location = true;
    }
    if (!contact.trim()) {
      newErrors.contact = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    setErrors({});
    onSuccess();
  };

  return (
    <div className="app-container">
      <Header goBack={goBack} />
      <main className="main-content">
        <div className="form-container solid-border solid-shadow">
          <div className="form-header">
            <HandHeart size={32} />
            <h1>Offer Help</h1>
          </div>

          <p style={{ marginBottom: '1.5rem' }}>
            If you are in a safe zone, please let us know how you can assist others.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>How can you help?</label>
              <select 
                className="form-control"
                value={helpType}
                onChange={(e) => setHelpType(e.target.value)}
              >
                <option>Provide Food & Water</option>
                <option>Medical Assistance (Doctor/Nurse)</option>
                <option>Temporary Shelter</option>
                <option>Transport / Evacuation</option>
                <option>Volunteer Work</option>
              </select>
            </div>

            <div className="form-group">
              <label>Your Location (City/Area)</label>
              <input 
                type="text" 
                className={`form-control ${errors.location ? 'form-control-error' : ''}`}
                placeholder="Where are you located?"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setErrors({...errors, location: false});
                }}
              />
              {errors.location && <span className="error-text">This field is required.</span>}
            </div>
            
            <div className="form-group">
              <label>Contact Number</label>
              <input 
                type="tel" 
                className={`form-control ${errors.contact ? 'form-control-error' : ''}`}
                placeholder="+1 234 567 8900"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  setErrors({...errors, contact: false});
                }}
              />
              {errors.contact && <span className="error-text">This field is required.</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
              Register Offer
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Help;