import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function March() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: "40px" }}>
        <div className="title-holder" style={{ color: "#0c71c3" }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: "#0c71c3" }}>EAI Events For March</div>
        </div>
        <Row>
          {/* FIRST SCHOOL */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ur.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> MARCH</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong> URBAN COMMUNITY JUNIOR SEC SCHOOL NDUFU ECHARA</p>
            <p><strong>LOCAL GOVERNMENT:</strong> IKWO</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited URBAN COMMUNITY JUNIOR SEC SCHOOL II NDUFU ECHARA where the organization donated study materials to the students of the school. The materials ranged from pencils, textbooks, and notebooks. This was done in an effort to help the less privileged in public schools across Ebonyi State. Our donations followed a survey that revealed that students face challenges with study materials.
            </p>
          </Col>

          {/* SECOND SCHOOL */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/urban.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> MARCH</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong> URBAN COMMUNITY PRIMARY SCHOOL I NDUFU ECHARA</p>
            <p><strong>LOCAL GOVERNMENT:</strong> IKWO</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited URBAN COMMUNITY PRIMARY SCHOOL I NDUFU ECHARA where the organization donated study materials to the students. The materials included pencils, textbooks, and notebooks. This effort supports less privileged students in Ebonyi State, following our research on educational challenges in the region.
            </p>
          </Col>

          {/* THIRD SCHOOL */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/urban.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> MARCH</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong> URBAN COMMUNITY PRIMARY SCHOOL II NDUFU ECHARA</p>
            <p><strong>LOCAL GOVERNMENT:</strong> IKWO</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited URBAN COMMUNITY PRIMARY SCHOOL II NDUFU ECHARA where the organization donated study materials such as pencils, textbooks, and notebooks. This outreach supports students in public schools facing educational material shortages across Ebonyi State.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default March;
