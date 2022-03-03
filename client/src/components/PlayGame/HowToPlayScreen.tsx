import GuessLetterView from "./GuessLetterView";
import Overlay from "./Overlay";
import '../../styles/HowToPlayScreen.css';
import Button from "./Button";
import { getRandomInt } from "../../utils";
import { GuessLetterState, OverlayScreenProps } from "../../models";
import { useContext } from "react";
import { GlobalSettingsContext } from "../../hooks/useGlobalSettings";

function GuessExample(props: {word: string, exampleState: GuessLetterState}) {
  const randomExample = getRandomInt(0, 5);

  return <div className="d-flex">
    {
      props.word.split('').map((letter, index) => (
        <GuessLetterView
          key={letter + '-' + props.exampleState + index.toString()}
          letter={letter}
          state={index === randomExample ? props.exampleState : 'disabled'}
          marginRight={index !== 4}
        ></GuessLetterView>
      ))
    }
  </div>
}

function HowToPlayScreen(props: OverlayScreenProps) {
  const [{isColorblindModeActive: colorblind}] = useContext(GlobalSettingsContext);

  return (
    <Overlay content={
      <div className="content">
        <h1 className="text-center">How to Play</h1>

        <p className="text-center">
          Every day, a new word is set for you to guess.<br/>
          You only have 6 guesses. You can't make up words.<br/>
          After guessing, the letters you change color to indicate it was a match, mispleced or if it isn't present.<br/>
        </p>

        <hr/>

        <p className="text-center">If the letter gets {colorblind ? 'redonda' : 'green'}, it's part of the word and in the right place.</p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <GuessExample word='RIGHT' exampleState='right' />
        </div>

        <p className="text-center">If the letter gets {colorblind ? 'pontilhada' : 'yellow'}, it's part of the word, but it's misplaced.</p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <GuessExample word='THOSE' exampleState='displaced' />
        </div>

        <p className="text-center">If the letter gets {colorblind ? 'desta cor' : 'gray'}, it's not part of the word.</p>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <GuessExample word='WRONG' exampleState='wrong' />
        </div>

        <p className="text-center credits">
          created by <a href="https://gabtoschi.com" target="_blank" rel="noreferrer">Gabriel Toschi</a><br/>
          Portuguese word bank: <a href="https://pt-br.libreoffice.org/projetos/vero" target="_blank" rel="noreferrer">VERO</a><br/>
          non-offical Portuguese version of <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank" rel="noreferrer">Wordle</a><br/>
          powered by <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a>, <a href="https://pages.github.com/" target="_blank" rel="noreferrer">GitHub Pages</a><br/>
        </p>

        <div className="d-flex align-items-center justify-content-center">
          <Button
            onClick={props.handleCloseScreen}
            label='CLOSE'
          />
        </div>

      </div>
    } />
  )
}

export default HowToPlayScreen;