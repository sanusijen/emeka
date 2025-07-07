import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
function June() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid style={{marginTop:"40px"}}>
        <div className="title-holder" style={{color:"#0c71c3"}}>
          <h2>Events Of The Month</h2>
          <div className="subtitle"style={{color:"#0c71c3"}}>EAI Events For June</div>
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
      <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/amuro.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </Col>
          <Col sm={6}>
          <p>MONTH : JULY</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : AMURO/MGBOM PRIMARY SCHOOL I </p>
          <p>LOCAL GOVERNMENT:AFIKPO NORTH</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited AMURO/MGBOM PRIMARY SCHOOL I where the organization donated study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with study materials.
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
      <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ngbon.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          </Col>
          <Col sm={6}>
          <p>MONTH : JULY</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : AMURO/MGBOM PRIMARY SCHOOL II </p>
          <p>LOCAL GOVERNMENT:AFIKPO NORTH</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited AMURO/MGBOM PRIMARY SCHOOL II where the organization donated study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with study materials.
 </p>
      
          </Col> 
        <Col sm={6}>
          <video
  controls
  style={{
    width: "100%",
    height: "500px",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    objectFit: "cover",
  }}
>
  <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ezza.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : June</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : COMMUNITY CENTRAL SCHOOL EZZAMA </p>
          <p>LOCAL GOVERNMENT:EZZA SOUTH</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited  COMMUNITY CENTRAL SCHOOL EZZAMA  where the organization donated study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with study materials.
 </p>
      
          </Col>

          <Col sm={6}>
          <video
  controls
  style={{
    width: "100%",
    height: "500px",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    objectFit: "cover",
  }}
>
  <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/afik.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : June</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : AMURO MGBOM COMMUNITY JSS </p>
          <p>LOCAL GOVERNMENT:AFIKPO NORTH</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited  AMURO MGBOM COMMUNITY JSS where the organization donated study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with study materials.
 </p>
      
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default June;