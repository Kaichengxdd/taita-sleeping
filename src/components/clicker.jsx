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
      <div className="flex flex-col items-center justify-center text-black absolute left-20/100 top-20/100 transform -translate-x-50/100">
        <div className="flex flex-col items-center justify-center text-s font-normal space-y-2">
          <span>{aura.toFixed(1)} aura</span>
          <span>{auraPerSecond.toFixed(1)} aura per second</span>
          <span>{totalAura.toFixed(1)} total aura</span>
          <span>{clickCount} clicks</span>
        </div>
        <button
          className="p-4 text-2xl mt-8 bg-purple-300 border-5 border-transparent hover:border-purple-700 transition-colors duration-300 rounded-lg"
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
