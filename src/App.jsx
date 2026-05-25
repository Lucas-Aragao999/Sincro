
import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import HomeScreen from "./components/HomeScreen";
import ActivityScreen from "./components/ActivityScreen";

export default function App() {
  const [screen, setScreen] = useState("login"); 
  const [selectedActivity, setSelectedActivity] = useState(null);

  if (screen === "login") {
    return (
      <LoginScreen
        onLogin={() => setScreen("home")}
        onGoToRegister={() => setScreen("register")}
      />
    );
  }

  if (screen === "register") {
    return (
      <RegisterScreen
        onRegister={() => setScreen("home")}
        onGoToLogin={() => setScreen("login")}
      />
    );
  }

  if (screen === "activity") {
    return (
      <ActivityScreen
        activity={selectedActivity}
        onBack={() => setScreen("home")}
      />
    );
  }

  return (
    <HomeScreen
      onOpenActivity={(activity) => {
        setSelectedActivity(activity);
        setScreen("activity");
      }}
    />
  );
}