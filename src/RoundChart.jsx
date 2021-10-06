import { useEffect, useState, useMemo } from 'react';
import { FlexBox } from 'spectacle';

import { ResponsiveBar } from '@nivo/bar';
import { colorSchemes } from '@nivo/colors';

const transofrmVotesToData = (votes) =>
    Object.entries(votes)
        .map(([k, v]) => ({ candidate: k, count: v }))
        .sort((a, b) => b.count - a.count);

const TIMEOUT = 500;

export default function RoundChart({ initialVotes, targetVotes }) {
    const candidates = useMemo(() => Array.from(new Set(Object.keys(targetVotes))), [targetVotes]);

    const [votes, setVotes] = useState(() => {
        if (initialVotes === undefined) {
            return {};
        }

        return Object.fromEntries(
            Object.entries(targetVotes).map(([candidate, targetCount]) => {
                if (!(candidate in initialVotes)) {
                    return [candidate, 0];
                } else {
                    return [candidate, Math.min(initialVotes[candidate], targetCount)];
                }
            }),
        );
    });
    const data = useMemo(() => transofrmVotesToData(votes), [votes]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const incompleteVotes = Object.entries(votes)
                .filter(([k, v]) => v < targetVotes[k])
                .map(([k]) => k);

            if (incompleteVotes.length > 0) {
                const votedCandidate = incompleteVotes[Math.floor(Math.random() * incompleteVotes.length)];
                const newVotes = { ...votes };
                newVotes[votedCandidate] += 1;
                setVotes(newVotes);
            }
        }, TIMEOUT);
        return () => clearTimeout(timeout);
    }, [votes, setVotes, targetVotes]);

    return (
        <FlexBox flex={1} width="100%" height="80%">
            <ResponsiveBar
                data={data}
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
}
