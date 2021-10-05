import React, { useEffect, useState } from 'react';
import { FlexBox } from 'spectacle';

import { ResponsiveBar } from '@nivo/bar';

export default ({ startingVotes, targetVotes }) => {
    if (startingVotes === undefined) {
        startingVotes = {};
    }
    for (const [candidate, targetCount] of Object.entries(targetVotes)) {
        if (!(candidate in startingVotes)) {
            startingVotes[candidate] = 0;
        }
        startingVotes[candidate] = Math.min(startingVotes[candidate], targetCount);
    }
    const [votes, setVotes] = useState(startingVotes);

    useEffect(() => {
        setVotes(startingVotes);
    }, [startingVotes, setVotes]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const incompleteVotes = Object.entries(votes)
                .filter(([k, v]) => v < targetVotes[k])
                .map(([k, v]) => k);

            if (incompleteVotes.length > 0) {
                const votedCandidate = incompleteVotes[Math.floor(Math.random() * incompleteVotes.length)];
                const newVotes = { ...votes };
                newVotes[votedCandidate] += 1;
                setVotes(newVotes);
            }
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [votes, setVotes, targetVotes]);

    const voteArray = Object.entries(votes)
        .map(([k, v]) => ({ candidate: k, count: v }))
        .sort((a, b) => b.count - a.count);
    return (
        <FlexBox flex={1} width="100%" height="100%">
            <ResponsiveBar
                data={voteArray}
                indexBy="candidate"
                keys={['count']}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                isInteractive={false}
                // valueScale={{ type: 'linear' }}
                // indexScale={{ type: 'band', round: true }}
                // valueFormat={{ format: '', enabled: false }}
                colors={{ scheme: 'nivo' }}
                colorBy="index"
            />
        </FlexBox>
    );
};
