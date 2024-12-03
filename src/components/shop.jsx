import "./shop.css";
import taitaImage from "../img/taita.png";

function Shop({
  aura,
  auraPerSecond,
  taita,
  taitaPrice,
  taitaSpeed,
  aadi,
  aadiPrice,
  aadiSpeed,
  setAura,
  setAuraPerSecond,
  setTaita,
  setTaitaPrice,
  setAadi,
  setAadiPrice,
}) {
  return (
    <>
      <div className="shop">
        <h2>shop</h2>
        <div className="taita">
          <img
            src={taitaImage}
            alt="taita"
            className="taita-image"
            title={`every taita generates ${taitaSpeed} aura per second`}
          />
          <button
            className="buy-taita"
            onClick={() => {
              setAura(aura - taitaPrice);
              setAuraPerSecond(auraPerSecond + taitaSpeed);
              setTaita(taita + 1);
              setTaitaPrice(Math.ceil(taitaPrice * 1.1));
            }}
            disabled={aura < taitaPrice}
            title={
              aura < taitaPrice ? "you do not have enough aura" : undefined
            }
          >
            <div>
              you have {taita} taitas
              <br />
              buy a taita for {taitaPrice} aura
            </div>
          </button>
        </div>
        <div className="aadi">
          <img alt="aadi" />
          <button
            className="buy-aadi"
            onClick={() => {
              setAura(aura - aadiPrice);
              setAuraPerSecond(auraPerSecond + aadiSpeed);
              setAadi(aadi + 1);
              setAadiPrice(Math.ceil(aadiPrice * 1.15));
            }}
            disabled={aura < aadiPrice}
            title={aura < aadiPrice ? "you do not have enough aura" : undefined}
          >
            <div>
              you have {aadi} aadis
              <br />
              buy an aadi for {aadiPrice} aura
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Shop;
