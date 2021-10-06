import { candidateByFullName } from './data';

export default function AllWinners({ electionData }) {
    return (
        <div className="all-winners">
            {Object.entries(electionData).map(([positionName, { winners }]) => (
                <div key={positionName}>
                    <h1>{positionName}</h1>
                    <div>
                        {winners.map((winner) => (
                            <div key={winner}>
                                <h2>{winner}</h2>
                                <img
                                    src={`https://www.cs.mun.ca/~csclub/assets/elections/fall-2021/candidates/${
                                        candidateByFullName(winner).image
                                    }.jpg`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
