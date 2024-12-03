import "./achievements.css";
import firstClickImg from "../img/firstclick.png";

function Achievements({
  aura,
  totalAura,
  autaPerSecond,
  clickCount,
  achievements,
  taita,
  aadi,
}) {
  return (
    <div className="achievements">
      <h2>achievements</h2>
      <div className="first-click">
        <img
          src={firstClickImg}
          alt="first click"
          className="first-click-img"
        />
        <button className="first-click-button" disabled={clickCount < 1}>
          <div>
            <h3>first click</h3>
            <br />
            click the button once ({clickCount < 1 ? clickCount : "1"} / 1)
          </div>
        </button>
      </div>
      <div className="500-clicks">
        <img alt="500 clicks" />
        <button className="500-clicks-button" disabled={clickCount < 500}>
          <div>
            500 clicks
            <br />
            click the button 500 times ({clickCount < 500
              ? clickCount
              : "500"}{" "}
            / 500)
          </div>
        </button>
      </div>
      <div className="5-taitas">
        <img alt="5 taitas" />
        <button className="5-taitas-button" disabled={taita < 5}>
          <div>
            5 taitas
            <br />
            buy 5 taitas ({taita} / 5)
          </div>
        </button>
      </div>
      <div className="slavery">
        <img alt="slavery" />
        <button className="slavery-button" disabled={taita + aadi < 100}>
          <div>
            Today's subject: slavery
            <br />
            buy 100 workers ({taita + aadi} / 100)
          </div>
        </button>
      </div>
      <div className="procrastinator">
        <img
          alt="procrastinator"
        />
        <button className="procrastinator-button" disabled={clickCount > 10 && totalAura < 10000}>
          <div>
            procrastinator
            <br />
            reach 10,000 aura without clicking more than 10 times 
            <br />
            ({totalAura < 10000 ? totalAura : "10,000"} / 10,000 | {clickCount} / 10)
          </div>
        </button>
      </div>
      <div className="sigma">
        <img alt="sigma" />
        <button className="sigma-button" disabled={(taita + aadi) < 1 && totalAura < 10000}>
          <div>
            sigma clicker
            <br />
            reach 10,000 aura without buying workers 
            <br />
            ({totalAura < 10000 ? totalAura : "10,000"} / 10,000)
          </div>
        </button>
      </div>
    </div>
  );
}

export default Achievements;
