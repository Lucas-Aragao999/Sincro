import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/Homescreen";
import ClassDetail from "./components/ClassDetail";
import ActivityScreen from "./components/ActivityScreen";
import CreateActivity from "./components/CreateActivity";
import Profile from "./components/Profile";
import Agenda from "./components/Agenda";
import TeacherDashboard from "./components/TeacherDashboard";
import Settings from "./components/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/turma/:classId" element={<ClassDetail />} />
      <Route path="/atividade/:classId/:activityId" element={<ActivityScreen />} />
      <Route path="/create-activity" element={<CreateActivity />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/painel-professor" element={<TeacherDashboard />} />
      <Route path="/configuracoes" element={<Settings />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
