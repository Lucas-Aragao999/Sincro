import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import {
  IconChevronRight,
  IconFileText,
  IconFolder,
  IconCheck,
  IconDoc,
  IconDownload,
  IconCalendar,
  IconClock,
  IconUpload,
} from "./layout/icons";
import { classes, activityDetail } from "../data/mockData";
import "../assets/ActivityScreen.css";

export default function ActivityScreen() {
  const navigate = useNavigate();
  const { classId, activityId } = useParams();
  const [submitted, setSubmitted] = useState(false);

  const cls = classes.find((c) => c.id === classId);
  const found = cls?.activities.find((a) => a.id === activityId);

  // Quando a atividade vem de uma turma real (found), usa os dados completos
  // dela; caso contrário cai no mock genérico (acesso direto à rota).
  const activity = found
    ? {
        course: cls.name,
        title: found.title,
        description: found.description,
        type: found.type,
        weight: found.weight,
        status: found.status === "completed" ? "Concluído" : found.statusText,
        deadline: found.deadline,
        deadlineTime: found.deadlineTime,
        daysRemaining: Math.max(found.daysRemaining, 0),
        progress: found.progress,
        instructions: found.instructions,
        deliverables: found.deliverables,
        materials: found.materials,
        instructor: {
          name: cls.teacher,
          email: `${cls.teacher.split(" ").pop().toLowerCase()}@sincro.edu.br`,
          initials: cls.teacher
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase(),
        },
      }
    : activityDetail;

  const backTarget = cls ? `/turma/${cls.id}` : "/home";

  return (
    <AppShell>
      <Topbar
        left={
          <div className="lay-breadcrumb">
            <button className="lay-breadcrumb-link" onClick={() => navigate(backTarget)}>
              {activity.course}
            </button>
            <span className="lay-breadcrumb-sep">
              <IconChevronRight />
            </span>
            <span className="lay-breadcrumb-current">{activity.title}</span>
          </div>
        }
      />

      <div className="as-content">
        {/* Coluna esquerda */}
        <div className="as-left">
          <div className="as-title-area">
            <div className="as-header-row">
              <span className="as-badge-assignment">
                <span className="as-badge-dot" />
                {activity.type}
              </span>
              <span className="as-weight">Peso: {activity.weight}</span>
            </div>
            <h1 className="as-title">{activity.title}</h1>
            <p className="as-description">{activity.description}</p>
          </div>

          <div className="as-card">
            <p className="as-card-title">
              <span className="as-card-title-icon">
                <IconFileText />
              </span>
              Instruções
            </p>
            <p className="as-instructions-text">{activity.instructions}</p>
            <p className="as-deliverables-title">Principais Entregas:</p>
            <div className="as-deliverables-list">
              {activity.deliverables.map((d) => (
                <div key={d.id} className="as-deliverable-item">
                  <span className="as-deliverable-check">
                    <IconCheck />
                  </span>
                  <span>
                    <strong>{d.title}:</strong> {d.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="as-materials-section">
            <p className="as-card-title">
              <span className="as-card-title-icon">
                <IconFolder />
              </span>
              Materiais de Apoio
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

        {/* Coluna direita */}
        <div className="as-right">
          <div className="as-status-card">
            <p className="as-status-label">Status Atual</p>
            <div className="as-status-badge">
              <span className="as-status-dot" />
              {submitted ? "Enviado" : activity.status}
            </div>

            <p className="as-deadline-label">Prazo</p>
            <div className="as-deadline-date">
              <span className="as-deadline-cal-icon">
                <IconCalendar />
              </span>
              <p className="as-deadline-text">
                <strong>{activity.deadline}</strong>{" "}
                <span className="as-deadline-time">{activity.deadlineTime}</span>
              </p>
            </div>
            <p className="as-days-remaining">
              <IconClock /> Faltam {activity.daysRemaining} dias
            </p>

            <div className="as-progress-bar-bg">
              <div
                className="as-progress-bar-fill"
                style={{ width: `${submitted ? 100 : activity.progress}%` }}
              />
            </div>
            <div className="as-progress-row">
              <span>Progresso</span>
              <span>{submitted ? "100%" : `${activity.progress}%`}</span>
            </div>

            <button
              className="as-submit-btn"
              onClick={() => setSubmitted(true)}
              disabled={submitted}
            >
              <IconUpload />
              {submitted ? "Atividade Enviada" : "Enviar Atividade"}
            </button>
          </div>

          <div className="as-instructor-card">
            <p className="as-instructor-label">PROFESSOR(A)</p>
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
    </AppShell>
  );
}
