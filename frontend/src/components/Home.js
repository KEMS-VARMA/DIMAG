function Home({ handleSOS, handleReport, handleHelp }) {
  return (
    <div className="App">
      <h1>DI"MAG</h1>

      <p>No One Is Alone During a Disaster</p>

      <button onClick={handleSOS}>🆘 SEND SOS</button>

      <button>🛡️ CHECK SAFE ZONES</button>

      <button onClick={handleReport}>🚨 REPORT DISASTER</button>

      <button onClick={handleHelp}>🤝 I CAN HELP</button>

      <button>📋 MY REQUESTS</button>
    </div>
  );
}

export default Home;