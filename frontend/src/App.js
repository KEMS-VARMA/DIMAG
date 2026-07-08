import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Help from "./components/Help";
import Report from "./components/Report";
import SafeZones from "./components/SafeZones";
import MyRequests from "./components/MyRequests";

function App() {
  const [screen, setScreen] = useState("home");

  function handleSOS() {
    alert("🚨 SOS Activated!\n\nYour location will be shared with the nearest rescue team.");
  }

 function handleHelp() {
  setScreen("help");
}

function handleReport() {
  setScreen("report");
}
function handleSafeZones() {
  setScreen("safezones");
}
function handleMyRequests() {
  setScreen("myrequests");
}
if (screen === "help") {
  return (
    <Help
      goBack={() => setScreen("home")}
    />
  );
}
if (screen === "report") {
  return (
    <Report
      goBack={() => setScreen("home")}
    />
  );
}
if (screen === "safezones") {
  return (
    <SafeZones
      goBack={() => setScreen("home")}
    />
  );
}
if (screen === "myrequests") {
  return (
    <MyRequests
      goBack={() => setScreen("home")}
    />
  );
}
 return (
<Home
  handleSOS={handleSOS}
  handleReport={handleReport}
  handleHelp={handleHelp}
  handleSafeZones={handleSafeZones}
  handleMyRequests={handleMyRequests}
/>
);
}

export default App;