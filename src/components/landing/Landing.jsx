import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScreenPreview from "./ScreenPreview";
import Reveal from "./Reveal";
import {
  SincroLogo,
  IconSchool,
  IconCalendar,
  IconTrendUp,
  IconBell,
  IconEdit,
  IconCheck,
  IconSync,
  IconChevronRight,
} from "../layout/icons";
import {
  ClassCard,
  ActivityCard,
  DeadlineCard,
  DeadlineList,
  StatAverage,
  StatCompleted,
  AttendanceBar,
  AchievementsCard,
  AlertCard,
  EngagementChart,
  TeacherClassCard,
  StatusCard,
  MaterialsGrid,
  NotificationToggles,
  EventChips,
} from "./showcase";
import "../../assets/Landing.css";

/* ══════════════ Navegação ══════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`ld-nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="ld-nav-brand" href="#topo">
        <span className="ld-nav-mark">
          <SincroLogo />
        </span>
        <span className="ld-nav-word">Sincro</span>
        <span className="ld-nav-tag">Campus OS</span>
      </a>

      <nav className="ld-nav-links">
        <a href="#produto">Visão geral</a>
        <a href="#alunos">Para alunos</a>
        <a href="#professores">Para professores</a>
        <a href="#recursos">Recursos</a>
      </nav>

      <div className="ld-nav-actions">
        <Link className="ld-nav-login" to="/login">Entrar</Link>
        <Link className="ld-btn ld-btn-primary ld-btn-sm" to="/login">
          Explorar <IconChevronRight />
        </Link>
      </div>
    </header>
  );
}

/* ══════════════ Hero ══════════════ */
function Hero() {
  return (
    <section className="ld-hero" id="topo">
      <div className="ld-aurora" aria-hidden="true">
        <span className="ld-aurora-a" />
        <span className="ld-aurora-b" />
        <span className="ld-aurora-c" />
      </div>
      <div className="ld-veil" aria-hidden="true" />
      <div className="ld-grain" aria-hidden="true" />

      <div className="ld-hero-inner">
        <div className="ld-hero-copy">
          <Reveal immediate as="p" className="ld-eyebrow">
            <span className="ld-live-ring"><span className="ld-eyebrow-dot" /></span>
            O novo ritmo da vida acadêmica
          </Reveal>

          <Reveal immediate as="h1" className="ld-h1" delay={60}>
            Tudo flui melhor quando a escola está <span className="ld-h1-accent">em Sincro.</span>
          </Reveal>

          <Reveal immediate as="p" className="ld-lede" delay={120}>
            Uma experiência acadêmica viva, clara e conectada. Turmas, atividades, prazos e
            desempenho circulam em tempo real entre quem ensina e quem aprende.
          </Reveal>

          <Reveal immediate className="ld-hero-actions" delay={180}>
            <Link className="ld-btn ld-btn-primary" to="/login">
              Entrar no Sincro <IconChevronRight />
            </Link>
            <a className="ld-btn ld-btn-glass" href="#produto">
              <span className="ld-play" aria-hidden="true">▶</span>
              Ver o produto
            </a>
          </Reveal>

          <Reveal immediate className="ld-hero-proof" delay={240}>
            <span className="ld-proof-icon"><IconCheck /></span>
            <p><strong>Uma fonte de verdade.</strong> Menos ruído, mais clareza para toda a comunidade.</p>
          </Reveal>
        </div>

        <Reveal immediate className="ld-hero-stage" delay={120}>
          <div className="ld-stage-inner">
            <div className="ld-stage-status">
              <span className="ld-status-pulse" />
              Atualizações em tempo real
            </div>
            <div className="ld-stage-tilt">
              <div className="ld-frame-glass">
                <div className="ld-frame-shine" aria-hidden="true" />
                <ScreenPreview screen="turmas" width={1440} height={820} scale={0.55} fade />
              </div>
            </div>

            <div className="ld-float ld-float--deadline">
              <DeadlineCard index={0} />
            </div>
            <div className="ld-float ld-float--stat">
              <StatAverage />
            </div>
            <div className="ld-stage-orbit ld-stage-orbit--one" aria-hidden="true" />
            <div className="ld-stage-orbit ld-stage-orbit--two" aria-hidden="true" />
          </div>
        </Reveal>
      </div>

      <div className="ld-container">
        <Reveal immediate className="ld-impact" delay={300}>
          <div className="ld-impact-item"><strong>1 espaço</strong><span>para toda a rotina acadêmica</span></div>
          <span className="ld-impact-divider" />
          <div className="ld-impact-item"><strong>2 experiências</strong><span>aluno e professor conectados</span></div>
          <span className="ld-impact-divider" />
          <div className="ld-impact-item"><strong>Tempo real</strong><span>do conteúdo ao acompanhamento</span></div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════ Problema ══════════════ */
const DORES = [
  {
    icon: IconCalendar,
    title: "Prazos espalhados",
    text: "Atividades chegam pelo WhatsApp, e-mail, quadro da sala ou diferentes plataformas.",
  },
  {
    icon: IconBell,
    title: "Comunicação fragmentada",
    text: "Professores precisam repetir informações e alunos precisam procurar onde cada informação foi publicada.",
  },
  {
    icon: IconTrendUp,
    title: "Pouca visibilidade",
    text: "Notas, frequência, atividades e evolução raramente aparecem de forma clara e centralizada.",
  },
];

function Problema() {
  return (
    <section className="ld-section ld-problema">
      <div className="ld-container">
        <Reveal className="ld-section-head ld-section-head--center">
          <p className="ld-kicker">O problema</p>
          <h2 className="ld-h2 ld-h2--center">A rotina acadêmica está espalhada demais.</h2>
          <p className="ld-lede ld-lede--center">
            Quando cada informação vive em um lugar, todo mundo perde tempo tentando reconstruir o contexto.
          </p>
        </Reveal>

        <div className="ld-dores">
          {DORES.map((d, i) => (
            <Reveal className="ld-dor" key={d.title} delay={i * 90}>
              <div className="ld-dor-top">
                <span className="ld-dor-icon"><d.icon /></span>
                <span className="ld-dor-num">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="ld-dor-title">{d.title}</h3>
              <p className="ld-dor-text">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════ Sincronização ══════════════ */
function Sincronizacao() {
  return (
    <section className="ld-section ld-sync" id="produto">
      <div className="ld-sync-glow ld-sync-glow--a" aria-hidden="true" />
      <div className="ld-sync-glow ld-sync-glow--b" aria-hidden="true" />
      <div className="ld-container">
        <Reveal className="ld-section-head ld-section-head--center">
          <p className="ld-kicker ld-kicker--dark"><IconSync /> Sincronização real</p>
          <h2 className="ld-h2 ld-h2--center ld-on-dark">
            Professor e aluno. Finalmente no mesmo ritmo.
          </h2>
          <p className="ld-lede ld-lede--center ld-on-dark-soft">
            O professor publica. O Sincro organiza. O aluno recebe — já na turma, na agenda e nos próximos prazos.
          </p>
        </Reveal>

        <div className="ld-flow">
          <Reveal className="ld-flow-side">
            <p className="ld-flow-label">Professor publica</p>
            <TeacherClassCard index={0} />
          </Reveal>

          <div className="ld-flow-wire" aria-hidden="true">
            <span className="ld-wire-pulse" />
          </div>

          <Reveal className="ld-flow-core" delay={100}>
            <div className="ld-sync-core">
              <SincroLogo />
            </div>
            <p className="ld-flow-label ld-flow-label--core">Sincro organiza</p>
          </Reveal>

          <div className="ld-flow-wire" aria-hidden="true">
            <span className="ld-wire-pulse ld-wire-pulse--delayed" />
          </div>

          <Reveal className="ld-flow-side" delay={200}>
            <p className="ld-flow-label">Aluno recebe</p>
            <DeadlineCard index={1} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════ Produto em ação ══════════════ */
function Aluno() {
  return (
    <section className="ld-section ld-act" id="alunos">
      <div className="ld-container ld-act-grid">
        <Reveal className="ld-act-copy">
          <p className="ld-kicker">Experiência do aluno</p>
          <h2 className="ld-h2">
            Tudo que você precisa entregar. Antes que vire “era pra hoje?”.
          </h2>
          <p className="ld-lede">
            O Sincro reúne atividades e prazos de todas as disciplinas em uma agenda única,
            mostrando exatamente o que precisa ser feito e quando.
          </p>

          <ul className="ld-bullets">
            <li>
              <IconCalendar /> Agenda única cruzando todas as disciplinas
            </li>
            <li>
              <IconSchool /> Atividades com instruções, materiais e status
            </li>
            <li>
              <IconTrendUp /> Nota, frequência e evolução sempre visíveis
            </li>
          </ul>
        </Reveal>

        <Reveal className="ld-act-visual" delay={100}>
          <div className="ld-stage-inner">
            <div className="ld-frame-glass">
              <ScreenPreview screen="agenda" width={1440} height={840} scale={0.55} fade />
            </div>
            <div className="ld-float ld-float--corner">
              <StatCompleted />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="ld-container ld-act-strip">
        <Reveal className="ld-strip-item">
          <DeadlineList />
        </Reveal>
        <Reveal className="ld-strip-item" delay={80}>
          <AttendanceBar />
        </Reveal>
        <Reveal className="ld-strip-item" delay={160}>
          <AchievementsCard />
        </Reveal>
      </div>
    </section>
  );
}

function Professor() {
  return (
    <section className="ld-section ld-act ld-act--alt" id="professores">
      <div className="ld-container ld-act-grid ld-act-grid--reverse">
        <Reveal className="ld-act-visual" delay={100}>
          <div className="ld-stage-inner">
            <div className="ld-frame-glass">
              <ScreenPreview screen="professor" width={1440} height={800} scale={0.55} fade />
            </div>
            <div className="ld-float ld-float--corner ld-float--alert">
              <AlertCard />
            </div>
          </div>
        </Reveal>

        <Reveal className="ld-act-copy">
          <p className="ld-kicker">Experiência do professor</p>
          <h2 className="ld-h2">Menos tempo organizando. Mais tempo ensinando.</h2>
          <p className="ld-lede">
            Turmas ativas, engajamento por semana e trabalhos parados na fila de correção — o que
            precisa da sua atenção aparece antes de virar atraso.
          </p>

          <ul className="ld-bullets">
            <li>
              <IconBell /> Alerta de correções pendentes
            </li>
            <li>
              <IconTrendUp /> Engajamento de cada turma ao longo das semanas
            </li>
            <li>
              <IconEdit /> Lançar uma atividade leva segundos
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════ Funcionalidades (bento) ══════════════ */
function Recursos() {
  return (
    <section className="ld-section" id="recursos">
      <div className="ld-container">
        <Reveal className="ld-section-head ld-section-head--center">
          <p className="ld-kicker">Ecossistema Sincro</p>
          <h2 className="ld-h2 ld-h2--center">Cada detalhe trabalha em conjunto.</h2>
          <p className="ld-lede ld-lede--center">
            Uma experiência coesa, construída com a interface real do produto — não com ilustrações genéricas.
          </p>
        </Reveal>

        <div className="ld-bento">
          <Reveal className="ld-tile ld-tile--wide ld-tile--glass ld-tile--hero">
            <div className="ld-tile-head">
              <h3>Turmas</h3>
              <p>Tudo de cada disciplina em um único espaço.</p>
            </div>
            <div className="ld-tile-ui ld-tile-ui--row">
              <ClassCard index={0} />
              <ClassCard index={1} />
            </div>
          </Reveal>

          <Reveal className="ld-tile ld-tile--violet" delay={80}>
            <div className="ld-tile-head">
              <h3>Agenda inteligente</h3>
              <p>Todos os prazos reunidos em um calendário único.</p>
            </div>
            <div className="ld-tile-ui">
              <EventChips />
              <DeadlineCard index={2} />
            </div>
          </Reveal>

          <Reveal className="ld-tile ld-tile--ice" delay={160}>
            <div className="ld-tile-head">
              <h3>Atividades</h3>
              <p>Instruções, materiais, prazo e status organizados.</p>
            </div>
            <div className="ld-tile-ui">
              <StatusCard />
              <MaterialsGrid />
            </div>
          </Reveal>

          <Reveal className="ld-tile ld-tile--wide ld-tile--glass" delay={160}>
            <div className="ld-tile-head">
              <h3>Painel do professor</h3>
              <p>Turmas, engajamento e correções pendentes.</p>
            </div>
            <div className="ld-tile-ui ld-tile-ui--row">
              <EngagementChart />
              <div className="ld-tile-ui-col">
                <ActivityCard classIndex={0} activityIndex={1} />
              </div>
            </div>
          </Reveal>

          <Reveal className="ld-tile" delay={80}>
            <div className="ld-tile-head">
              <h3>Desempenho</h3>
              <p>Notas, frequência e evolução sempre visíveis.</p>
            </div>
            <div className="ld-tile-ui">
              <AttendanceBar />
            </div>
          </Reveal>

          <Reveal className="ld-tile" delay={160}>
            <div className="ld-tile-head">
              <h3>Notificações</h3>
              <p>Alertas importantes sem transformar tudo em spam.</p>
            </div>
            <div className="ld-tile-ui">
              <NotificationToggles />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════ Como funciona ══════════════ */
const PASSOS = [
  { n: "01", title: "Professor publica", text: "Cria uma atividade em poucos segundos." },
  {
    n: "02",
    title: "Sincro organiza",
    text: "A atividade entra automaticamente na turma e agenda dos alunos.",
  },
  {
    n: "03",
    title: "Todos acompanham",
    text: "Professor e aluno acompanham prazo, entrega e progresso.",
  },
];

function ComoFunciona() {
  return (
    <section className="ld-section ld-steps-section" id="como-funciona">
      <div className="ld-container">
        <Reveal className="ld-section-head ld-section-head--center">
          <p className="ld-kicker">Três movimentos</p>
          <h2 className="ld-h2 ld-h2--center">Do professor para o aluno. Sem atrito.</h2>
        </Reveal>

        <div className="ld-steps">
          <span className="ld-steps-line" aria-hidden="true" />
          {PASSOS.map((p, i) => (
            <Reveal className="ld-step" key={p.n} delay={i * 120}>
              <span className="ld-step-num">{p.n}</span>
              <h3 className="ld-step-title">{p.title}</h3>
              <p className="ld-step-text">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════ Diferencial ══════════════ */
const DIFERENCIAIS = [
  { title: "Simples de usar", text: "Sem telas burocráticas ou fluxos desnecessários." },
  {
    title: "Informação em tempo real",
    text: "O que o professor publica chega organizado para o aluno.",
  },
  {
    title: "Dados que ajudam",
    text: "Desempenho, engajamento e pendências deixam de ficar invisíveis.",
  },
];

function Diferencial() {
  return (
    <section className="ld-section ld-dif">
      <div className="ld-container">
        <Reveal className="ld-dif-head">
          <p className="ld-kicker">Feito para o cotidiano</p>
          <h2 className="ld-h2">Não é mais um portal acadêmico.</h2>
          <p className="ld-lede">
            O Sincro foi pensado para ser utilizado todos os dias — não apenas quando alguém
            precisa consultar uma nota.
          </p>
        </Reveal>

        <div className="ld-dif-grid">
          {DIFERENCIAIS.map((d, i) => (
            <Reveal className="ld-dif-item" key={d.title} delay={i * 90}>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════ CTA final ══════════════ */
function CtaFinal() {
  return (
    <section className="ld-section ld-cta">
      <div className="ld-container">
        <Reveal className="ld-cta-panel">
          <div className="ld-cta-orb ld-cta-orb--a" aria-hidden="true" />
          <div className="ld-cta-orb ld-cta-orb--b" aria-hidden="true" />
          <p className="ld-kicker ld-kicker--dark">Pronto para começar?</p>
          <h2 className="ld-h2 ld-h2--center ld-on-dark">Coloque sua instituição em Sincro.</h2>
          <p className="ld-lede ld-lede--center ld-on-dark-soft">
            Transforme a rotina de alunos e professores em uma experiência mais simples,
            organizada e conectada.
          </p>
          <div className="ld-cta-actions">
            <Link className="ld-btn ld-btn-light" to="/login">
              Explorar agora <IconChevronRight />
            </Link>
            <a
              className="ld-btn ld-btn-glass ld-btn-glass--dark"
              href="mailto:contato@sincro.app?subject=Quero%20conhecer%20o%20Sincro"
            >
              Solicitar demonstração <IconChevronRight />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════ Footer ══════════════ */
function Footer() {
  return (
    <footer className="ld-footer">
      <div className="ld-container ld-footer-inner">
        <a className="ld-nav-brand" href="#topo">
          <span className="ld-nav-mark">
            <SincroLogo />
          </span>
          <span className="ld-nav-word">Sincro</span>
        </a>

        <nav className="ld-footer-links">
          <a href="#produto">Produto</a>
          <a href="#recursos">Recursos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="mailto:contato@sincro.app">Contato</a>
        </nav>

        <p className="ld-footer-legal">© 2026 Sincro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* ══════════════ Página ══════════════ */
export default function Landing() {
  return (
    <div className="ld-page">
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Sincronizacao />
        <Aluno />
        <Professor />
        <Recursos />
        <ComoFunciona />
        <Diferencial />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
