import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import ActivityScreen from "./components/ActivityScreen";
import CreateActivity from "./components/CreateActivity";

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

  if (screen === "activity") {
    return (
      <ActivityScreen
        activity={selectedActivity}
        onBack={() => setScreen("home")}
      />
    );
  }

  if (screen === "create-activity") {
    return <CreateActivity onBack={() => setScreen("home")} />;
  }

  return (
    <HomeScreen
      onOpenActivity={(activity) => {
        setSelectedActivity(activity);
        setScreen("activity");
      }}
      onNewActivity={() => setScreen("create-activity")}
    />
  );
}
