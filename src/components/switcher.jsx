import "./switcher.css";

function Switcher({
  shopVisible,
  upgradesVisible,
  setShopVisible,
  setUpgradesVisible,
}) {
  return (
    <div className="switch">
      <button
        className="showshop"
        onClick={() => {
          setShopVisible(!shopVisible);
          setUpgradesVisible(false);
        }}
      >
        shop
      </button>
      <button
        className="showupgrades"
        onClick={() => {
          setUpgradesVisible(!upgradesVisible);
          setShopVisible(false);
        }}
      >
        upgrades
      </button>
    </div>
  );
}

export default Switcher;
