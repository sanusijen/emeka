import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function February() {


  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: '40px' }}>
        <div className="title-holder" style={{ color: '#0c71c3' }}>
          <h2>Events of the Month</h2>
          <div className="subtitle" style={{ color: '#0c71c3' }}>
            EAI Events for February
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <video
              controls
              style={{
                width: '100%',
                height: '500px',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
              }}
            >
              <source
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ngulo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col sm={6}>
            <p>MONTH: FEBRUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: NDIULO NGBO GJSS</p>
            <p>LOCAL GOVERNMENT: OHAUKWU</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited NDIULO NGBO GJSS, where the
              organization donated study materials to the students of the
              school. The materials ranged from pencils, textbooks, to notebooks.
              This was done in an effort to support less privileged students in
              public schools across Ebonyi State. Our donations align with the
              findings of our survey regarding student performance in the
              school, which revealed that many students face challenges due to a
              lack of study materials.
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <video
              controls
              style={{
                width: '100%',
                height: '500px',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
              }}
            >
              <source
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/gg.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col sm={6}>
            <p>MONTH: FEBRUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: GIRLS HIGH SCHOOL Abakaliki</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited GIRLS HIGH SCHOOL ABAKALIKI, where the
              organization donated study materials to the students of the
              school. The materials ranged from pencils, textbooks, to notebooks.
              This was done in an effort to support less privileged students in
              public schools across Ebonyi State. Our donations align with the
              findings of our survey regarding student performance in the
              school, which revealed that many students face challenges due to a
              lack of study materials.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default February;
