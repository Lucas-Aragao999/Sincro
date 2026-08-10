import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconFilter, IconSort, IconPlus } from "./layout/icons";
import { classes as initialClasses } from "../data/mockData";
import "../assets/HomeScreen.css";

const avatarColors = ["#a29bfe", "#74b9ff", "#fd79a8", "#55efc4", "#fdcb6e"];

function Avatar({ index }) {
  return (
    <div
      className="hs-card-avatar"
      style={{
        background: avatarColors[index % avatarColors.length],
        marginLeft: index === 0 ? 0 : -8,
      }}
    />
  );
}

function pendingCount(cls) {
  return cls.activities.filter((a) => a.status === "pending" || a.status === "overdue").length;
}

function ClassCard({ cls, onOpen }) {
  const pending = pendingCount(cls);
  return (
    <div className="hs-class-card" onClick={() => onOpen(cls)}>
      <div className="hs-card-top">
        <div className="hs-card-icon" style={{ background: cls.color }}>
          {cls.icon}
        </div>
        {pending > 0 ? (
          <span className="hs-badge-pending">📋 {pending} pendente{pending > 1 ? "s" : ""}</span>
        ) : (
          <span className="hs-badge-done">✓ Tudo em dia</span>
        )}
      </div>

      <p className="hs-card-name">{cls.name}</p>
      <p className="hs-card-teacher">
        <span>👤</span> {cls.teacher}
      </p>

      <hr className="hs-card-divider" />

      <div className="hs-card-footer">
        <div className="hs-card-avatars">
          {[0, 1, 2].map((i) => (
            <Avatar key={i} index={i} />
          ))}
          <span className="hs-card-student-count">+{cls.students}</span>
        </div>
        <span className="hs-card-arrow">→</span>
      </div>
    </div>
  );
}

function JoinCard({ onJoin }) {
  const [code, setCode] = useState("");
  return (
    <div className="hs-join-card">
      <div className="hs-join-icon">
        <IconPlus />
      </div>
      <p className="hs-join-title">Entrar em uma Turma</p>
      <p className="hs-join-subtitle">Informe o código da turma para se matricular</p>
      <input
        className="hs-join-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Código da turma..."
      />
      <button className="hs-join-btn" onClick={() => onJoin(code)}>
        Matricular-se
      </button>
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState(initialClasses);
  const [search, setSearch] = useState("");
  const [filterPending, setFilterPending] = useState(false);
  const [sortAlpha, setSortAlpha] = useState(false);

  const handleJoin = (code) => {
    if (!code.trim()) return;
    setClasses((prev) => [
      ...prev,
      {
        id: `turma-${Date.now()}`,
        name: `Turma ${code.toUpperCase()}`,
        teacher: "A definir",
        icon: "📚",
        color: "#e8f4ff",
        students: 0,
        progress: 0,
        activities: [],
      },
    ]);
  };

  let displayed = classes.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.teacher.toLowerCase().includes(search.toLowerCase())
  );
  if (filterPending) displayed = displayed.filter((c) => pendingCount(c) > 0);
  if (sortAlpha) displayed = [...displayed].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <AppShell>
      <Topbar
        search={search}
        onSearchChange={setSearch}
        placeholder="Buscar turmas, atividades..."
      />

      <div className="lay-content">
        <div className="lay-content-header">
          <div>
            <h1 className="lay-content-title">Minhas Turmas</h1>
            <p className="lay-content-subtitle">Gerencie suas turmas e atividades pendentes.</p>
          </div>
          <div className="hs-header-actions">
            <button
              className={`hs-action-btn ${filterPending ? "active" : ""}`}
              onClick={() => setFilterPending((p) => !p)}
            >
              <IconFilter /> Filtrar{filterPending ? " (pendentes)" : ""}
            </button>
            <button
              className={`hs-action-btn ${sortAlpha ? "active" : ""}`}
              onClick={() => setSortAlpha((s) => !s)}
            >
              <IconSort /> Ordenar{sortAlpha ? " (A-Z)" : ""}
            </button>
          </div>
        </div>

        <div className="hs-classes-grid">
          {displayed.map((cls) => (
            <ClassCard key={cls.id} cls={cls} onOpen={(c) => navigate(`/turma/${c.id}`)} />
          ))}
          <JoinCard onJoin={handleJoin} />
        </div>
      </div>
    </AppShell>
  );
}
