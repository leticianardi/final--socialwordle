import GameEng from "./GameEng";
import Header from "./Header";
import "../../styles/App.css";
import {
  GlobalSettingsContext,
  useGlobalSettings,
} from "../../hooks/useGlobalSettings";
import { StatisticsContext, useStatistics } from "../../hooks/useStatistics";

function AppGameEng() {
  const globalSettings = useGlobalSettings();
  const statistics = useStatistics();

  return (
    <StatisticsContext.Provider value={statistics}>
      <GlobalSettingsContext.Provider value={globalSettings}>
        <div className="app-container">
          <Header />
          <GameEng />
        </div>
      </GlobalSettingsContext.Provider>
    </StatisticsContext.Provider>
  );
}

export default AppGameEng;
