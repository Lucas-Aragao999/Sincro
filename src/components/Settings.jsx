import { useState } from "react";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconUser, IconBell, IconSettings, IconLock } from "./layout/icons";
import "../assets/Settings.css";

const TABS = [
  { key: "conta", label: "Conta", icon: <IconUser /> },
  { key: "notificacoes", label: "Notificações", icon: <IconBell /> },
  { key: "preferencias", label: "Preferências", icon: <IconSettings /> },
  { key: "privacidade", label: "Privacidade", icon: <IconLock /> },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      className={`st-toggle ${checked ? "on" : ""}`}
      onClick={() => onChange(!checked)}
      type="button"
    >
      <span className="st-toggle-knob" />
    </button>
  );
}

export default function Settings() {
  const [tab, setTab] = useState("conta");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [profileVisible, setProfileVisible] = useState(true);
  const [shareProgress, setShareProgress] = useState(true);
  const [language, setLanguage] = useState("pt-BR");
  const [theme, setTheme] = useState("claro");

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword || newPassword !== confirmPassword) return;
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    alert("Senha atualizada com sucesso!");
  };

  return (
    <AppShell>
      <Topbar placeholder="Buscar..." />

      <div className="lay-content">
        <h1 className="lay-content-title">Configurações</h1>
        <p className="lay-content-subtitle" style={{ marginBottom: 24 }}>
          Gerencie suas preferências de conta e sistema.
        </p>

        <div className="st-layout">
          <div className="st-tabs">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`st-tab ${tab === t.key ? "active" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          <div className="st-panel">
            {tab === "conta" && (
              <div className="st-card">
                <p className="st-card-title">
                  <IconUser /> Conta
                </p>
                <div className="st-field">
                  <label className="st-label">Email</label>
                  <input className="st-input" value="usuario@sincro.edu.br" readOnly />
                  <p className="st-hint">O email está vinculado à sua instituição.</p>
                </div>
                <div className="st-field">
                  <label className="st-label">Senha Atual</label>
                  <input
                    className="st-input"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div className="st-field-row">
                  <div className="st-field">
                    <label className="st-label">Nova Senha</label>
                    <input
                      className="st-input"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="st-field">
                    <label className="st-label">Confirmar Nova Senha</label>
                    <input
                      className="st-input"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button className="st-btn-primary" onClick={handleUpdatePassword}>
                  Atualizar Senha
                </button>
              </div>
            )}

            {tab === "notificacoes" && (
              <div className="st-card">
                <p className="st-card-title">
                  <IconBell /> Notificações
                </p>
                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-label">Notificações por Email</p>
                    <p className="st-hint">Receba resumos diários e alertas de prazos no seu email.</p>
                  </div>
                  <Toggle checked={emailNotifications} onChange={setEmailNotifications} />
                </div>
                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-label">Notificações Push</p>
                    <p className="st-hint">Alertas em tempo real no navegador para novas atividades.</p>
                  </div>
                  <Toggle checked={pushNotifications} onChange={setPushNotifications} />
                </div>
              </div>
            )}

            {tab === "preferencias" && (
              <div className="st-card">
                <p className="st-card-title">
                  <IconSettings /> Preferências de Sistema
                </p>
                <div className="st-field">
                  <label className="st-label">Idioma</label>
                  <select className="st-input" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="pt-BR">Português (Brasil)</option>
                    <option value="en-US">English (US)</option>
                    <option value="es-ES">Español</option>
                  </select>
                </div>
                <div className="st-field">
                  <label className="st-label">Tema</label>
                  <select className="st-input" value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value="claro">Claro</option>
                    <option value="escuro">Escuro</option>
                    <option value="sistema">Automático (sistema)</option>
                  </select>
                </div>
              </div>
            )}

            {tab === "privacidade" && (
              <div className="st-card">
                <p className="st-card-title">
                  <IconLock /> Privacidade
                </p>
                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-label">Perfil visível para colegas de turma</p>
                    <p className="st-hint">Outros alunos podem ver seu nome e turmas em comum.</p>
                  </div>
                  <Toggle checked={profileVisible} onChange={setProfileVisible} />
                </div>
                <div className="st-toggle-row">
                  <div>
                    <p className="st-toggle-label">Compartilhar progresso com professores</p>
                    <p className="st-hint">Professores podem ver suas estatísticas de desempenho.</p>
                  </div>
                  <Toggle checked={shareProgress} onChange={setShareProgress} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
