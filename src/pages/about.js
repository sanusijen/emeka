import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Card from '../components/slider'

import anyimude from '../assets/images/anyimude.jpg';


function About() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <div>
    <section id="about" className="block about-block">
      <Container fluid style={{marginTop:"40px"}}>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Know More About Emeka Anyimude Initiative</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={anyimude} />
          </Col>
          <Col sm={6}>
          <p>The Emeka Anyimude Initiative is an organization committed to transforming education for underprivileged students. With a strong vision for educational equity, the initiative began its full-scale operations in 2023 and has since aimed to serve as a beacon of hope for students across the state. </p> <p>Our mission is simple yet powerful: to provide essential study materials to students in public schools who lack the resources they need to thrive academically. We believe that every child, regardless of their background or economic status, deserves access to quality learning tools that can empower their future. For this reason, the initiative focuses primarily on supporting public schools. </p> <p>At the heart of our work is the belief that education is the most effective tool for breaking the cycle of poverty. By equipping students with books, writing materials, and other educational resources, we aim to nurture their potential and inspire a new generation of leaders and changemakers. </p> <p>Join us as we build a brighter future through education—because every child deserves a chance to learn, grow, and succeed. Our core mission is to empower the next generation through education by ensuring that no child is left behind simply because of their socio-economic background. We firmly believe that access to quality learning resources should not be a privilege but a right for every child, especially those in underserved communities. </p>
          </Col>
          
        </Row>
      </Container>
      
    </section>
    
    </div>
  );
}

export default About;