import "./achievements.css";
import firstClickImg from "../img/firstclick.png";

function Achievements({
  aura,
  totalAura,
  autaPerSecond,
  clickCount,
  achievements,
  taita,
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
            first click
            <br />
            click the button once ({clickCount < 1 ? clickCount : "1"} / 1)
          </div>
        </button>
      </div>
      <div className="500-clicks">
        <img
          alt="500 clicks"
        />
        <button className="500-clicks-button" disabled={clickCount < 500}>
          <div>
            500 clicks
            <br />
            click the button 500 times (
            {clickCount < 500 ? clickCount : "500"} / 500)
          </div>
        </button>
      </div>
      <div className="5-taitas">
        <img
          alt="5 taitas"
        />
        <button className="5-taitas-button" disabled={taita < 5}>
          <div>
            5 taitas
            <br />
            buy 5 taitas ({taita} / 5)
          </div>
        </button>
      </div>
    </div>
  );
}

export default Achievements;
