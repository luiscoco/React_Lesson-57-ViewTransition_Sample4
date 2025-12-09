# View Transition Props Demo

Small React + Vite app using the built-in React canary `ViewTransition` component and its props (`enter`, `exit`, `update`, `default`, `name`, and callbacks) to drive animations and lifecycle hooks.

## Features
- Toggle visibility to see enter/exit transitions and their callbacks.
- Update the card content to trigger an update transition.
- `startTransition` wraps state changes so the view transition stays in sync.
- View transition name is set via the `name` prop for browser tooling/experimentation.
- Minimal CSS for each animation state (`vt-enter`, `vt-exit`, `vt-update`).

## Key Usage
`src/ViewTransitionPropsDemo.jsx` wires the component and callbacks:

```jsx
import { ViewTransition, startTransition, useState } from 'react'

const [visible, setVisible] = useState(false)
const [version, setVersion] = useState(1)

function toggleVisible() {
  startTransition(() => setVisible(prev => !prev))
}

function updateContent() {
  startTransition(() => setVersion(prev => prev + 1))
}

{visible && (
  <ViewTransition
    name="props-demo-box"
    default="vt-fade"
    enter="vt-enter"
    exit="vt-exit"
    update="vt-update"
    onEnter={handleEnter}
    onExit={handleExit}
    onUpdate={handleUpdate}
  >
    <div className="props-box">
      <h3>Props Box</h3>
      <p>Version: {version}</p>
    </div>
  </ViewTransition>
)}
```

Animations live in `src/styles.css`:

```css
.vt-enter { animation: vt-enter 250ms ease forwards; }
.vt-exit  { animation: vt-exit 200ms ease forwards; }
.vt-update { animation: vt-update 220ms ease; }
```

## Run the app
1. Install deps (React canary versions are already specified): `npm install`
2. Start dev server: `npm run dev` (Vite prints the local URL)
3. Build for production: `npm run build`
4. Preview the build locally: `npm run preview`

Open the URL, click **Show box**, then try **Update content** to watch the different transition phases and their console logs.
