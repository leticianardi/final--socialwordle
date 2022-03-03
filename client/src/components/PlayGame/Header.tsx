import "../../styles/Header.css";
import {
  BsFillBarChartLineFill,
  BsGear,
  BsQuestionCircle,
  BsGithub,
} from "react-icons/bs";
import HowToPlayScreen from "./HowToPlayScreen";
// import { shuffleArray } from '../utils';
import { useState } from "react";
import SettingsScreen from "./SettingsScreen";
// import { GlobalSettingsContext } from '../hooks/useGlobalSettings';
import { StatisticsScreen } from "./StatisticsScreen";

// const APP_NAME = 'wording';
const GITHUB_URL = "git@github.com:leticianardi/final--socialwordle.git";

function Header() {
  // const [{isColorblindModeActive}] = useContext(GlobalSettingsContext);

  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);

  // const shuffledIndexes = shuffleArray(Array.from(Array(APP_NAME.length).keys()));
  // const appName = APP_NAME.split('').map((letter, index) => {
  //   let className = '';

  //   if (index === shuffledIndexes[0]) className = 'letter-green';
  //   if (index === shuffledIndexes[1]) className = 'letter-yellow';
  //   if (index === shuffledIndexes[2]) className = 'letter-red';

  //   if (isColorblindModeActive) className += ' colorblind';

  //   return (<span key={index.toString()} className={className}>{letter}</span>)
  // });

  return (
    <div className="mt-3 mb-4 d-flex align-items-center justify-content-around">
      {isHowToPlayOpen && (
        <HowToPlayScreen handleCloseScreen={() => setIsHowToPlayOpen(false)} />
      )}

      {isSettingsOpen && (
        <SettingsScreen handleCloseScreen={() => setIsSettingsOpen(false)} />
      )}

      {isStatisticsOpen && (
        <StatisticsScreen
          handleCloseScreen={() => setIsStatisticsOpen(false)}
        />
      )}

      <div className="d-flex">
        <button
          className="header-button rounded d-flex align-items-center justify-content-center py-2 me-2"
          onClick={() => setIsHowToPlayOpen(true)}
        >
          <BsQuestionCircle />
        </button>

        <button
          className="header-button rounded d-flex align-items-center justify-content-center py-2"
          onClick={() => window.open(GITHUB_URL, "_blank")}
        >
          <BsGithub />
        </button>
      </div>

      {/* <h1 className="text-center mb-0 app-name">{appName}</h1> */}
      {/* <h1 className="text-center mb-0 app-name">wording</h1> */}

      <div className="d-flex">
        <button
          className="header-button rounded d-flex align-items-center justify-content-center py-2 me-2"
          onClick={() => setIsStatisticsOpen(true)}
        >
          <BsFillBarChartLineFill />
        </button>

        <button
          className="header-button rounded d-flex align-items-center justify-content-center py-2"
          onClick={() => setIsSettingsOpen(true)}
        >
          <BsGear />
        </button>
      </div>
    </div>
  );
}

export default Header;
