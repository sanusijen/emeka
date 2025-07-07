import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function ContHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{ backgroundColor:"orange", height:"50px"}}>
        <Container fluid>
        <div className='contact-info'>
          <ul>
            <li style={{color:"darkblue"}}>
              <i className="fas fa-envelope"></i>
              Sambaoabu@yahoo.com.., <i className="fas fa-phone"></i>
              08034574285...<i className="fas fa-map-marker-alt"></i>
              NO 51,Ring Road by hadejia Road Kano...
              
            </li>
           
             
          </ul>
        </div>
      </Container>
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ContHeader;