import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function November() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: '40px' }}>
        <div className="title-holder" style={{ color: '#0c71c3' }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: '#0c71c3' }}>
            EAI Events For November
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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ama.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col sm={6}>
            <p>MONTH : NOVEMBER</p>
            <p>YEAR : 2025</p>
            <p>SCHOOL NAME : DEMOCRACY ESTATE PRIMARY SCHOOL</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited Democracy Estate Primary School
              where the organization donated study materials to the students. The materials
              ranged from pencils to textbooks and notebooks. This was part of efforts to help
              less privileged students in public schools across Ebonyi State. Based on our
              survey, we realized students face challenges with access to study materials.
            </p>
          </Col>

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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/jan.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>

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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/img2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default November;
