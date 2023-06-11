import './App.css';
import FireExtinguisherTracker from './components/FireExtinguisherTracker';
// import EmployeeComponent from './components/EmployeeComponent';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
