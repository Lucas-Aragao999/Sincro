import { useMemo, useState } from "react";
import AppShell from "./layout/AppShell";
import Topbar from "./layout/Topbar";
import { IconChevronLeft, IconChevronRight, IconClock } from "./layout/icons";
import { agendaEvents, upcomingDeadlines } from "../data/mockData";
import "../assets/Agenda.css";

const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const VIEWS = ["Mês", "Semana", "Dia"];

function buildMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function Agenda() {
  const [cursor, setCursor] = useState(() => new Date());
  const [view, setView] = useState("Mês");

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const today = new Date();

  const cells = useMemo(() => buildMonthGrid(year, month), [year, month]);

  const monthLabel = cursor
    .toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
    .replace(/^\w/, (c) => c.toUpperCase());

  const changeMonth = (delta) => {
    setCursor(new Date(year, month + delta, 1));
  };

  const eventsFor = (day) => agendaEvents.filter((e) => e.date === day);

  return (
    <AppShell>
      <Topbar placeholder="Buscar atividades..." avatarLabel="LA" />

      <div className="lay-content">
        <div className="lay-content-header">
          <div>
            <h1 className="lay-content-title">Agenda</h1>
            <p className="lay-content-subtitle">Acompanhe provas, trabalhos e compromissos.</p>
          </div>
        </div>

        <div className="ag-layout">
          <div className="ag-calendar-card">
            <div className="ag-calendar-head">
              <div className="ag-month-nav">
                <span className="ag-month-label">{monthLabel}</span>
                <button className="ag-nav-btn" onClick={() => changeMonth(-1)}>
                  <IconChevronLeft />
                </button>
                <button className="ag-nav-btn" onClick={() => changeMonth(1)}>
                  <IconChevronRight />
                </button>
              </div>
              <div className="ag-view-toggle">
                {VIEWS.map((v) => (
                  <button
                    key={v}
                    className={`ag-view-btn ${view === v ? "active" : ""}`}
                    onClick={() => setView(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="ag-weekdays">
              {WEEKDAYS.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>

            <div className="ag-grid">
              {cells.map((day, i) => {
                const isToday =
                  day &&
                  today.getDate() === day &&
                  today.getMonth() === month &&
                  today.getFullYear() === year;
                return (
                  <div key={i} className={`ag-cell ${day ? "" : "empty"}`}>
                    {day && (
                      <>
                        <span className={`ag-day-num ${isToday ? "today" : ""}`}>{day}</span>
                        <div className="ag-cell-events">
                          {eventsFor(day).map((ev, idx) => (
                            <span
                              key={idx}
                              className="ag-event-chip"
                              style={{ background: ev.bg, color: ev.color }}
                            >
                              {ev.title}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lista compacta — usada em telas estreitas no lugar da grade do calendário */}
          <div className="ag-mobile-list">
            {cells
              .filter((day) => day && eventsFor(day).length > 0)
              .map((day) => {
                const date = new Date(year, month, day);
                const isToday =
                  today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
                return (
                  <div key={day} className="ag-mobile-day">
                    <p className="ag-mobile-day-label">
                      {isToday ? "Hoje, " : ""}
                      {date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
                    </p>
                    {eventsFor(day).map((ev, idx) => (
                      <div key={idx} className="ag-mobile-event" style={{ borderColor: ev.color }}>
                        <span className="ag-mobile-event-dot" style={{ background: ev.color }} />
                        {ev.title}
                      </div>
                    ))}
                  </div>
                );
              })}
          </div>

          <div className="ag-sidebar-card">
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
        </div>
      </div>
    </AppShell>
  );
}
