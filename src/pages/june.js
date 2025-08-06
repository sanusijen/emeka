import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function June() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: '40px' }}>
        <div className="title-holder" style={{ color: '#0c71c3' }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: '#0c71c3' }}>
            EAI Events For June
          </div>
        </div>
        <Row>
          {/* AMURO/MGBOM PRIMARY SCHOOL I */}
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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/amuro.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> JUNE</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> AMURO/MGBOM PRIMARY SCHOOL I</p>
            <p><strong>LOCAL GOVERNMENT:</strong> AFIKPO NORTH</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited AMURO/MGBOM PRIMARY SCHOOL I and donated
              study materials to the students, including pencils, textbooks, and notebooks.
              This effort supports underprivileged students in public schools across Ebonyi
              State. Based on our survey, many students face challenges accessing adequate
              study materials.
            </p>
          </Col>

          {/* AMURO/MGBOM PRIMARY SCHOOL II */}
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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ngbon.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> JUNE</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> AMURO/MGBOM PRIMARY SCHOOL II</p>
            <p><strong>LOCAL GOVERNMENT:</strong> AFIKPO NORTH</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative also visited AMURO/MGBOM PRIMARY SCHOOL II,
              where similar donations were made. This initiative helps bridge the gap
              between students and the educational resources they need.
            </p>
          </Col>

          {/* COMMUNITY CENTRAL SCHOOL EZZAMA */}
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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ezza.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> JUNE</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> COMMUNITY CENTRAL SCHOOL EZZAMA</p>
            <p><strong>LOCAL GOVERNMENT:</strong> EZZA SOUTH</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              During the month of June, the initiative reached COMMUNITY CENTRAL SCHOOL
              EZZAMA, where students received study materials to support their learning.
            </p>
          </Col>

          {/* AMURO MGBOM COMMUNITY JSS */}
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
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/afik.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> JUNE</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> AMURO MGBOM COMMUNITY JSS</p>
            <p><strong>LOCAL GOVERNMENT:</strong> AFIKPO NORTH</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative concluded the month by donating to AMURO MGBOM
              COMMUNITY JSS. These contributions are aimed at fostering education and
              improving student performance in public schools.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default June;
