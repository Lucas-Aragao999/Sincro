import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconEdit, IconShare, IconPin, IconBadge, IconStar, IconTrendUp, IconLock } from "./layout/icons";
import { currentStudent } from "../data/mockData";
import "../assets/Profile.css";

export default function Profile() {
  const s = currentStudent;

  return (
    <AppShell>
      <Topbar placeholder="Buscar..." />

      <div className="lay-content">
        <div className="pf-banner">
          <div className="pf-avatar">{s.initials}</div>
          <div className="pf-banner-info">
            <h1 className="pf-name">{s.name}</h1>
            <p className="pf-course">
              {s.course} · {s.period}
            </p>
            <div className="pf-tags">
              <span className="pf-tag">
                <IconPin /> {s.campus}
              </span>
              <span className="pf-tag">
                <IconBadge /> Matrícula {s.registration}
              </span>
            </div>
          </div>
          <div className="pf-banner-actions">
            <button className="pf-btn-edit">
              <IconEdit /> Editar Perfil
            </button>
            <button className="pf-btn-share">
              <IconShare />
            </button>
          </div>
        </div>

        <div className="pf-stats-row">
          <div className="pf-stat-card">
            <div className="pf-stat-top">
              <span className="pf-stat-icon pf-stat-icon-success">✔</span>
              <span className="pf-stat-trend">
                <IconTrendUp /> {s.stats.completedActivitiesTrend}
              </span>
            </div>
            <p className="pf-stat-label">Atividades Concluídas</p>
            <p className="pf-stat-value">{s.stats.completedActivities}</p>
          </div>

          <div className="pf-stat-card">
            <div className="pf-stat-top">
              <span className="pf-stat-icon pf-stat-icon-primary">
                <IconStar />
              </span>
              <span className="pf-stat-trend">{s.stats.averageTrend}</span>
            </div>
            <p className="pf-stat-label">Média Geral</p>
            <p className="pf-stat-value">
              {s.stats.average} <span className="pf-stat-value-sub">/ 10</span>
            </p>
          </div>

          <div className="pf-achievements-card">
            <div className="pf-achievements-head">
              <p className="pf-stat-label">Minhas Conquistas</p>
              <button className="pf-see-all">Ver todas</button>
            </div>
            <div className="pf-achievements-grid">
              {s.achievements.map((a) => (
                <div key={a.id} className={`pf-achievement ${a.unlocked ? "" : "locked"}`}>
                  <span className="pf-achievement-icon">{a.unlocked ? a.icon : <IconLock />}</span>
                  <p className="pf-achievement-label">{a.label}</p>
                  <p className="pf-achievement-detail">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pf-attendance-card">
          <p className="pf-card-title">Assiduidade Geral</p>
          <p className="pf-attendance-note">
            Presença nas aulas no semestre atual: <strong>{s.stats.attendance}%</strong>
          </p>
          <div className="pf-attendance-bar-bg">
            <div className="pf-attendance-bar-fill" style={{ width: `${s.stats.attendance}%` }} />
          </div>
        </div>

        <div className="pf-recent-card">
          <p className="pf-card-title">Atividade Recente</p>
          <div className="pf-recent-list">
            {s.recentActivity.map((r) => (
              <div key={r.id} className="pf-recent-item">
                <span className="pf-recent-icon">{r.icon}</span>
                <div className="pf-recent-info">
                  <p className="pf-recent-title">{r.title}</p>
                  <p className="pf-recent-detail">{r.detail}</p>
                </div>
                <span className="pf-recent-time">{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
