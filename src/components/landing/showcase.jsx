/*
 * Pedaços REAIS da interface do Sincro, reaproveitados na landing.
 *
 * Cada componente aqui repete o mesmo markup e as mesmas classes das telas do
 * produto e consome os mesmos dados de src/data/mockData.js — nada é redesenhado.
 * A única diferença é que são decorativos: `inert` + aria-hidden tiram da árvore
 * de acessibilidade e do foco, porque a informação de verdade está no texto da
 * seção que os acompanha.
 */
import {
  IconClock,
  IconTrendUp,
  IconStar,
  IconTriangleAlert,
  IconUser,
  IconLock,
  IconDownload,
  IconFileText,
  IconDoc,
} from "../layout/icons";
import {
  classes,
  currentStudent,
  upcomingDeadlines,
  teacherClasses,
  engagementWeeks,
  activityDetail,
  agendaEvents,
} from "../../data/mockData";

import "../../assets/HomeScreen.css";
import "../../assets/ClassDetail.css";
import "../../assets/ActivityScreen.css";
import "../../assets/Agenda.css";
import "../../assets/Profile.css";
import "../../assets/TeacherDashboard.css";
import "../../assets/Settings.css";

const decorative = { "aria-hidden": "true", inert: true };

const avatarColors = ["#a29bfe", "#74b9ff", "#fd79a8", "#55efc4", "#fdcb6e"];

function pendingCount(cls) {
  return cls.activities.filter((a) => a.status === "pending" || a.status === "overdue").length;
}

/* ── HomeScreen ── */
export function ClassCard({ index = 0 }) {
  const cls = classes[index];
  const pending = pendingCount(cls);

  return (
    <div className="hs-class-card" {...decorative}>
      <div className="hs-card-top">
        <div className="hs-card-icon" style={{ background: cls.color }}>
          {cls.icon}
        </div>
        {pending > 0 ? (
          <span className="hs-badge-pending">
            📋 {pending} pendente{pending > 1 ? "s" : ""}
          </span>
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
            <div
              key={i}
              className="hs-card-avatar"
              style={{ background: avatarColors[i], marginLeft: i === 0 ? 0 : -8 }}
            />
          ))}
          <span className="hs-card-student-count">+{cls.students}</span>
        </div>
        <span className="hs-card-arrow">→</span>
      </div>
    </div>
  );
}

/* ── ClassDetail ── */
export function ActivityCard({ classIndex = 0, activityIndex = 0 }) {
  const a = classes[classIndex].activities[activityIndex];

  return (
    <div className="cd-activity-card" {...decorative}>
      <div className="cd-activity-top">
        <span className={`cd-tag cd-tag-${a.status}`}>{a.statusLabel}</span>
        {a.status === "completed" && <span className="cd-score">{a.score}/10</span>}
      </div>
      <p className="cd-activity-title">{a.title}</p>
      <p className="cd-activity-desc">{a.description}</p>
      <span className={`cd-activity-btn cd-activity-btn-${a.status} ld-as-btn`}>
        {a.status === "pending" && "Marcar como feito"}
        {a.status === "completed" && "Ver Feedback"}
        {a.status === "overdue" && "Enviar com atraso"}
      </span>
    </div>
  );
}

/* ── Agenda ── */
export function DeadlineCard({ index = 0 }) {
  const d = upcomingDeadlines[index];

  return (
    <div className="ag-deadline-item ld-deadline-solo" {...decorative}>
      <div className="ag-deadline-top">
        <span className="ag-deadline-tag" style={{ color: d.tagColor }}>
          {d.tag}
        </span>
      </div>
      <p className="ag-deadline-title">{d.title}</p>
      <p className="ag-deadline-time">
        <IconClock /> {d.time}
      </p>
      <div className="ag-deadline-bar-bg">
        <div
          className="ag-deadline-bar-fill"
          style={{ width: `${d.progress}%`, background: d.barColor }}
        />
      </div>
    </div>
  );
}

