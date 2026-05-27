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
    { id: 1, name: "Project_Guidelines_...", size: "2.4 MB", type: "pdf", color: "#FFEAEA", iconColor: "#E05C5C" },
    { id: 2, name: "Case_Study_Amazo...", size: "1.1 MB", type: "doc", color: "#EAF0FF", iconColor: "#4B7BF5" },
  ],
};

/* ── SVG Icons ── */
const IconSearch = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const IconBell = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const IconSettings = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconSchool = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconUser = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconHelpCircle = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconLogout = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconChevronRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const IconUpload = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
);
const IconDownload = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconCalendarDot = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconFolder = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconFileText = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconDoc = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

/* ── Sidebar Component ── */
function Sidebar({ onBack, onNewActivity }) {
  const navItems = [
    { label: "Classes", icon: <IconSchool /> },
    { label: "Schedule", icon: <IconCalendar /> },
    { label: "Profile", icon: <IconUser /> },
  ];

  return (
    <aside className="as-sidebar">
      <div className="as-logo">
        <div className="as-logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        </div>
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
            <span className="as-nav-icon">{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      <button className="as-btn-new-activity" onClick={onNewActivity}>
        <IconPlus /> New Activity
      </button>

      <div className="as-sidebar-bottom">
        <button className="as-sidebar-bottom-btn">
          <span className="as-nav-icon"><IconHelpCircle /></span> Help Center
        </button>
        <button className="as-sidebar-bottom-btn">
          <span className="as-nav-icon"><IconLogout /></span> Logout
        </button>
      </div>
    </aside>
  );
}

/* ── Main Component ── */
export default function ActivityScreen({ activity: propActivity, onBack }) {
  const [submitted, setSubmitted] = useState(false);

  // Merge: use default activityData as base, override with any fields from propActivity
  const activity = propActivity
    ? {
        ...activityData,
        // Map class fields to activity fields when coming from HomeScreen
        title: propActivity.title || propActivity.name || activityData.title,
        course: propActivity.course || activityData.course,
        description: propActivity.description || activityData.description,
        instructor: propActivity.instructor || {
          name: propActivity.teacher || activityData.instructor.name,
          email: activityData.instructor.email,
          initials: propActivity.teacher
            ? propActivity.teacher.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
            : activityData.instructor.initials,
        },
      }
    : activityData;

  return (
    <div className="as-app">
      <Sidebar onBack={onBack} />

      <main className="as-main">
        {/* Topbar */}
        <header className="as-topbar">
          <div className="as-breadcrumb">
            <button className="as-breadcrumb-link" onClick={onBack}>
              {activity.course}
            </button>
            <span className="as-breadcrumb-sep"><IconChevronRight /></span>
            <span className="as-breadcrumb-current">{activity.title}</span>
          </div>
          <div className="as-search-wrap">
            <span className="as-search-icon"><IconSearch /></span>
            <input className="as-search-input" placeholder="Search..." />
          </div>
          <button className="as-topbar-icon-btn as-bell-btn">
            <IconBell />
            <span className="as-bell-dot" />
          </button>
          <button className="as-topbar-icon-btn"><IconSettings /></button>
          <div className="as-avatar">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="User avatar"
              onError={(e) => { e.target.style.display = "none"; e.target.parentNode.textContent = "U"; }}
            />
          </div>
        </header>

        {/* Content */}
        <div className="as-content">
          {/* Left Column */}
          <div className="as-left">
            {/* Header */}
            <div className="as-title-area">
              <div className="as-header-row">
                <span className="as-badge-assignment">
                  <span className="as-badge-dot" />
                  {activity.type}
                </span>
                <span className="as-weight">Weight: {activity.weight}</span>
              </div>
              <h1 className="as-title">{activity.title}</h1>
              <p className="as-description">{activity.description}</p>
            </div>

            {/* Instructions Card */}
            <div className="as-card">
              <p className="as-card-title">
                <span className="as-card-title-icon"><IconFileText /></span>
                Instructions
              </p>
              <p className="as-instructions-text">{activity.instructions}</p>
              <p className="as-deliverables-title">Key Deliverables:</p>
              <div className="as-deliverables-list">
                {activity.deliverables.map((d) => (
                  <div key={d.id} className="as-deliverable-item">
                    <span className="as-deliverable-check"><IconCheck /></span>
                    <span>
                      <strong>{d.title}:</strong> {d.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Materials */}
            <div className="as-materials-section">
              <p className="as-card-title">
                <span className="as-card-title-icon"><IconFolder /></span>
                Support Materials
              </p>
              <div className="as-materials-grid">
                {activity.materials.map((m) => (
                  <div key={m.id} className="as-material-item">
                    <div className="as-material-icon" style={{ background: m.color }}>
                      <span style={{ color: m.iconColor }}>
                        {m.type === "pdf" ? <IconFileText /> : <IconDoc />}
                      </span>
                    </div>
                    <div className="as-material-info">
                      <p className="as-material-name">{m.name}</p>
                      <p className="as-material-size">{m.size}</p>
                    </div>
                    <button className="as-material-download">
                      <IconDownload />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="as-right">
            {/* Status Card */}
            <div className="as-status-card">
              <p className="as-status-label">Current Status</p>
              <div className="as-status-badge">
                <span className="as-status-dot" />
                {submitted ? "Submitted" : activity.status}
              </div>

              <p className="as-deadline-label">Deadline</p>
              <div className="as-deadline-date">
                <span className="as-deadline-cal-icon"><IconCalendarDot /></span>
                <p className="as-deadline-text">
                  <strong>{activity.deadline}</strong>{" "}
                  <span className="as-deadline-time">{activity.deadlineTime}</span>
                </p>
              </div>
              <p className="as-days-remaining">
                <IconClock /> {activity.daysRemaining} days remaining
              </p>

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
              >
                <IconUpload />
                {submitted ? "Activity Submitted" : "Submit Activity"}
              </button>
            </div>

            {/* Instructor Card */}
            <div className="as-instructor-card">
              <p className="as-instructor-label">INSTRUCTOR</p>
              <div className="as-instructor-info">
                <div className="as-instructor-avatar">
                  {activity.instructor.initials}
                </div>
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