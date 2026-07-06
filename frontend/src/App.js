import './App.css';

function App() {

  function handleSOS() {
    alert("🚨 SOS Activated!\n\nYour location will be shared with the nearest rescue team.");
  }

  function handleHelp() {
    alert("🤝 Thank You!\n\nNo One Is Alone During a Disaster.\n\nChoose how you can help on the next screen.");
  }

  function handleReport() {
    alert("🚨 Report Disaster\n\nReport submitted successfully.");
  }

  return (
    <div className="App">
      <h1>DIMAG</h1>
      <p>No One Is Alone During a Disaster</p>

      <button onClick={handleSOS}>🆘 SEND SOS</button>

      <button>🛡️ CHECK SAFE ZONES</button>

      <button onClick={handleReport}>🚨 REPORT DISASTER</button>

      <button onClick={handleHelp}>🤝 I CAN HELP</button>

      <button>📋 MY REQUESTS</button>
    </div>
  );
}

export default App;