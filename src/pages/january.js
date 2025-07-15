import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
function January() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid style={{marginTop:"40px"}}>
        <div className="title-holder" style={{color:"#0c71c3"}} >
          <h2 >Events Of The Month</h2>
          <div className="subtitle"style={{color:"#0c71c3"}} >EAI Events For January</div>
        </div>
        <Row>
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
  <source src= "https://emekaanyimude.s3.eu-north-1.amazonaws.com/demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : JANUARY</p>
          <p>YEAR : 2025</p>
          <p>SCHOOL NAME : DEMOCRACY ESTATE PRIMARY SCHOOL ABAKALIKI </p>
          <p>LOCAL GOVERNMENT:ABAKALIKI</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited DEMOCRACY ESTATE PRIMARY SCHOOL where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
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
  
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : JANUARY</p>
          <p>YEAR : 2025</p>
          <p>SCHOOL NAME : NKWEGU CPS, NKWAGU </p>
          <p>LOCAL GOVERNMENT:ABAKALIKI</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited NKWEGU CPS, NKWAGU where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
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
  <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/cen.mp4"  type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : JANUARY</p>
          <p>YEAR : 2025</p>
          <p>SCHOOL NAME : CENTRAL URBAN P/S I, ABAKALIKI </p>
          <p>LOCAL GOVERNMENT:ABAKALIKI</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited CENTRAL URBAN P/S I, ABAKALIKI where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
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

  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : JANUARY</p>
          <p>YEAR : 2025</p>
          <p>SCHOOL NAME : PRISON SPECIAL SECONDARY SCHOOL, ABAKALIKI </p>
          <p>LOCAL GOVERNMENT:ABAKALIKI</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited PRISON SPECIAL SECONDARY SCHOOL, ABAKALIKI where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
 </p>
      
          </Col> 

        </Row>
      </Container>
    </section>
  );
}

export default January;