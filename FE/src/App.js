import './App.css';
import FireExtinguisherTracker from './components/FireExtinguisherTracker';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="container-fluid">
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand><h2><b>INNOVIXA SERVICES PRIVATE LIMITED</b></h2></Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <br />
      <FireExtinguisherTracker />
    </div>
  );
}

export default App;
