import React from 'react';
import Countdown from 'react-countdown';
import { Deck, FlexBox, Slide } from 'spectacle';

import ELECTION from './../election.json';
import AllCandidates from './AllCandidates';
import AllPositions from './AllPositions';
import AllWinners from './AllWinners';
import PositionDisplay from './PositionDisplay';
import Winners from './Winners';

const theme = {
    colors: {
        primary: 'white',
        secondary: 'white',
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
        <Deck theme={theme} backgroundColor="white">
            <Slide>
                <Countdown
                    date={Date.now() + 1000 * 60 * 5}
                    renderer={(props) => (
                        <div class="countdown">
                            <h1>
                                {props.minutes}:{props.seconds.toString().padStart(2, '0')}
                            </h1>
                        </div>
                    )}
                />
            </Slide>
            <Slide>Introduction</Slide>
            <Slide>
                <AllPositions electionData={ELECTION} />
            </Slide>
            <Slide>
                <div className="display-header">
                    <h1>Candidates</h1>
                </div>
                <AllCandidates />
            </Slide>
            <Slide>
                <div className="display-header">
                    <h1>Ranked Choice Voting</h1>
                </div>
                <ul class="ranked-choice">
                    <li>Voting was done via ranked choice voting</li>
                    <li>Vote counting was done via single transferable vote</li>
                    <ul>
                        <li>Comprised of a number of rounds</li>
                        <li>
                            At the end of each round, if there is not a person with a majority, then a certain number of
                            people who got the least votes are eliminated.
                        </li>
                        <li>
                            Votes given to those who were eliminated are then transferred to each voter's second, third,
                            etc. choice (whichever one is still in the running).
                        </li>
                        <li>Vote counting was done via the library PyRankVote</li>
                        <ul>
                            <li>Library can be found at https://github.com/jontingvold/pyrankvote</li>
                        </ul>
                    </ul>
                </ul>
            </Slide>
            <Slide>
                <FlexBox width="100%" height="100%" alignItems="center" justifyContent="center">
                    <h1>Now, time for the votes!</h1>
                </FlexBox>
            </Slide>
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
