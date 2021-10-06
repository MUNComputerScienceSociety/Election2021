import React from 'react';
import { Deck, Slide } from 'spectacle';

import ELECTION from './../election.json';
import AllWinners from './AllWinners';
import PositionDisplay from './PositionDisplay';
import Winners from './Winners';

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
            <Slide>Countdown</Slide>
            <Slide>Introduction</Slide>
            <Slide>Positions</Slide>
            <Slide>People running</Slide>
            <Slide>
                <div className="display-header">
                    <h1>Ranked Choice Voting</h1>
                </div>
                <ul>
                    <li>Voting was done via ranked choice voting</li>
                    <li>Vote counting was done via single transferable vote</li>
                    <ul>
                        <li>Comprised of a number of rounds</li>
                        <li>
                            At the end of each round, if there is not a person with a majority, then a certain number of
                            people who got the least votes are eliminated.
                        </li>
                        <li>
                            Votes given to those who were eliminated are then transferred to the voter's second, third,
                            etc. choice (whichever one is still in the running)
                        </li>
                        <li>Vote counting was done via the library PyRankVote</li>
                        <ul>
                            <li>Library can be found at https://github.com/jontingvold/pyrankvote</li>
                        </ul>
                    </ul>
                </ul>
            </Slide>
            <Slide>Now for the votes!</Slide>
            {Object.entries(ELECTION).map(([positionName, { rounds, winners }]) => (
                <React.Fragment key={positionName}>
                    <Slide>
                        <PositionDisplay positionName={positionName} rounds={rounds} />
                    </Slide>
                    <Slide>
                        <Winners positionName={positionName} winners={winners} />
                    </Slide>
                </React.Fragment>
            ))}
            <Slide>
                <AllWinners electionData={ELECTION} />
            </Slide>
            <Slide>Thanks for coming</Slide>
        </Deck>
    );
}

export default App;
