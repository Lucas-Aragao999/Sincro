import { useState } from "react";

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    background: "#f4f4f6",
    overflow: "hidden",
  },
  sidebar: {
    width: "220px",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    borderRight: "0.5px solid #e5e5e5",
    flexShrink: 0,
  },
  logoArea: {
    padding: "20px 16px 16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom: "0.5px solid #e5e5e5",
  },
  logoIcon: {
    width: "32px",
    height: "32px",
    background: "#4B3FBF",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: { lineHeight: "1.2" },
  logoStrong: { display: "block", fontSize: "15px", fontWeight: 600, color: "#4B3FBF" },
  logoSpan: { fontSize: "10px", color: "#888" },
  newBtn: {
    margin: "14px 12px",
    background: "#3A2FAF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'DM Sans', sans-serif",
  },
  nav: { flex: 1, padding: "8px 0" },
  navItem: (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    fontSize: "13px",
    color: active ? "#4B3FBF" : "#888",
    fontWeight: active ? 500 : 400,
    background: active ? "#EEEDFE" : "transparent",
    cursor: "pointer",
  }),
  sidebarBottom: { padding: "12px 0", borderTop: "0.5px solid #e5e5e5" },
  navItemBottom: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    fontSize: "13px",
    color: "#888",
    cursor: "pointer",
  },
  main: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" },
  topbar: {
    height: "52px",
    background: "#ffffff",
    borderBottom: "0.5px solid #e5e5e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 20px",
    gap: "12px",
    flexShrink: 0,
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#f4f4f6",
    border: "0.5px solid #e5e5e5",
    borderRadius: "20px",
    padding: "6px 14px",
    fontSize: "13px",
    color: "#888",
    minWidth: "160px",
  },
  topbarIcon: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#888",
    border: "0.5px solid #e5e5e5",
    background: "#fff",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#c8a48a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 500,
    color: "#fff",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "28px 20px",
  },
  card: {
    background: "#ffffff",
    border: "0.5px solid #e5e5e5",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "560px",
    overflow: "hidden",
  },
  cardHeader: { padding: "24px 28px 20px", borderBottom: "0.5px solid #e5e5e5" },
  cardTitle: { fontSize: "20px", fontWeight: 600, color: "#111", marginBottom: "4px" },
  cardSubtitle: { fontSize: "13px", color: "#888" },
  cardBody: { padding: "24px 28px", display: "flex", flexDirection: "column", gap: "20px" },
  field: { display: "flex", flexDirection: "column", gap: "6px" },
  label: { fontSize: "13px", fontWeight: 500, color: "#111" },
  req: { color: "#E24B4A", marginLeft: "2px" },
  input: (hasError) => ({
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#111",
    background: "#fff",
    border: `1.5px solid ${hasError ? "#E24B4A" : "#ddd"}`,
    borderRadius: "8px",
    padding: "10px 12px",
    outline: "none",
    width: "100%",
  }),
  textarea: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#111",
    background: "#fff",
    border: "1.5px solid #ddd",
    borderRadius: "8px",
    padding: "10px 12px",
    outline: "none",
    resize: "none",
    minHeight: "110px",
    width: "100%",
  },
  dateWrap: { position: "relative" },
  dateInput: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#888",
    background: "#fff",
    border: "1.5px solid #ddd",
    borderRadius: "8px",
    padding: "10px 12px",
    outline: "none",
    width: "100%",
  },
  errorMsg: { display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#E24B4A" },
  cardFooter: {
    padding: "16px 28px",
    borderTop: "0.5px solid #e5e5e5",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  btnCancel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    padding: "9px 20px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    background: "#fff",
    color: "#111",
    cursor: "pointer",
  },
  btnSave: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    padding: "9px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#3A2FAF",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
};

const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconSchool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconHelpCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const IconLogout = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
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
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconSave = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
  </svg>
);
const IconAlertCircle = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const SincroLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);

export default function CreateActivity({ onBack }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [activeNav, setActiveNav] = useState("Classes");

  const handleSave = () => {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }
    alert(`Activity "${title}" saved successfully!`);
    onBack && onBack();
  };

  const handleCancel = () => {
    onBack && onBack();
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) setTitleError(false);
  };

  const navItems = [
    { label: "Classes", icon: <IconSchool /> },
    { label: "Schedule", icon: <IconCalendar /> },
    { label: "Profile", icon: <IconUser /> },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div style={styles.app}>
        <aside style={styles.sidebar}>
          <div style={styles.logoArea}>
            <div style={styles.logoIcon}><SincroLogo /></div>
            <div style={styles.logoText}>
              <strong style={styles.logoStrong}>Sincro</strong>
              <span style={styles.logoSpan}>Academic Management</span>
            </div>
          </div>

          <button style={styles.newBtn}>
            <IconPlus />
            New Activity
          </button>

          <nav style={styles.nav}>
            {navItems.map(({ label, icon }) => (
              <div
                key={label}
                style={styles.navItem(activeNav === label)}
                onClick={() => setActiveNav(label)}
              >
                {icon}
                {label}
              </div>
            ))}
          </nav>

          <div style={styles.sidebarBottom}>
            <div style={styles.navItemBottom}><IconHelpCircle /> Help Center</div>
            <div style={styles.navItemBottom}><IconLogout /> Logout</div>
          </div>
        </aside>

        <main style={styles.main}>
          <div style={styles.topbar}>
            <div style={styles.searchBox}><IconSearch /> Search...</div>
            <div style={styles.topbarIcon}><IconBell /></div>
            <div style={styles.topbarIcon}><IconSettings /></div>
            <div style={styles.avatar}>AP</div>
          </div>

          <div style={styles.content}>
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <h1 style={styles.cardTitle}>Create New Activity</h1>
                <p style={styles.cardSubtitle}>
                  Fill in the details below to assign a new task to your class.
                </p>
              </div>

              <div style={styles.cardBody}>
                <div style={styles.field}>
                  <label style={styles.label}>
                    Title <span style={styles.req}>*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    style={styles.input(titleError)}
                    onFocus={(e) => (e.target.style.borderColor = titleError ? "#E24B4A" : "#4B3FBF")}
                    onBlur={(e) => (e.target.style.borderColor = titleError ? "#E24B4A" : "#ddd")}
                  />
                  {titleError && (
                    <div style={styles.errorMsg}>
                      <IconAlertCircle /> Required field
                    </div>
                  )}
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide detailed instructions for the activity..."
                    style={styles.textarea}
                    onFocus={(e) => (e.target.style.borderColor = "#4B3FBF")}
                    onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Due Date</label>
                  <div style={styles.dateWrap}>
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      style={styles.dateInput}
                      onFocus={(e) => (e.target.style.borderColor = "#4B3FBF")}
                      onBlur={(e) => (e.target.style.borderColor = "#ddd")}
                    />
                  </div>
                </div>
              </div>

              <div style={styles.cardFooter}>
                <button style={styles.btnCancel} onClick={handleCancel}>
                  Cancel
                </button>
                <button style={styles.btnSave} onClick={handleSave}>
                  <IconSave /> Save
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
