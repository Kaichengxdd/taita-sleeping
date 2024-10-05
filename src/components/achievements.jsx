import "./achievements.css";
import firstClickImg from "../img/firstclick.png";

function Achievements({
  aura,
  totalAura,
  autaPerSecond,
  clickCount,
  achievements,
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
    </div>
  );
}

export default Achievements;
