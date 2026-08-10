import Sidebar from "./Sidebar";
import "../../assets/Layout.css";

// Casca comum a todas as telas internas: sidebar fixa + área principal rolável.
export default function AppShell({ children }) {
  return (
    <div className="lay-app">
      <Sidebar />
      <main className="lay-main">{children}</main>
    </div>
  );
}
