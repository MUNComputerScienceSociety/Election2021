import { useState, useCallback } from 'react';
import RoundChart from './components/round_chart.jsx';

export default function PositionDisplay({ positionName, rounds, winners }) {
    const [round, setRound] = useState(0);
    const [active, setActive] = useState(false);

    const nextRound = useCallback(() => {
        if (rounds.length > round + 1) {
            setRound(round + 1);
        }
    }, [round, setRound]);

    const start = useCallback(() => {
        setRound(0);
        setActive(true);
    }, [round, setRound, setActive]);

    const reset = useCallback(() => {
        setActive(false);
    }, [setActive]);

    return (
        <>
            <div className="display-header">
                <h1>
                    {positionName}
                    {active && ` - Round ${round + 1}`}
                </h1>
                {active && (
                    <div className="buttons">
                        <button className="next-round" onClick={() => nextRound()}>
                            Next Round
                        </button>
                        <button className="stop" onClick={() => reset()}>
                            Reset
                        </button>
                    </div>
                )}
            </div>
            {active ? (
                <RoundChart
                    startingVotes={round === 0 ? {} : rounds[round - 1].votes}
                    targetVotes={rounds[round].votes}
                />
            ) : (
                <button className="start" onClick={() => start()}>
                    Start
                </button>
            )}
        </>
    );
}
