import React, { useState } from 'react';
import RoundChart from './round_chart.jsx';

export default ({ position }) => {
    const [round, setRound] = useState(0);

    return (
        <>
            <button
                onClick={() => {
                    setRound(round + 1);
                }}
            >
                {round}
            </button>
            <RoundChart
                startingVotes={round === 0 ? {} : position.rounds[round - 1].votes}
                targetVotes={position.rounds[round].votes}
            />
        </>
    );
};
