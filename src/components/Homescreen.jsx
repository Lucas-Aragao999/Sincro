import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/HomeScreen.css";

const initialClasses = [
  {
    id: 1,
    name: "Advanced Mathematics",
    teacher: "Dr. Alan Turing",
    pending: 3,
    students: 27,
    icon: "📐",
    color: "#e8e4fc",
  },
  {
    id: 2,
    name: "Molecular Biology",
    teacher: "Prof. Rosalind Franklin",
    pending: 1,
    students: 21,
    icon: "🔬",
    color: "#e0f5ee",
  },
  {
    id: 3,
    name: "World History",
    teacher: "Dr. Mary Beard",
    pending: 0,
    students: 35,
    icon: "📖",
    color: "#f0ece3",
  },
];

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

function ClassCard({ cls, onClick }) {
  return (
    <div className="hs-class-card" onClick={() => onClick(cls)}>
      <div className="hs-card-top">
        <div className="hs-card-icon" style={{ background: cls.color }}>
          {cls.icon}
        </div>
        {cls.pending > 0 ? (
          <span className="hs-badge-pending">📋 {cls.pending} Pending</span>
        ) : (
          <span className="hs-badge-done">✓ All caught up</span>
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
      <div className="hs-join-icon">+</div>
      <p className="hs-join-title">Join a Class</p>
      <p className="hs-join-subtitle">Enter a class code to enroll</p>
      <input
        className="hs-join-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Class code..."
      />
      <button className="hs-join-btn" onClick={() => onJoin(code)}>
        Enroll
      </button>
    </div>
  );
}

function Modal({ cls, onClose }) {
  const navigate = useNavigate();
  if (!cls) return null;
  return (
    <div className="hs-modal-overlay" onClick={onClose}>
      <div className="hs-modal" onClick={(e) => e.stopPropagation()}>
        <div className="hs-modal-header">
          <div className="hs-modal-icon" style={{ background: cls.color }}>
            {cls.icon}
          </div>
          <button className="hs-modal-close" onClick={onClose}>✕</button>
        </div>
        <p className="hs-modal-title">{cls.name}</p>
        <p className="hs-modal-teacher">{cls.teacher}</p>
        <div className="hs-modal-stats">
          <div className="hs-modal-stat" style={{ background: "#f8f8ff" }}>
            <p className="hs-modal-stat-value" style={{ color: "#6c5ce7" }}>{cls.students}</p>
            <p className="hs-modal-stat-label">Students</p>
          </div>
          <div
            className="hs-modal-stat"
            style={{ background: cls.pending > 0 ? "#fff5f5" : "#f0faf5" }}
          >
            <p
              className="hs-modal-stat-value"
              style={{ color: cls.pending > 0 ? "#e55050" : "#00a86b" }}
            >
              {cls.pending}
            </p>
            <p className="hs-modal-stat-label">Pending</p>
          </div>
        </div>
        <button
          className="hs-modal-btn"
          onClick={() => navigate("/activity", { state: { activity: cls } })}
        >
          Open Class
        </button>
      </div>
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Classes");
  const [classes, setClasses] = useState(initialClasses);
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState(null);
  const [filterPending, setFilterPending] = useState(false);
  const [sortAlpha, setSortAlpha] = useState(false);

  const navItems = [
    { label: "Classes", icon: "🎓" },
    { label: "Schedule", icon: "📅" },
    { label: "Profile", icon: "👤" },
  ];

  const handleJoin = (code) => {
    if (!code.trim()) return;
    setClasses((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: `Class ${code.toUpperCase()}`,
        teacher: "TBA",
        pending: 0,
        students: 0,
        icon: "📚",
        color: "#e8f4ff",
      },
    ]);
  };

  let displayed = classes.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.teacher.toLowerCase().includes(search.toLowerCase())
  );
  if (filterPending) displayed = displayed.filter((c) => c.pending > 0);
  if (sortAlpha) displayed = [...displayed].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="hs-app">
      {selectedClass && (
        <Modal
          cls={selectedClass}
          onClose={() => setSelectedClass(null)}
          onOpenActivity={onOpenActivity}
        />
      )}

      {/* Sidebar */}
      <aside className="hs-sidebar">
        <div className="hs-logo">
          <div className="hs-logo-icon">S</div>
          <div>
            <p className="hs-logo-name">Sincro</p>
            <p className="hs-logo-sub">Academic Management</p>
          </div>
        </div>

        <button className="hs-btn-new-activity" onClick={() => navigate("/create-activity")}>
          + New Activity
        </button>

        <nav className="hs-nav">
          {navItems.map(({ label, icon }) => (
            <button
              key={label}
              className={`hs-nav-btn ${activePage === label ? "active" : ""}`}
              onClick={() => setActivePage(label)}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </nav>

        <div className="hs-sidebar-bottom">
          {["Help Center", "Logout"].map((item) => (
            <button key={item} className="hs-sidebar-bottom-btn">
              {item === "Help Center" ? "❓ " : "↩ "}
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="hs-main">
        {/* Topbar */}
        <header className="hs-topbar">
          <div className="hs-search-wrap">
            <span className="hs-search-icon">🔍</span>
            <input
              className="hs-search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search classes, activities..."
            />
          </div>
          <button className="hs-topbar-icon-btn">🔔</button>
          <button className="hs-topbar-icon-btn">⚙️</button>
          <div className="hs-avatar">U</div>
        </header>

        {/* Content */}
        <div className="hs-content">
          {activePage === "Classes" && (
            <>
              <div className="hs-content-header">
                <div>
                  <h1 className="hs-content-title">My Classes</h1>
                  <p className="hs-content-subtitle">
                    Manage your courses and upcoming activities.
                  </p>
                </div>
                <div className="hs-header-actions">
                  <button
                    className={`hs-action-btn ${filterPending ? "active" : ""}`}
                    onClick={() => setFilterPending((p) => !p)}
                  >
                    ⚡ Filter{filterPending ? " (on)" : ""}
                  </button>
                  <button
                    className={`hs-action-btn ${sortAlpha ? "active" : ""}`}
                    onClick={() => setSortAlpha((s) => !s)}
                  >
                    ↕ Sort{sortAlpha ? " (A-Z)" : ""}
                  </button>
                </div>
              </div>

              <div className="hs-classes-grid">
                {displayed.map((cls) => (
                  <ClassCard key={cls.id} cls={cls} onClick={setSelectedClass} />
                ))}
                <JoinCard onJoin={handleJoin} />
              </div>
            </>
          )}

          {activePage === "Schedule" && (
            <div className="hs-empty-state">
              <p className="hs-empty-icon">📅</p>
              <p className="hs-empty-text">Schedule coming soon</p>
            </div>
          )}

          {activePage === "Profile" && (
            <div className="hs-empty-state">
              <p className="hs-empty-icon">👤</p>
              <p className="hs-empty-text">Profile coming soon</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
