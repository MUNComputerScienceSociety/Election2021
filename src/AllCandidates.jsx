import { candidateByFullName, candidateData } from './data';

export default function AllCandidates({ electionData }) {
    return (
        <div className="all-candidates">
            {candidateData.map(({ fullName }) => (
                <div key={fullName}>
                    <h1>{fullName}</h1>
                    <img
                        src={`https://www.cs.mun.ca/~csclub/assets/elections/fall-2021/candidates/${
                            candidateByFullName(fullName).image
                        }.jpg`}
                    />
                </div>
            ))}
        </div>
    );
}
