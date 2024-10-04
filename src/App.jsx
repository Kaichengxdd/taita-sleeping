import { useState, useEffect } from "react";
import "./App.css";
import Shop from "./components/shop.jsx";
import Upgrades from "./components/upgrades.jsx";
import Clicker from "./components/clicker.jsx";
import Switcher from "./components/switcher.jsx";

function App() {
  const [aura, setAura] = useState(0);
  const [auraPerSecond, setAuraPerSecond] = useState(0);
  const [totalAura, setTotalAura] = useState(0);
  const [shopVisible, setShopVisible] = useState(false);
  const [upgradesVisible, setUpgradesVisible] = useState(false);

  const [taita, setTaita] = useState(0);
  const [taitaPrice, setTaitaPrice] = useState(20);
  const [taitaSpeed, setTaitaSpeed] = useState(0.2);
  const [taitaUpgradePrice, setTaitaUpgradePrice] = useState(100);

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
        setAura={setAura}
        setTotalAura={setTotalAura}
      />
      <Switcher
        shopVisible={shopVisible}
        upgradesVisible={upgradesVisible}
        setShopVisible={setShopVisible}
        setUpgradesVisible={setUpgradesVisible}
      />
      {shopVisible && (
        <Shop
          aura={aura}
          auraPerSecond={auraPerSecond}
          setAura={setAura}
          setAuraPerSecond={setAuraPerSecond}
          taita={taita}
          taitaPrice={taitaPrice}
          taitaSpeed={taitaSpeed}
          setTaita={setTaita}
          setTaitaPrice={setTaitaPrice}
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
        />
      )}
    </>
  );
}

export default App;