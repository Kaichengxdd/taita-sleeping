import "./upgrades.css";
import taitaUpgradeImage from "../img/taitaupgrade.jpg";

function Upgrades({
  aura,
  auraPerSecond,
  taita,
  taitaSpeed,
  taitaUpgradePrice,
  setAura,
  setAuraPerSecond,
  setTaitaSpeed,
  setTaitaUpgradePrice,
}) {
  return (
    <>
      <div className="upgrades">
        <h2>upgrades</h2>
        <div className="taita">
          <img
            src={taitaUpgradeImage}
            alt="taita"
            className="taita-image"
            title={`upgrade doubles the aura generation of taitas`}
          />
          <button
            className="upgrade-taita"
            onClick={() => {
              setAuraPerSecond(auraPerSecond + taitaSpeed * taita);
              setTaitaSpeed(taitaSpeed * 2);
              setAura(aura - taitaUpgradePrice);
              setTaitaUpgradePrice(Math.ceil(taitaUpgradePrice * 5));
            }}
            disabled={aura < taitaUpgradePrice}
            title={
              aura < taitaUpgradePrice
                ? "you do not have enough aura"
                : undefined
            }
          >
            <div>
              upgrade taita
              <br />
              costs {taitaUpgradePrice} aura
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Upgrades;
