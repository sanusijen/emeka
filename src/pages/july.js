import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function July() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: "40px" }}>
        <div className="title-holder" style={{ color: "#0c71c3" }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: "#0c71c3" }}>EAI Events For July</div>
        </div>
        <Row>
          {/* First Event */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/pat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> JULY</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> PATRICKS PRIMARY SCHOOL I, KPIRIKPIRI ABAKALIKI</p>
            <p><strong>LOCAL GOVERNMENT:</strong> ABAKALIKI</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited PATRICKS PRIMARY SCHOOL I, KPIRIKPIRI ABAKALIKI, where the organization donated study materials to the students. The materials ranged from pencils, textbooks, to notebooks. This was done in an effort to support underprivileged students in public schools across Ebonyi State. Based on our survey regarding the academic performance of students, we discovered that many face challenges accessing essential study materials.
            </p>
          </Col>

          {/* Second Event */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/izz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> JULY</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> COMMUNITY JUNIOR SECONDARY SCHOOL ENYIGWE</p>
            <p><strong>LOCAL GOVERNMENT:</strong> IZZI</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited COMMUNITY JUNIOR SECONDARY SCHOOL ENYIGWE, where the organization donated study materials to the students. Items such as pencils, textbooks, and notebooks were provided. This initiative aims to assist less privileged students in public schools across Ebonyi State. Following our academic performance survey in the school, we identified a need for improved access to educational resources.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default July;
