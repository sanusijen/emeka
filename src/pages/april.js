import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppFooter from '../components/footer';

function April() {
  return (
    <div>
      <section id="about" className="block about-block">
        <Container fluid style={{ marginTop: '40px' }}>
          <div className="title-holder" style={{ color: '#0c71c3' }}>
            <h2>Events Of The Month</h2>
            <div className="subtitle" style={{ color: '#0c71c3' }}>EAI Events For April</div>
          </div>

          {/* EVENT 1 */}
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
                <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ezik.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col sm={6}>
              <p><strong>MONTH:</strong> April</p>
              <p><strong>YEAR:</strong> 2024</p>
              <p><strong>SCHOOL NAME:</strong> Ezzikwo Primary School II, Abakaliki</p>
              <p><strong>LOCAL GOVERNMENT:</strong> Abakaliki</p>
              <p><strong>STATE:</strong> Ebonyi</p>
              <p><strong>DONATION TYPE:</strong> Textbooks</p>
              <p>
                The Emeka Anyimude Initiative visited Ezzikwo Primary School II, Abakaliki, where the organization donated study materials including pencils, textbooks, and notebooks. This was part of the organization’s effort to support less privileged students in public schools across Ebonyi State. Based on our survey of the school's performance, we found that many students struggle due to a lack of study materials.
              </p>
            </Col>
          </Row>

          {/* EVENT 2 */}
          <Row className="mt-5">
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
                <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/gg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col sm={6}>
              <p><strong>MONTH:</strong> April</p>
              <p><strong>YEAR:</strong> 2024</p>
              <p><strong>SCHOOL NAME:</strong> Girls High JSS Azuiyiokwu, Abakaliki</p>
              <p><strong>LOCAL GOVERNMENT:</strong> Abakaliki</p>
              <p><strong>STATE:</strong> Ebonyi</p>
              <p><strong>DONATION TYPE:</strong> Textbooks</p>
              <p>
                The Emeka Anyimude Initiative visited Girls High JSS Azuiyiokwu, Abakaliki, to donate essential learning materials such as pencils, textbooks, and notebooks. These donations aim to support underprivileged students in public schools and were informed by performance surveys showing challenges faced by students due to a lack of resources.
              </p>
            </Col>
          </Row>

          {/* EVENT 3 */}
          <Row className="mt-5">
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
                <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/gs.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
            <Col sm={6}>
              <p><strong>MONTH:</strong> April</p>
              <p><strong>YEAR:</strong> 2024</p>
              <p><strong>SCHOOL NAME:</strong> Girls High JSS Azuiyiokwu, Abakaliki</p>
              <p><strong>LOCAL GOVERNMENT:</strong> Abakaliki</p>
              <p><strong>STATE:</strong> Ebonyi</p>
              <p><strong>DONATION TYPE:</strong> Textbooks</p>
              <p>
                A second outreach at Girls High JSS Azuiyiokwu, Abakaliki, further provided more study materials. This continuous support demonstrates the Emeka Anyimude Initiative’s commitment to educational empowerment and reducing inequality in access to learning resources across Ebonyi State.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <AppFooter />
    </div>
  );
}

export default April;
