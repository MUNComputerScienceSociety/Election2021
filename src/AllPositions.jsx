export default function AllPositions({ electionData }) {
    return (
        <div className="all-positions">
            <h1>Positions</h1>
            {Object.keys(electionData).map((positionName) => (
                <i>
                    <h3>{positionName}</h3>
                </i>
            ))}
        </div>
    );
}
