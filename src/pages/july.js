import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
function July() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid style={{marginTop:"40px"}}>
        <div className="title-holder" style={{color:"#0c71c3"}}>
          <h2>Events Of The Month</h2>
          <div className="subtitle"style={{color:"#0c71c3"}}>EAI Events For July</div>
        </div>
        <Row>
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
      <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/pat.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </Col>
          <Col sm={6}>
          <p>MONTH : JULY</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : PATRICKS PRIMARY SCHOOL I,KPIRIKPIRI ABAKALIKI </p>
          <p>LOCAL GOVERNMENT:ABAKALIKI</p>
          <p>STATE: EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited PATRICKS PRIMARY SCHOOL I, KPIRIKPIRI ABAKALIKI where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
 </p>
      
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
      <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/izz.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </Col>
          <Col sm={6}>
          <p>MONTH : JULY</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : COMMUNITY JUNIOR SECONDARY SCHOOL ENYIGWE </p>
          <p>LOCAL GOVERNMENT:IZZI</p>
          <p>STATE: EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited COMMUNITY JUNIOR SECONDARY SCHOOL ENYIGWE where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
 </p>
      
          </Col> 

       
        </Row>
      </Container>
    </section>
  );
}

export default July;