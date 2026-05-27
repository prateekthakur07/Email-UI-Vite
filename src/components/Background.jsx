// Fixed atmospheric layers behind the whole page (grid, colour glows, noise).
export default function Background() {
  return (
    <>
      <div className="grid-bg" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="glow glow-3" />
      <div className="noise" />
    </>
  );
}
