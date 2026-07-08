function MyRequests({ goBack }) {
  return (
    <div className="App">
      <h1>MY REQUESTS</h1>

      <p>No requests yet.</p>

      <button onClick={goBack}>⬅️ BACK</button>
    </div>
  );
}

export default MyRequests;