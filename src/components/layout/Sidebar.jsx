import { useNavigate, useLocation } from "react-router-dom";
import {
  IconPlus,
  IconSchool,
  IconCalendar,
  IconUser,
  IconHelpCircle,
  IconLogout,
  SincroLogo,
} from "./icons";
import "../../assets/Layout.css";

const navItems = [
  { label: "Turmas", icon: <IconSchool />, path: "/home", match: ["/home", "/turma", "/painel-professor"] },
  { label: "Agenda", icon: <IconCalendar />, path: "/agenda", match: ["/agenda"] },
  { label: "Perfil", icon: <IconUser />, path: "/perfil", match: ["/perfil"] },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (item) => item.match.some((m) => location.pathname.startsWith(m));

  return (
    <aside className="lay-sidebar">
      <button className="lay-logo" onClick={() => navigate("/home")}>
        <div className="lay-logo-icon">
          <SincroLogo />
        </div>
        <div>
          <p className="lay-logo-name">Sincro</p>
          <p className="lay-logo-sub">Academic Management</p>
        </div>
      </button>

      <button className="lay-btn-new-activity" onClick={() => navigate("/create-activity")}>
        <IconPlus /> Nova Atividade
      </button>

      <nav className="lay-nav">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`lay-nav-btn ${isActive(item) ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <span className="lay-nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="lay-sidebar-bottom">
        <button className="lay-sidebar-bottom-btn">
          <span className="lay-nav-icon">
            <IconHelpCircle />
          </span>
          Central de Ajuda
        </button>
        <button className="lay-sidebar-bottom-btn" onClick={() => navigate("/login")}>
          <span className="lay-nav-icon">
            <IconLogout />
          </span>
          Sair
        </button>
      </div>
    </aside>
  );
}
