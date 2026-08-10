import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconSchool, IconChevronLeft } from "./layout/icons";
import { classes } from "../data/mockData";
import "../assets/ClassDetail.css";

const TABS = [
  { key: "pending", label: "Pendentes" },
  { key: "completed", label: "Concluídas" },
  { key: "overdue", label: "Atrasadas" },
];

export default function ClassDetail() {
  const navigate = useNavigate();
  const { classId } = useParams();
  const [tab, setTab] = useState("pending");

  const cls = classes.find((c) => c.id === classId) ?? classes[0];
  const filtered = cls.activities.filter((a) => a.status === tab);

  return (
    <AppShell>
      <Topbar placeholder="Buscar nesta turma..." />

      <div className="lay-content">
        <button className="cd-back" onClick={() => navigate("/home")}>
          <IconChevronLeft /> Minhas Turmas
        </button>

        <div className="cd-header">
          <div className="cd-header-card">
            <p className="cd-header-label">
              <IconSchool /> DETALHES DA TURMA
            </p>
            <h1 className="cd-title">{cls.name}</h1>
            <p className="cd-teacher">👤 {cls.teacher}</p>
          </div>

          <div className="cd-progress-card">
            <div className="cd-progress-top">
              <span>Progresso da Turma</span>
              <span className="cd-progress-value">{cls.progress}%</span>
            </div>
            <div className="cd-progress-bar-bg">
              <div className="cd-progress-bar-fill" style={{ width: `${cls.progress}%` }} />
            </div>
            <p className="cd-progress-note">Baseado nas atividades concluídas</p>
          </div>
        </div>

        <div className="cd-tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`cd-tab ${tab === t.key ? "active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="cd-activities-grid">
          {filtered.length === 0 && (
            <p className="cd-empty">Nenhuma atividade {TABS.find((t) => t.key === tab).label.toLowerCase()}.</p>
          )}
          {filtered.map((a) => (
            <div key={a.id} className="cd-activity-card">
              <div className="cd-activity-top">
                <span className={`cd-tag cd-tag-${a.status}`}>{a.statusLabel}</span>
                {a.status === "completed" && <span className="cd-score">{a.score}/10</span>}
              </div>
              <p className="cd-activity-title">{a.title}</p>
              <p className="cd-activity-desc">{a.description}</p>
              <button
                className={`cd-activity-btn cd-activity-btn-${a.status}`}
                onClick={() => navigate(`/atividade/${cls.id}/${a.id}`)}
              >
                {a.status === "pending" && "Marcar como feito"}
                {a.status === "completed" && "Ver Feedback"}
                {a.status === "overdue" && "Enviar com atraso"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
