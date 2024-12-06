import { useState, useEffect } from "react";
import "./App.css";
import Shop from "./components/shop.jsx";
import Upgrades from "./components/upgrades.jsx";
import Clicker from "./components/clicker.jsx";
import Switcher from "./components/switcher.jsx";
import Achievements from "./components/achievements.jsx";

localStorage.clear();

function App() {
  const [aura, setAura] = useState(20);
  const [auraPerSecond, setAuraPerSecond] = useState(0);
  const [totalAura, setTotalAura] = useState(0);
  const [shopVisible, setShopVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [upgradesVisible, setUpgradesVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);

  const [taita, setTaita] = useState(0);
  const [taitaPrice, setTaitaPrice] = useState(20);
  const [taitaSpeed, setTaitaSpeed] = useState(0.2);
  const [taitaUpgradePrice, setTaitaUpgradePrice] = useState(100);
  const [aadi, setAadi] = useState(0);
  const [aadiPrice, setAadiPrice] = useState(100);
  const [aadiSpeed, setAadiSpeed] = useState(1.2);
  const [aadiUpgradePrice, setAadiUpgradePrice] = useState(500);

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAura((aura) => aura + 0.1 * auraPerSecond);
      setTotalAura((totalAura) => totalAura + 0.1 * auraPerSecond);
    }, 100);

    return () => clearInterval(interval);
  }, [auraPerSecond]);

  return (
    <>
      <Clicker
        aura={aura}
        auraPerSecond={auraPerSecond}
        totalAura={totalAura}
        clickCount={clickCount}
        setAura={setAura}
        setTotalAura={setTotalAura}
        setClickCount={setClickCount}
      />
      <Switcher
        shopVisible={shopVisible}
        upgradesVisible={upgradesVisible}
        achievementsVisible={achievementsVisible}
        setShopVisible={setShopVisible}
        setUpgradesVisible={setUpgradesVisible}
        setAchievementsVisible={setAchievementsVisible}
      />
      {shopVisible && (
        <Shop
          aura={aura}
          auraPerSecond={auraPerSecond}
          taita={taita}
          taitaPrice={taitaPrice}
          taitaSpeed={taitaSpeed}
          aadi={aadi}
          aadiPrice={aadiPrice}
          aadiSpeed={aadiSpeed}
          setAura={setAura}
          setAuraPerSecond={setAuraPerSecond}
          setTaita={setTaita}
          setTaitaPrice={setTaitaPrice}
          setAadi={setAadi}
          setAadiPrice={setAadiPrice}
        />
      )}
      {upgradesVisible && (
        <Upgrades
          aura={aura}
          auraPerSecond={auraPerSecond}
          taita={taita}
          taitaSpeed={taitaSpeed}
          taitaUpgradePrice={taitaUpgradePrice}
          setAura={setAura}
          setAuraPerSecond={setAuraPerSecond}
          setTaitaSpeed={setTaitaSpeed}
          setTaitaUpgradePrice={setTaitaUpgradePrice}
          aadi={aadi}
          aadiSpeed={aadiSpeed}
          aadiUpgradePrice={aadiUpgradePrice}
          setAadiSpeed={setAadiSpeed}
          setAadiUpgradePrice={setAadiUpgradePrice}
        />
      )}
      {achievementsVisible && (
        <Achievements
          aura={aura}
          totalAura={totalAura}
          auraPerSecond={auraPerSecond}
          clickCount={clickCount}
          achievements={achievements}
          taita={taita}
          aadi={aadi}
        />
      )}
    </>
  );
}

export default App;
