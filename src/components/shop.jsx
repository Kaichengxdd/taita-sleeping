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
      <div className="flex flex-col items-center justify-center text-black absolute left-80/100 top-10/100 transform -translate-x-50/100">
        <div className="text-3xl mb-12">
          <span>shop</span>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={taitaImage}
            alt="taita"
            className="w-20 h-25"
            title={`every taita generates ${taitaSpeed} aura per second`}
          />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              aura < taitaPrice
                ? "bg-gray-300 border-transparent hover:border-gray-400"
                : "bg-gray-400 border-transparent hover:border-gray-500"
            }`}
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
        <div className="flex items-center space-x-4">
          <img
            alt="aadi"
            className="w-20 h-25"
            title={`every aadi generates ${aadiSpeed} aura per second`}
          />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              aura < aadiPrice
                ? "bg-gray-300 border-transparent hover:border-gray-400"
                : "bg-gray-400 border-transparent hover:border-gray-500"
            }`}
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
