import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Help from "./components/Help";

function App() {
  const [screen, setScreen] = useState("home");

  function handleSOS() {
    alert("🚨 SOS Activated!\n\nYour location will be shared with the nearest rescue team.");
  }

 function handleHelp() {
  setScreen("help");
}

  function handleReport() {
    alert("🚨 Report Disaster\n\nReport submitted successfully.");
  }
if (screen === "help") {
  return (
    <Help
      goBack={() => setScreen("home")}
    />
  );
}

 return (
  <Home
    handleSOS={handleSOS}
    handleReport={handleReport}
    handleHelp={handleHelp}
  />
);
}

export default App;