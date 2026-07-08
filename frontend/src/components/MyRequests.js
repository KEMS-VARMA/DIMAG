function MyRequests({ requests, goBack }) {
  return (
    <div className="App">
      <h1>MY REQUESTS</h1>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((request, index) => (
          <div key={index}>
            <h3>{request.type}</h3>
            <p>Status: {request.status}</p>
            <hr />
          </div>
        ))
      )}

      <button onClick={goBack}>⬅️ BACK</button>
    </div>
  );
}

export default MyRequests;