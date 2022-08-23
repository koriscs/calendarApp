import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Calendar from './components/Calendar';

function App() {


  return (
    <Container fluid>
      <Row  className='nav-header' >
        <h5>Ibi's Room</h5>
        <h1>Have Fun</h1>
      </Row>
      <Row className='hero'>
        <Col className='content-div'><img src='https://i.ibb.co/TrxmdcM/woman.jpg'/>
        <p>Foglalj időpontot és élvezd a termet!</p></Col>
        <Col className='calendar-div'><Calendar /></Col>
      </Row>
      <Row className='footer'>

      </Row>
      </Container>
  );
}

export default App;
