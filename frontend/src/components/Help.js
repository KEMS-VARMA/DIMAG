function Help({ goBack }) {
  return (
    <div className="App">
      <h1>I CAN HELP</h1>

      <button>📍 UPDATE SITUATION</button>

      <button>🤝 HELP PEOPLE</button>

      <button>📦 OFFER RESOURCES</button>

      <button onClick={goBack}>⬅️ BACK</button>
    </div>
  );
}

export default Help;