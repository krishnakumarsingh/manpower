import './App.css';
import FireExtinguisherTracker from './components/FireExtinguisherTracker';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand><h2><b>INNOVIXA SERVICES PRIVATE LIMITED</b></h2></Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <br />
      <FireExtinguisherTracker />
    </>
  );
}

export default App;
