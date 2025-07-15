import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import anyimude from '../assets/images/anyimude.jpg';
import img2 from '../assets/images/img2.mp4';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid  style={{marginTop:"40px"}}>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Know More About Emeka Anyimude Initiative</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={anyimude} />
          </Col>
          <Col sm={6}>
          <p>The Emeka Anyimude Initiative is a humanitarian organization committed to transforming education for underprivileged students in Ebonyi State, Nigeria. Founded with a deep passion for educational equity, the initiative began its full-scale operations in 2023 and has since become a beacon of hope for thousands of students across the state.

Our mission is simple yet powerful: to provide essential Study materials to students in public schools who lack the resources they need to thrive academically. We believe that every child, regardless of their background or economic status, deserves access to quality learning tools that can empower their future.

Since its inception, the Emeka Anyimude Initiative has made a remarkable impact by reaching over 200 public schools and donating Study materials to more than 15,000 students. Through the generous support of donors and volunteers, we continue to expand our reach, one school and one student at a time.

At the heart of our work is the belief that education is the most effective tool for breaking the cycle of poverty. By equipping students with books, writing materials, </p>
      
          </Col>
          <p>and other educational resources, we aim to nurture their potential and inspire a new generation of leaders and changemakers in Ebonyi State and beyond.

Join us as we build a brighter future through education—because every child deserves a chance to learn, grow, and succeed. Our core mission is to empower the next generation through education by ensuring that no child is left behind simply because of their socio-economic background. We strongly believe that access to quality learning resources should not be a privilege, but a right for every child—especially those in underserved communities.</p> 
        <Col sm={6}>
  <video
    controls
    style={{
      width: "100%",
      height: "500px", // Reduced height
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      objectFit: "cover", // Optional: ensures video content fits well
    }}
  >
    <source src={img2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Col>
<Col sm={6}>
  <video
    controls
    style={{
      width: "100%",
      height: "500px", // Reduced height
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      objectFit: "cover", // Optional: ensures video content fits well
    }}
  >
    <source src={img2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</Col>

        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;