import { Deck, Slide } from 'spectacle';
import Election from './../election.json';
import TestElectionDisplay from './components/test_election_display.jsx';
function App() {
    return (
        <Deck>
            <Slide>
                <TestElectionDisplay position={Election['International Student Representative']} />
            </Slide>
        </Deck>
    );
}

export default App;
