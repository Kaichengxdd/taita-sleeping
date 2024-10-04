import "./shop.css";
import taitaImage from "../img/taita.png";

function Shop({
  aura,
  auraPerSecond,
  taita,
  taitaPrice,
  taitaSpeed,
  setAura,
  setAuraPerSecond,
  setTaita,
  setTaitaPrice,
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
      </div>
    </>
  );
}

export default Shop;
