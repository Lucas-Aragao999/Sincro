import { useNavigate } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconTriangleAlert, IconUser } from "./layout/icons";
import { currentTeacher, teacherClasses, engagementWeeks } from "../data/mockData";
import "../assets/TeacherDashboard.css";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const maxValue = Math.max(...engagementWeeks.map((w) => w.value));

  return (
    <AppShell>
      <Topbar placeholder="Buscar turmas, alunos..." avatarLabel="PS" />

      <div className="lay-content">
        <div className="lay-content-header">
          <div>
            <h1 className="lay-content-title">Olá, {currentTeacher.name}</h1>
            <p className="lay-content-subtitle">Aqui está o resumo das suas turmas hoje.</p>
          </div>
          <div className="td-header-actions">
            <button className="td-btn-outline">Criar Nova Turma</button>
            <button className="td-btn-primary" onClick={() => navigate("/create-activity")}>
              Lançar Atividade
            </button>
          </div>
        </div>

        <div className="td-top-row">
          <div className="td-alert-card">
            <p className="td-alert-label">
              <IconTriangleAlert /> ATENÇÃO NECESSÁRIA
            </p>
            <p className="td-alert-value">15</p>
            <p className="td-alert-text">Trabalhos pendentes de correção</p>
            <button className="td-alert-btn">Revisar Agora</button>
          </div>

          <div className="td-engagement-card">
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
        </div>

        <p className="td-section-title">Minhas Turmas Ativas</p>
        <div className="td-classes-grid">
          {teacherClasses.map((c) => (
            <div key={c.id} className="td-class-card">
              <div className="td-class-top">
                <span className="td-class-icon">{c.icon}</span>
                <span
                  className="td-class-status"
                  style={{ background: c.statusBg, color: c.statusColor }}
                >
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
          ))}
        </div>
      </div>
    </AppShell>
  );
}
