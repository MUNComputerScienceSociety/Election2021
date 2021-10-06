import { Deck, Slide } from 'spectacle';

import ELECTION from './../election.json';
import PositionDisplay from './PositionDisplay';

const theme = {
    colors: {
        primary: 'rgb(107, 184, 144)',
        secondary: 'rgb(15, 63, 97)',
    },
};

/**
 * Create poster for stream
 *
 * Countdown slide
 *  - 5 minute
 *
 * Intro slide
 *  - hello world, muncs logo, jack and riley say hi
 *
 * Slide about the positions open
 *  - tech rep, intl. , first year...
 *
 * Slide about people who are running
 *  - pictures of candidates who are running
 *
 * Slide about ranked choice voting
 *  - talk a little bit about the python library being used,
 *  - what the 'rounds' imply, etc.
 *
 * Slide about
 */

function App() {
    return (
        <Deck theme={theme}>
            {Object.entries(ELECTION).map(([positionName, { rounds, winners }]) => (
                <Slide key={positionName}>
                    <PositionDisplay positionName={positionName} rounds={rounds} />
                </Slide>
            ))}
        </Deck>
    );
}

export default App;
