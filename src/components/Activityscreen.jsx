import { useState } from "react";
import "../assets/ActivityScreen.css";

const activityData = {
  id: 1,
  course: "CS401: Advanced Networks",
  title: "Distributed Systems Analysis",
  description:
    "Analyze a real-world distributed system architecture focusing on fault tolerance and scalability.",
  type: "Assignment",
  weight: "15%",
  status: "In Progress",
  deadline: "Nov 15, 2024",
  deadlineTime: "11:59 PM",
  daysRemaining: 4,
  progress: 45,
  instructor: {
    name: "Dr. Jane Doe",
    email: "jane.doe@sincro.edu",
    initials: "JD",
  },
  instructions:
    "For this assignment, you will need to select a well-known distributed system (e.g., Apache Kafka, Cassandra, DynamoDB) and provide a comprehensive analysis of its architecture. Your report should be roughly 2,500 words.",
  deliverables: [
    {
      id: 1,
      title: "Architecture Diagram",
      description: "A high-level overview of components.",
    },
    {
      id: 2,
      title: "Fault Tolerance Mechanisms",
      description: "How does the system handle node failures?",
    },
    {
      id: 3,
      title: "Consistency Model",
      description: "Discuss eventual vs. strong consistency trade-offs.",
    },
    {
      id: 4,
      title: "Scalability Limits",
      description: "Identify potential bottlenecks under high load.",
    },
  ],
  materials: [
    { id: 1, name: "Project_Guidelines_", size: "2.4 MB", icon: "📄", color: "#ffeaea" },
    { id: 2, name: "Case_Study_Amazo...", size: "1.1 MB", icon: "📋", color: "#eaf0ff" },
  ],
};

export default function ActivityScreen({ onBack }) {
  const [submitted, setSubmitted] = useState(false);
  const activity = activityData;

  const navItems = [
    { label: "Classes", icon: "🎓" },
    { label: "Schedule", icon: "📅" },
    { label: "Profile", icon: "👤" },
  ];

  return (
    <div className="as-app">
      {/* Sidebar */}
      <aside className="as-sidebar">
        <div className="as-logo">
          <div className="as-logo-icon">S</div>
          <div>
            <p className="as-logo-name">Sincro</p>
            <p className="as-logo-sub">Academic Management</p>
          </div>
        </div>

        <nav className="as-nav">
          {navItems.map(({ label, icon }) => (
            <button
              key={label}
              className={`as-nav-btn ${label === "Classes" ? "active" : ""}`}
              onClick={label === "Classes" ? onBack : undefined}
            >
              <span>{icon}</span> {label}
            </button>
          ))}
        </nav>

        <div className="as-sidebar-bottom">
          <button className="as-btn-new-activity">+ New Activity</button>
          {["Help Center", "Logout"].map((item) => (
            <button key={item} className="as-sidebar-bottom-btn">
              {item === "Help Center" ? "❓ " : "↩ "}
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="as-main">
        {/* Topbar */}
        <header className="as-topbar">
          <div className="as-breadcrumb">
            <button className="as-breadcrumb-link" onClick={onBack}>
              {activity.course}
            </button>
            <span className="as-breadcrumb-sep">›</span>
            <span className="as-breadcrumb-current">{activity.title}</span>
          </div>
          <div className="as-search-wrap">
            <span className="as-search-icon">🔍</span>
            <input className="as-search-input" placeholder="Search..." />
          </div>
          <button className="as-topbar-icon-btn">🔔</button>
          <button className="as-topbar-icon-btn">⚙️</button>
          <div className="as-avatar">U</div>
        </header>

        {/* Content */}
        <div className="as-content">
          {/* Left */}
          <div className="as-left">
            {/* Title area */}
            <div>
              <div className="as-header">
                <span className="as-badge-assignment">
                  <span className="as-badge-dot" />
                  {activity.type}
                </span>
                <span className="as-weight">Weight: {activity.weight}</span>
              </div>
              <h1 className="as-title">{activity.title}</h1>
              <p className="as-description">{activity.description}</p>
            </div>

            {/* Instructions */}
            <div className="as-card">
              <p className="as-card-title">📄 Instructions</p>
              <p className="as-instructions-text">{activity.instructions}</p>
              <p className="as-deliverables-title">Key Deliverables:</p>
              {activity.deliverables.map((d) => (
                <div key={d.id} className="as-deliverable-item">
                  <span className="as-deliverable-check">✅</span>
                  <span>
                    <strong>{d.title}:</strong> {d.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Support Materials */}
            <div>
              <p className="as-card-title">📁 Support Materials</p>
              <div className="as-materials-grid">
                {activity.materials.map((m) => (
                  <div key={m.id} className="as-material-item">
                    <div className="as-material-icon" style={{ background: m.color }}>
                      {m.icon}
                    </div>
                    <div className="as-material-info">
                      <p className="as-material-name">{m.name}</p>
                      <p className="as-material-size">{m.size}</p>
                    </div>
                    <button className="as-material-download">⬇</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="as-right">
            {/* Status card */}
            <div className="as-status-card">
              <p className="as-status-label">Current Status</p>
              <div className="as-status-badge">
                <span>◎</span> {submitted ? "Submitted" : activity.status}
              </div>

              <p className="as-deadline-label">Deadline</p>
              <div className="as-deadline-date">
                <span className="as-deadline-icon">📅</span>
                <p className="as-deadline-text">
                  {activity.deadline}{" "}
                  <span className="as-deadline-time">{activity.deadlineTime}</span>
                </p>
              </div>
              <p className="as-days-remaining">{activity.daysRemaining} days remaining</p>

              <div className="as-progress-bar-bg">
                <div
                  className="as-progress-bar-fill"
                  style={{ width: `${submitted ? 100 : activity.progress}%` }}
                />
              </div>
              <div className="as-progress-row">
                <span>Progress</span>
                <span>{submitted ? "100%" : `${activity.progress}%`}</span>
              </div>

              <button
                className="as-submit-btn"
                onClick={() => setSubmitted(true)}
                disabled={submitted}
                style={{ opacity: submitted ? 0.6 : 1, cursor: submitted ? "default" : "pointer" }}
              >
                ⬆ {submitted ? "Activity Submitted" : "Submit Activity"}
              </button>
            </div>

            {/* Instructor card */}
            <div className="as-instructor-card">
              <p className="as-instructor-label">Instructor</p>
              <div className="as-instructor-info">
                <div className="as-instructor-avatar">{activity.instructor.initials}</div>
                <div>
                  <p className="as-instructor-name">{activity.instructor.name}</p>
                  <p className="as-instructor-email">{activity.instructor.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}