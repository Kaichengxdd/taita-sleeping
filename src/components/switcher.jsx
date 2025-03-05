function Switcher({
  shopVisible,
  upgradesVisible,
  achievementsVisible,
  setShopVisible,
  setUpgradesVisible,
  setAchievementsVisible,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-textc absolute top-5/100 left-50/100 transform -translate-x-50/100">
      <button
        className="w-70 h-25 text-2xl bg-buttonc2 hover:bg-buttonh2 transition-colors duration-300 rounded-lg mb-4"
        onClick={() => {
          setShopVisible(!shopVisible);
          setUpgradesVisible(false);
          setAchievementsVisible(false);
        }}
      >
        shop
      </button>
      <button
        className="w-70 h-25 text-2xl bg-buttonc2 hover:bg-buttonh2 transition-colors duration-300 rounded-lg mb-4"
        onClick={() => {
          setUpgradesVisible(!upgradesVisible);
          setShopVisible(false);
          setAchievementsVisible(false);
        }}
      >
        upgrades
      </button>
      <button
        className="w-70 h-25 text-2xl bg-buttonc2 border-5 border-transparent hover:bg-buttonh2 transition-colors duration-300 rounded-lg"
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
