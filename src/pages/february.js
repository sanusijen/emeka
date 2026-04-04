import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function February() {
  const videoStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover',
  };

  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: '40px' }}>
        
        <div className="title-holder" style={{ color: '#0c71c3' }}>
          <h2>Events of the Month</h2>
          <div className="subtitle" style={{ color: '#0c71c3' }}>
            EAI Events for February
          </div>
        </div>

        {/* Event 1 */}
        <Row className="mb-5">
          <Col sm={6}>
            <video controls style={videoStyle}>
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/cmpa.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col sm={6}>
            <p>MONTH: FEBRUARY</p>
            <p>YEAR: 2026</p>
            <p>SCHOOL NAME: NDIARBOR ISHIKE COMMUNITY PRIMARY SCHOOL</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited NDIARBOR ISHIKE COMMUNITY PRIMARY SCHOOL,
              where the organization donated study materials to the students.
            </p>
          </Col>
        </Row>

        {/* Event 2 */}
        <Row className="mb-5">
          <Col sm={6}>
            <video controls style={videoStyle}>
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/izh.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col sm={6}>
            <p>MONTH: FEBRUARY</p>
            <p>YEAR: 2026</p>
            <p>SCHOOL NAME: IZZI HIGH SCHOOL</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The initiative also visited IZZI HIGH SCHOOL and donated learning materials.
            </p>
          </Col>
        </Row>

        {/* Event 3 */}
        <Row className="mb-5">
          <Col sm={6}>
            <video controls style={videoStyle}>
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ngulo.mp4" type="video/mp4" />
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
              Donations were made to students to support their academic performance.
            </p>
          </Col>
        </Row>

        {/* Event 4 */}
        <Row className="mb-5">
          <Col sm={6}>
            <video controls style={videoStyle}>
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/gg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col sm={6}>
            <p>MONTH: FEBRUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: GIRLS HIGH SCHOOL ABAKALIKI</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The initiative supported students with essential study materials.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default February;
