import { useNavigate } from "react-router-dom";
import { IconSearch, IconBell, IconSettings } from "./icons";
import "../../assets/Layout.css";

export default function Topbar({
  left,
  search,
  onSearchChange,
  placeholder = "Buscar...",
  avatarLabel = "LA",
}) {
  const navigate = useNavigate();

  return (
    <header className="lay-topbar">
      {left}
      <div className={`lay-search-wrap ${left ? "" : "lay-search-wrap--grow"}`}>
        <span className="lay-search-icon">
          <IconSearch />
        </span>
        <input
          className="lay-search-input"
          value={search ?? ""}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          placeholder={placeholder}
          readOnly={!onSearchChange}
        />
      </div>
      <button className="lay-topbar-icon-btn lay-bell-btn">
        <IconBell />
        <span className="lay-bell-dot" />
      </button>
      <button className="lay-topbar-icon-btn" onClick={() => navigate("/configuracoes")}>
        <IconSettings />
      </button>
      <button className="lay-avatar" onClick={() => navigate("/perfil")}>
        {avatarLabel}
      </button>
    </header>
  );
}
