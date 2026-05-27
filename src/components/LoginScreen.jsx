import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/AuthScreen.css";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = "Email obrigatório";
    else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Email inválido";
    if (!password) errs.password = "Senha obrigatória";
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="auth-page">
      {/* Painel esquerdo */}
      <div className="auth-panel">
        <div className="auth-panel-logo">
          <div className="auth-panel-logo-icon">S</div>
          <div>
            <p className="auth-panel-logo-name">Sincro</p>
            <p className="auth-panel-logo-sub">Academic Management</p>
          </div>
        </div>
        <div className="auth-panel-illustration">🎓</div>
        <p className="auth-panel-title">Bem-vindo de volta!</p>
        <p className="auth-panel-subtitle">
          Acesse sua conta para gerenciar suas turmas, atividades e muito mais.
        </p>
      </div>

      {/* Formulário */}
      <div className="auth-form-side">
        <div className="auth-form-box">
          <h1 className="auth-form-title">Entrar</h1>
          <p className="auth-form-subtitle">Preencha seus dados para acessar a plataforma.</p>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label">
              Email <span>*</span>
            </label>
            <input
              className={`auth-input ${errors.email ? "error" : ""}`}
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {errors.email && <p className="auth-error-msg">⚠ {errors.email}</p>}
          </div>

          {/* Senha */}
          <div className="auth-field">
            <label className="auth-label">
              Senha <span>*</span>
            </label>
            <div className="auth-input-wrap">
              <input
                className={`auth-input ${errors.password ? "error" : ""}`}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="auth-eye-btn"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && <p className="auth-error-msg">⚠ {errors.password}</p>}
          </div>

          {/* Esqueci senha */}
          <div className="auth-forgot">
            <button className="auth-forgot-btn">Esqueci minha senha</button>
          </div>

          <button
            className="auth-submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <div className="auth-switch">
            Não tem uma conta?{" "}
            <button className="auth-switch-btn" onClick={() => navigate("/register")}>
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
