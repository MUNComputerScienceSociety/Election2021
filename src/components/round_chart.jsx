import React, { useEffect, useState } from 'react';
import { FlexBox } from 'spectacle';

import { ResponsiveBar } from '@nivo/bar';
import { colorSchemes } from '@nivo/colors';

export default ({ startingVotes, targetVotes }) => {
    const candidates = Array.from(new Set(Object.keys(targetVotes)));
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
        }, 5);
        return () => {
            clearTimeout(timeout);
        };
    }, [votes, setVotes, targetVotes]);

    const voteArray = Object.entries(votes)
        .map(([k, v]) => ({ candidate: k, count: v }))
        .sort((a, b) => b.count - a.count);
    return (
        <FlexBox flex={1} width="100%" height="80%">
            <ResponsiveBar
                data={voteArray}
                indexBy="candidate"
                keys={['count']}
                margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
                padding={0.3}
                isInteractive={false}
                colors={({ data }) => colorSchemes.pastel1[candidates.indexOf(data.candidate)]}
                theme={{
                    textColor: '#dddddd',
                    fontFamily: 'Inter',
                }}
                labelTextColor="#222222"
                axisBottom={{ tickRotation: 25 }}
                axisLeft={null}
            />
        </FlexBox>
    );
};
