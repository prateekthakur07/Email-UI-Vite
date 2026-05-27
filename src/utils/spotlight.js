// Cursor-following spotlight used by `.feat` cards (see `.feat::before` in
// index.css, which reads the --mx/--my custom properties set here).
export function handleSpotlight(event) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  el.style.setProperty('--my', `${event.clientY - rect.top}px`);
}
