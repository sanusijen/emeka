import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
function October() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid style={{marginTop:"40px"}}>
        <div className="title-holder" style={{color:"#0c71c3"}}>
          <h2>Events Of The Month</h2>
          <div className="subtitle"style={{color:"#0c71c3"}}>EAI Events For October</div>
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
  <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/isha.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : OCTOBER</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : ISHIAGU CENTRAL SCHOOL ISHIAGU </p>
          <p>LOCAL GOVERNMENT:IVO</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited ISHIAGU CENTRAL SCHOOL ISHIAGU  where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
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
  < source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ik.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : OCTOBER</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : AMASIRI JSS AMASIRI </p>
          <p>LOCAL GOVERNMENT:AFIKPO NORTH</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited AMASIRI JSS AMASIRI where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
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
  <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/is.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>MONTH : OCTOBER</p>
          <p>YEAR : 2024</p>
          <p>SCHOOL NAME : ISHIAGU HIGH JSS ISHIAGU </p>
          <p>LOCAL GOVERNMENT:IVO</p>
          <p>STATE:EBONYI</p>
          <p>DONATION TYPE: TEXTBOOKS</p>
          <p>The Emeka Anyimude Initiative visited ISHIAGU HIGH JSS ISHIAGU where the organization donated Study materials to the student of the school the materials ranging from pencil, text book,note books.all this is done in effort to help the less privellege once in public schools Accross ebonyi state.our danations in line with our survey regarding the performance of student in the schol we realize that student face challenges with Study materials.
 </p>
      
          </Col> 

        </Row>
      </Container>
    </section>
  );
}

export default October;