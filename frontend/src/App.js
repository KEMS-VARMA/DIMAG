import { useState } from "react";
import { Activity } from "lucide-react";
import "./App.css";
import Home from "./components/Home";
import Help from "./components/Help";
import Report from "./components/Report";
import SafeZones from "./components/SafeZones";
import MyRequests from "./components/MyRequests";
import SosActive from "./components/SosActive";
import SuccessConfirmation from "./components/SuccessConfirmation";

function App() {
  const [screen, setScreen] = useState("home");
  const [successType, setSuccessType] = useState(null);

  function handleSOS() {
    setScreen("sos_active");
  }

  function handleSuccess(type) {
    setSuccessType(type);
    setScreen("success");
  }

  function renderScreen() {
    switch (screen) {
      case "sos_active":
        return <SosActive goBack={() => setScreen("home")} />;
      case "success":
        return <SuccessConfirmation goBack={() => setScreen("home")} type={successType} />;
      case "help":
        return <Help goBack={() => setScreen("home")} onSuccess={() => handleSuccess('help')} />;
      case "report":
        return <Report goBack={() => setScreen("home")} onSuccess={() => handleSuccess('report')} />;
      case "safezones":
        return <SafeZones goBack={() => setScreen("home")} />;
      case "myrequests":
        return <MyRequests goBack={() => setScreen("home")} />;
      default:
        return (
          <div className="app-container">
            <nav className="navbar solid-shadow">
              <div className="navbar-brand" onClick={() => setScreen("home")}>
                <Activity size={28} color="var(--color-sos)" strokeWidth={3} />
                DIMAG
              </div>
            </nav>
            <main className="main-content">
              <Home
                handleSOS={handleSOS}
                handleReport={() => setScreen("report")}
                handleHelp={() => setScreen("help")}
                handleSafeZones={() => setScreen("safezones")}
                handleMyRequests={() => setScreen("myrequests")}
              />
            </main>
          </div>
        );
    }
  }

  return renderScreen();
}

export default App;