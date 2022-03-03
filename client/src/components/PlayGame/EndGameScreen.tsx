import { useContext, useMemo, useState } from "react";
import { EndGameScreenProps } from "../../models";
import Button from "./Button";
import Overlay from "./Overlay";
import "../../styles/EndGameScreen.css";
import { getNormalEndGameMessage } from "../../utils";
import { GlobalSettingsContext } from "../../hooks/useGlobalSettings";
import { StatisticsView } from "./StatisticsView";

function EndGameScreen(props: EndGameScreenProps) {
  const [{ isColorblindModeActive }] = useContext(GlobalSettingsContext);

  const [isResultCopied, setIsResultCopied] = useState<boolean>(false);
  const message = useMemo<string>(
    () =>
      getNormalEndGameMessage(
        props.dailyWord.edition,
        props.guesses,
        props.isGameWon
      ),
    [props.dailyWord.edition, props.guesses, props.isGameWon]
  );

  const canShare = (): boolean => {
    return navigator.canShare && navigator.canShare({ text: "" });
  };

  const handleCopyButton = () => {
    navigator.clipboard.writeText(message);
    setIsResultCopied(true);
  };

  const handleShareButton = () => {
    navigator.share({ text: message });
  };

  const shareButton = canShare() ? (
    <Button
      className="mb-2"
      onClick={() => handleShareButton()}
      label="Share"
    />
  ) : (
    ""
  );

  return (
    <Overlay
      content={
        <div className="content row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1
                className={
                  "text-center mb-3 " +
                  (isColorblindModeActive ? "colorblind " : "") +
                  (props.isGameWon ? "win-text" : "lose-text")
                }
              >
                You {props.isGameWon ? "got it!" : "didn't get it..."}
              </h1>
              <p className="text-center mb-1">
                the word of the day was: <b>{props.dailyWord.word}</b>
              </p>
              <p className="text-center mb-3">
                You used <b>{props.guesses.length} out of 6</b> guesses
              </p>

              <div className="d-flex flex-column justify-content-center align-items-center">
                {shareButton}

                <Button
                  className="mb-2"
                  onClick={() => handleCopyButton()}
                  label={isResultCopied ? "Copied" : "Copy "}
                />

                <Button
                  onClick={() => props.handleCloseScreen()}
                  label="CLOSE"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <StatisticsView />
          </div>
        </div>
      }
    />
  );
}

export default EndGameScreen;
