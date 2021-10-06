import { useEffect, useState, useMemo } from 'react';
import { FlexBox } from 'spectacle';

import { ResponsiveBar } from '@nivo/bar';
import { colorSchemes } from '@nivo/colors';

const transformVotesToData = (votes) =>
    Object.entries(votes)
        .map(([k, v]) => ({ candidate: k, count: v }))
        .sort((a, b) => b.count - a.count);

const TIMEOUT = 1000;

export default function RoundChart({ initialVotes, targetVotes }) {
    const candidates = useMemo(() => Array.from(new Set(Object.keys(targetVotes))), [targetVotes]);

    const [votes, setVotes] = useState({});
    const data = useMemo(() => transformVotesToData(votes), [votes]);

    useEffect(() => {
        if (initialVotes === undefined) {
            return setVotes({});
        }

        setVotes(
            Object.fromEntries(
                Object.entries(targetVotes).map(([candidate, targetCount]) => {
                    if (!(candidate in initialVotes)) {
                        return [candidate, 0];
                    } else {
                        return [candidate, Math.min(initialVotes[candidate], targetCount)];
                    }
                }),
            ),
        );
    }, [initialVotes, targetVotes]);

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
                    labels: {
                        text: {
                            fontSize: 'large',
                        },
                    },
                    axis: {
                        ticks: {
                            text: {
                                fontSize: 'medium',
                            },
                        },
                    },
                }}
                labelTextColor="#222222"
                axisBottom={{ tickRotation: 15 }}
                axisLeft={null}
            />
        </FlexBox>
    );
}
