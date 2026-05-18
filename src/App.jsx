import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import ActivityScreen from "./components/ActivityScreen";

export default function App() {
  const [screen, setScreen] = useState("home"); // "home" | "activity"
  const [selectedActivity, setSelectedActivity] = useState(null);

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