export function DeadlineList() {
  return (
    <div className="ag-sidebar-card ld-deadline-list" {...decorative}>
      <p className="ag-sidebar-title">Próximos Prazos</p>
      <div className="ag-deadline-list">
        {upcomingDeadlines.map((d) => (
          <div key={d.id} className="ag-deadline-item">
            <div className="ag-deadline-top">
              <span className="ag-deadline-tag" style={{ color: d.tagColor }}>
                {d.tag}
              </span>
            </div>
            <p className="ag-deadline-title">{d.title}</p>
            <p className="ag-deadline-time">
              <IconClock /> {d.time}
            </p>
            <div className="ag-deadline-bar-bg">
              <div
                className="ag-deadline-bar-fill"
                style={{ width: `${d.progress}%`, background: d.barColor }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EventChips() {
  return (
    <div className="ld-chips" {...decorative}>
      {agendaEvents.slice(0, 4).map((ev, i) => (
        <span key={i} className="ag-event-chip" style={{ background: ev.bg, color: ev.color }}>
          {ev.title}
        </span>
      ))}
    </div>
  );
}

/* ── Profile ── */
export function StatCompleted() {
  const s = currentStudent;
  return (
    <div className="pf-stat-card" {...decorative}>
      <div className="pf-stat-top">
        <span className="pf-stat-icon pf-stat-icon-success">✔</span>
        <span className="pf-stat-trend">
          <IconTrendUp /> {s.stats.completedActivitiesTrend}
        </span>
      </div>
      <p className="pf-stat-label">Atividades Concluídas</p>
      <p className="pf-stat-value">{s.stats.completedActivities}</p>
    </div>
  );
}

export function StatAverage() {
  const s = currentStudent;
  return (
    <div className="pf-stat-card" {...decorative}>
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
  );
}

export function AttendanceBar() {
  const s = currentStudent;
  return (
    <div className="pf-attendance-card ld-flush" {...decorative}>
      <p className="pf-card-title">Assiduidade Geral</p>
      <p className="pf-attendance-note">
        Presença nas aulas no semestre atual: <strong>{s.stats.attendance}%</strong>
      </p>
      <div className="pf-attendance-bar-bg">
        <div className="pf-attendance-bar-fill" style={{ width: `${s.stats.attendance}%` }} />
      </div>
    </div>
  );
}

export function AchievementsCard() {
  const s = currentStudent;
  return (
    <div className="pf-achievements-card ld-flush" {...decorative}>
      <div className="pf-achievements-head">
        <p className="pf-stat-label">Minhas Conquistas</p>
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
  );
}

/* ── TeacherDashboard ── */
export function AlertCard() {
  return (
    <div className="td-alert-card ld-flush" {...decorative}>
      <p className="td-alert-label">
        <IconTriangleAlert /> ATENÇÃO NECESSÁRIA
      </p>
      <p className="td-alert-value">15</p>
      <p className="td-alert-text">Trabalhos pendentes de correção</p>
      <span className="td-alert-btn ld-as-btn">Revisar Agora</span>
    </div>
  );
}

export function EngagementChart() {
  const maxValue = Math.max(...engagementWeeks.map((w) => w.value));

  return (
    <div className="td-engagement-card ld-flush" {...decorative}>
      <p className="td-card-title">Engajamento Geral</p>
      <p className="td-card-subtitle">Taxa de participação nas últimas 4 semanas</p>
      <div className="td-chart">
        {engagementWeeks.map((w) => (
          <div key={w.label} className="td-chart-col">
            <div
              className={`td-chart-bar ${w.label === "Atual" ? "active" : ""}`}
              style={{ height: `${(w.value / maxValue) * 100}%` }}
            />
            <span className="td-chart-label">{w.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TeacherClassCard({ index = 0 }) {
  const c = teacherClasses[index];

  return (
    <div className="td-class-card" {...decorative}>
      <div className="td-class-top">
        <span className="td-class-icon">{c.icon}</span>
        <span className="td-class-status" style={{ background: c.statusBg, color: c.statusColor }}>
          {c.status}
        </span>
      </div>
      <p className="td-class-name">{c.name}</p>
      <p className="td-class-grade">{c.grade}</p>
      <div className="td-class-footer">
        <span>
          <IconUser /> {c.students} Alunos
        </span>
        <span>{c.footer}</span>
      </div>
    </div>
  );
}

/* ── ActivityScreen ── */
export function StatusCard() {
  const a = activityDetail;

  return (
    <div className="ld-status-solo" {...decorative}>
      <p className="as-status-label">Status Atual</p>
      <div className="as-status-badge">
        <span className="as-status-dot" />
        {a.status}
      </div>
      <div className="as-progress-bar-bg">
        <div className="as-progress-bar-fill" style={{ width: `${a.progress}%` }} />
      </div>
      <div className="as-progress-row">
        <span>Progresso</span>
        <span>{a.progress}%</span>
      </div>
    </div>
  );
}

export function MaterialsGrid() {
  return (
    <div className="as-materials-grid ld-flush" {...decorative}>
      {activityDetail.materials.map((m) => (
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
          <span className="as-material-download">
            <IconDownload />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Settings ── */
export function NotificationToggles() {
  return (
    <div className="ld-toggles" {...decorative}>
      <div className="st-toggle-row">
        <div>
          <p className="st-toggle-label">Notificações por Email</p>
          <p className="st-hint">Receba resumos diários e alertas de prazos no seu email.</p>
        </div>
        <span className="st-toggle on">
          <span className="st-toggle-knob" />
        </span>
      </div>
      <div className="st-toggle-row">
        <div>
          <p className="st-toggle-label">Notificações Push</p>
          <p className="st-hint">Alertas em tempo real no navegador para novas atividades.</p>
        </div>
        <span className="st-toggle">
          <span className="st-toggle-knob" />
        </span>
      </div>
    </div>
  );
}
