import firstClickImg from "../img/firstclick.png";

function Achievements({
  aura,
  totalAura,
  auraPerSecond,
  clickCount,
  achievements,
  taita,
  aadi,
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-black absolute left-80/100 top-10/100 transform -translate-x-50/100">
        <div className="text-3xl mb-12">
          <span>achievements</span>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={firstClickImg}
            alt="first click"
            className="w-20 h-25"
            title="first click"
          />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              clickCount < 1
                ? "bg-red-300 border-transparent hover:border-red-400"
                : "bg-green-300 border-transparent hover:border-green-400"
            }`}
            disabled={clickCount < 1}
          >
            <div>
              <h3>first click</h3>
              <h3>click the button once</h3>({clickCount < 1 ? clickCount : "1"}{" "}
              / 1)
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img alt="500 clicks" className="w-20 h-25" title="500 clicks" />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              clickCount < 500
                ? "bg-red-300 border-transparent hover:border-red-400"
                : "bg-green-300 border-transparent hover:border-green-400"
            }`}
            disabled={clickCount < 500}
          >
            <div>
              <h3>500 clicks</h3>
              <h3>click the button 500 times</h3>(
              {clickCount < 500 ? clickCount : "500"} / 500)
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img alt="5 taitas" className="w-20 h-25" title="5 taitas" />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              taita < 5
                ? "bg-red-300 border-transparent hover:border-red-400"
                : "bg-green-300 border-transparent hover:border-green-400"
            }`}
            disabled={taita < 5}
          >
            <div>
              <h3>5 taitas</h3>
              <h3>buy 5 taitas</h3>({taita} / 5)
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img alt="slavery" className="w-20 h-25" title="slavery" />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              taita + aadi < 100
                ? "bg-red-300 border-transparent hover:border-red-400"
                : "bg-green-300 border-transparent hover:border-green-400"
            }`}
            disabled={taita + aadi < 100}
          >
            <div>
              <h3>Today's subject: slavery</h3>
              <h3>buy 100 workers</h3>({taita + aadi} / 100)
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img
            alt="procrastinator"
            className="w-20 h-25"
            title="procrastinator"
          />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              clickCount > 10 || totalAura < 10000
                ? "bg-red-300 border-transparent hover:border-red-400"
                : "bg-green-300 border-transparent hover:border-green-400"
            }`}
            disabled={clickCount > 10 || totalAura < 10000}
          >
            <div>
              <h3>procrastinator</h3>
              <h3>reach 10,000 aura without clicking more than 10 times</h3>(
              {totalAura < 10000 ? Math.round(totalAura) : "10,000"} / 10,000 |
              {10 - clickCount > 0 ? 10 - clickCount : 0} clicks left)
            </div>
          </button>
        </div>
        <div className="flex items-center space-x-4 mb-8">
          <img alt="sigma" className="w-20 h-25" title="sigma" />
          <button
            className={`w-70 h-25 text-2xl border-5 transition-colors duration-300 rounded-lg ${
              taita + aadi < 1 || totalAura < 10000
                ? "bg-red-300 border-transparent hover:border-red-400"
                : "bg-green-300 border-transparent hover:border-green-400"
            }`}
            disabled={taita + aadi < 1 || totalAura < 10000}
          >
            <div>
              <h3>sigma clicker</h3>
              <h3>reach 10,000 aura without buying workers</h3>(
              {totalAura < 10000 ? Math.round(totalAura) : "10,000"} / 10,000)
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Achievements;
