import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconMail, IconLock, IconEye, IconEyeOff, IconSync, SincroLogo } from "./layout/icons";
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
      {/* Formulário */}
      <div className="auth-form-side">
        <div className="auth-form-box">
          <div className="auth-form-logo">
            <div className="auth-form-logo-icon">
              <SincroLogo />
            </div>
            <p className="auth-form-logo-name">Sincro</p>
          </div>
          <p className="auth-form-subtitle-top">Bem-vindo de volta ao seu ambiente acadêmico.</p>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label">E-mail Institucional</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">
                <IconMail />
              </span>
              <input
                className={`auth-input has-icon ${errors.email ? "error" : ""}`}
                type="email"
                placeholder="seu.nome@instituicao.edu.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            {errors.email && <p className="auth-error-msg">⚠ {errors.email}</p>}
          </div>

          {/* Senha */}
          <div className="auth-field">
            <label className="auth-label">Senha</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">
                <IconLock />
              </span>
              <input
                className={`auth-input has-icon ${errors.password ? "error" : ""}`}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                className="auth-eye-btn"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <IconEyeOff /> : <IconEye />}
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
            Novo por aqui?{" "}
            <button className="auth-switch-btn" onClick={() => navigate("/register")}>
              Criar conta
            </button>
          </div>
        </div>
      </div>

      {/* Painel direito — decorativo */}
      <div className="auth-panel">
        <div className="auth-panel-photo">
          <div className="auth-panel-card">
            <p className="auth-panel-card-title">
              <IconSync /> Sincronize seu dia
            </p>
            <p className="auth-panel-card-text">
              Acompanhe suas aulas, gerencie prazos e conecte-se com sua turma em um único lugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
