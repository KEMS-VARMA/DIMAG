function Report({ goBack }) {
  return (
    <div className="App">
      <h1>REPORT DISASTER</h1>

      <button>🔥 FIRE</button>

      <button>🌊 FLOOD</button>

      <button>🌍 EARTHQUAKE</button>

      <button>🌪️ CYCLONE</button>

      <button>⚠️ OTHER</button>

      <button onClick={goBack}>⬅️ BACK</button>
    </div>
  );
}

export default Report;