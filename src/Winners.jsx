import { candidateByFullName } from './data';

export default function Winners({ positionName, winners }) {
    return (
        <div className="winners">
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
    );
}
