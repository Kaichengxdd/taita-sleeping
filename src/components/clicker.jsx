import "./clicker.css";

function Clicker({
  aura,
  totalAura,
  auraPerSecond,
  clickCount,
  setAura,
  setTotalAura,
  setClickCount,
}) {
  return (
    <>
      <div className="aura">
        <h1>{aura.toFixed(1)} aura</h1>
        <p>{auraPerSecond.toFixed(1)} aura per second</p>
        <p>{totalAura.toFixed(1)} total aura</p>
        <p>{clickCount} clicks</p>
        <button
          className="button-click"
          onClick={() => {
            setAura(aura + 1);
            setTotalAura(totalAura + 1);
            setClickCount(clickCount + 1);
          }}
        >
          increase your aura
        </button>
      </div>
    </>
  );
}

export default Clicker;
