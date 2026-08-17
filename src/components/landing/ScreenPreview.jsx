import { Routes, Route } from "react-router-dom";
import HomeScreen from "../Homescreen";
import Agenda from "../Agenda";
import Profile from "../Profile";
import TeacherDashboard from "../TeacherDashboard";
import ClassDetail from "../ClassDetail";
import ActivityScreen from "../ActivityScreen";

/*
 * Renderiza uma TELA REAL do Sincro dentro de uma moldura de apresentação.
 *
 * Três detalhes não óbvios:
 * 1. `<Routes location>` sobrescreve a rota só para esta subárvore. É o que faz
 *    useLocation/useParams responderem certo — sem isso a Sidebar não acende o
 *    item ativo e o ClassDetail/ActivityScreen caem no fallback. Não dá para usar
 *    <MemoryRouter> aqui: react-router lança invariant ao aninhar Routers.
 * 2. A tela é medida em px reais (--ld-w/--ld-h) e reduzida por transform: scale.
 *    Como scale não afeta layout, a moldura é pré-dimensionada via calc() no CSS.
 * 3. `inert` + aria-hidden tiram a tela do foco e da árvore de acessibilidade —
 *    pointer-events sozinho não impediria navegar por Tab para dentro do mock.
 */
const SCREENS = {
  turmas: { path: "/home", location: "/home", element: <HomeScreen /> },
  agenda: { path: "/agenda", location: "/agenda", element: <Agenda /> },
  perfil: { path: "/perfil", location: "/perfil", element: <Profile /> },
  professor: {
    path: "/painel-professor",
    location: "/painel-professor",
    element: <TeacherDashboard />,
  },
  turma: {
    path: "/turma/:classId",
    location: "/turma/matematica-avancada",
    element: <ClassDetail />,
  },
  atividade: {
    path: "/atividade/:classId/:activityId",
    location: "/atividade/matematica-avancada/trabalho-geometria",
    element: <ActivityScreen />,
  },
};

export default function ScreenPreview({
  screen,
  width = 1280,
  height = 800,
  scale = 0.62,
  offsetX = 0,
  offsetY = 0,
  fade = false,
  className = "",
}) {
  const config = SCREENS[screen];
  if (!config) return null;

  return (
    <div
      className={`ld-frame ${fade ? "ld-frame--fade" : ""} ${className}`.trim()}
      style={{
        "--ld-w": `${width}px`,
        "--ld-h": `${height}px`,
        // base, não o valor final: o CSS reduz por breakpoint a partir dela
        "--ld-scale-base": scale,
      }}
      aria-hidden="true"
      inert
    >
      <div className="ld-frame-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="ld-frame-viewport">
        <div
          className="ld-scale"
          style={{ "--ld-x": `${offsetX}px`, "--ld-y": `${offsetY}px` }}
        >
          <div className="ld-screen">
            <Routes location={config.location}>
              <Route path={config.path} element={config.element} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
