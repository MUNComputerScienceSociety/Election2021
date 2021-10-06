export default function AllPositions({ electionData }) {
    return (
        <div className="all-positions">
            <h1>Positions</h1>
            <ul>
                {Object.keys(electionData).map((positionName) => (
                    <li>
                        <h3>
                            {positionName}
                            {positionName === 'First Year Representative' ? ' (x2)' : ''}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}
