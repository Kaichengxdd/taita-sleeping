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
  aadi,
  aadiSpeed,
  aadiUpgradePrice,
  setAadiSpeed,
  setAadiUpgradePrice,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-textc absolute left-80/100 top-10/100 transform -translate-x-50/100">
        <div className="text-3xl mb-12">
          <span>upgrades</span>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={taitaUpgradeImage}
            alt="taita"
            className="w-20 h-25"
            title={`upgrade doubles the aura generation of taitas`}
          />
          <button
            className={`w-70 h-25 text-2xl transition-colors duration-300 rounded-lg ${
              aura < taitaUpgradePrice
                ? "bg-buttonnotbuyablec"
                : "bg-buttonbuyablec hover:bg-buttonbuyableh"
            }`}
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
        <div className="flex items-center space-x-4">
          <img
            alt="aadi"
            className="w-20 h-25"
            title={`upgrade doubles the aura generation of aadis`}
          />
          <button
            className={`w-70 h-25 text-2xl transition-colors duration-300 rounded-lg ${
              aura < aadiUpgradePrice
                ? "bg-buttonnotbuyablec"
                : "bg-buttonbuyablec hover:bg-buttonbuyableh"
            }`}
            onClick={() => {
              setAuraPerSecond(auraPerSecond + aadiSpeed * aadi);
              setAadiSpeed(aadiSpeed * 2.5);
              setAura(aura - aadiUpgradePrice);
              setAadiUpgradePrice(Math.ceil(aadiUpgradePrice * 7));
            }}
            disabled={aura < aadiUpgradePrice}
            title={
              aura < aadiUpgradePrice
                ? "you do not have enough aura"
                : undefined
            }
          >
            <div>
              upgrade aadi
              <br />
              costs {aadiUpgradePrice} aura
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Upgrades;
