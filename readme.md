# HomeScreen

Tela principal do **Sincro — Academic Management**. Exibe as turmas do usuário, permite busca, filtragem, ordenação e entrada em novas turmas via código.

---

## Arquivos

```
src/
├── components/
│   └── HomeScreen.jsx
└── assets/
    └── HomeScreen.css
```

---

## Estrutura da tela

```
┌─────────────────────────────────────────────────┐
│  Sidebar         │  Topbar (busca + ícones)      │
│  - Logo Sincro   ├───────────────────────────────│
│  - New Activity  │  My Classes                   │
│  - Classes ◄     │  [Filter] [Sort]              │
│  - Schedule      │                               │
│  - Profile       │  ┌──────┐ ┌──────┐ ┌──────┐  │
│                  │  │ Card │ │ Card │ │ Join │  │
│  - Help Center   │  └──────┘ └──────┘ └──────┘  │
│  - Logout        │                               │
└─────────────────────────────────────────────────┘
```

---

## Componentes internos

### `HomeScreen`
Componente principal. Gerencia todo o estado da tela.

**Estado:**
| Estado | Tipo | Descrição |
|---|---|---|
| `activePage` | `string` | Página ativa na sidebar (`Classes`, `Schedule`, `Profile`) |
| `classes` | `array` | Lista de turmas do usuário |
| `search` | `string` | Texto da busca |
| `selectedClass` | `object \| null` | Turma selecionada para o modal |
| `filterPending` | `boolean` | Exibe apenas turmas com atividades pendentes |
| `sortAlpha` | `boolean` | Ordena turmas em ordem alfabética |

---

### `ClassCard`
Card clicável que representa uma turma.

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `cls` | `object` | Dados da turma (`id`, `name`, `teacher`, `pending`, `students`, `icon`, `color`) |
| `onClick` | `function` | Callback ao clicar no card |

**Comportamento:**
- Badge vermelho `X Pending` quando há atividades pendentes
- Badge verde `All caught up` quando não há pendências
- Hover com elevação via CSS

---

### `JoinCard`
Card para entrar em uma nova turma via código.

**Comportamento:**
- Campo de texto para digitar o código
- Ao clicar em **Enroll**, adiciona a turma na lista com os dados básicos
- Ignora submissão com código vazio

---

### `Modal`
Modal de detalhes da turma, aberto ao clicar em um `ClassCard`.

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `cls` | `object \| null` | Turma a exibir; `null` fecha o modal |
| `onClose` | `function` | Callback para fechar |

**Comportamento:**
- Clique no overlay fecha o modal
- Exibe contagem de alunos e pendências

---

## Dados de uma turma

```js
{
  id: 1,                        // número único
  name: "Advanced Mathematics", // nome da turma
  teacher: "Dr. Alan Turing",   // nome do professor
  pending: 3,                   // atividades pendentes (0 = sem pendências)
  students: 27,                 // total de alunos
  icon: "📐",                   // emoji do ícone
  color: "#e8e4fc",             // cor de fundo do ícone
}
```

---

## CSS

Todas as classes seguem o prefixo `hs-` para evitar conflitos com outros componentes.

Exemplos:
- `.hs-app` — container raiz
- `.hs-sidebar` — barra lateral
- `.hs-class-card` — card de turma
- `.hs-class-card:hover` — elevação ao passar o mouse
- `.hs-badge-pending` — badge de pendências (vermelho)
- `.hs-badge-done` — badge sem pendências (verde)

---

## Uso

```jsx
import HomeScreen from './components/HomeScreen';

export default function App() {
  return <HomeScreen />;
}
```

> O componente ocupa `100vh`. Certifique-se de que o `index.css` zera margens e define `height: 100%` no `html`, `body` e `#root`.

```css
/* src/assets/index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}
```