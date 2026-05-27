import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/Homescreen";
import ActivityScreen from "./components/ActivityScreen";
import CreateActivity from "./components/CreateActivity";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/activity" element={<ActivityScreen />} />
      <Route path="/create-activity" element={<CreateActivity />} />
    </Routes>
  );
}
