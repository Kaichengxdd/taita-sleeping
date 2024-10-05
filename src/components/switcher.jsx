import "./switcher.css";

function Switcher({
  shopVisible,
  upgradesVisible,
  achievementsVisible,
  setShopVisible,
  setUpgradesVisible,
  setAchievementsVisible,
}) {
  return (
    <div className="switch">
      <button
        className="showshop"
        onClick={() => {
          setShopVisible(!shopVisible);
          setUpgradesVisible(false);
          setAchievementsVisible(false);
        }}
      >
        shop
      </button>
      <button
        className="showupgrades"
        onClick={() => {
          setUpgradesVisible(!upgradesVisible);
          setShopVisible(false);
          setAchievementsVisible(false);
        }}
      >
        upgrades
      </button>
      <button
        className="showachievements"
        onClick={() => {
          setAchievementsVisible(!achievementsVisible);
          setShopVisible(false);
          setUpgradesVisible(false);
        }}
      >
        achievements
      </button>
    </div>
  );
}

export default Switcher;
