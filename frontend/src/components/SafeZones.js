function SafeZones({ goBack }) {
  return (
    <div className="App">
      <h1>SAFE ZONES</h1>

      <button>🏥 Hospitals</button>

      <button>🏫 Schools</button>

      <button>🏟️ Relief Camps</button>

      <button>🌳 Open Safe Areas</button>

      <button onClick={goBack}>⬅️ BACK</button>
    </div>
  );
}

export default SafeZones;