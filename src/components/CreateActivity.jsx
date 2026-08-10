import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconSave, IconAlertCircle } from "./layout/icons";
import "../assets/CreateActivity.css";

export default function CreateActivity() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState(false);

  const handleSave = () => {
    if (!title.trim()) {
      setTitleError(true);
      return;
    }
    alert(`Atividade "${title}" salva com sucesso!`);
    navigate("/home");
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) setTitleError(false);
  };

  return (
    <AppShell>
      <Topbar placeholder="Buscar..." />

      <div className="ca-content">
        <div className="ca-card">
          <div className="ca-card-header">
            <h1 className="ca-card-title">Criar Nova Atividade</h1>
            <p className="ca-card-subtitle">
              Preencha os detalhes abaixo para atribuir uma nova tarefa à sua turma.
            </p>
          </div>

          <div className="ca-card-body">
            <div className="ca-field">
              <label className="ca-label">
                Título <span className="ca-req">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className={`ca-input ${titleError ? "error" : ""}`}
                placeholder="Ex.: Trabalho de Geometria"
              />
              {titleError && (
                <div className="ca-error-msg">
                  <IconAlertCircle /> Campo obrigatório
                </div>
              )}
            </div>

            <div className="ca-field">
              <label className="ca-label">Descrição</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Forneça instruções detalhadas para a atividade..."
                className="ca-textarea"
              />
            </div>

            <div className="ca-field">
              <label className="ca-label">Data de Entrega</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="ca-input"
              />
            </div>
          </div>

          <div className="ca-card-footer">
            <button className="ca-btn-cancel" onClick={() => navigate(-1)}>
              Cancelar
            </button>
            <button className="ca-btn-save" onClick={handleSave}>
              <IconSave /> Salvar
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
