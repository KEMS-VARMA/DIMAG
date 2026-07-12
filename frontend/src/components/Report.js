import React, { useState } from 'react';
import Header from './Header';
import { Megaphone } from 'lucide-react';

function Report({ goBack, onSuccess }) {
  const [type, setType] = useState('Flood');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!location.trim()) {
      newErrors.location = true;
    }
    if (!description.trim()) {
      newErrors.description = true;
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
            <Megaphone size={32} />
            <h1>Report Disaster</h1>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Disaster Type</label>
              <select 
                className="form-control" 
                value={type} 
                onChange={(e) => setType(e.target.value)}
              >
                <option>Flood</option>
                <option>Earthquake</option>
                <option>Fire</option>
                <option>Cyclone</option>
                <option>Landslide</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Location (City/Area)</label>
              <input 
                type="text" 
                className={`form-control ${errors.location ? 'form-control-error' : ''}`} 
                placeholder="Enter affected location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setErrors({...errors, location: false});
                }}
              />
              {errors.location && <span className="error-text">This field is required.</span>}
            </div>

            <div className="form-group">
              <label>Description & Needs</label>
              <textarea 
                className={`form-control ${errors.description ? 'form-control-error' : ''}`} 
                placeholder="Describe the situation and what is needed..."
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setErrors({...errors, description: false});
                }}
              ></textarea>
              {errors.description && <span className="error-text">This field is required.</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
              Submit Report
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Report;