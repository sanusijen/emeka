import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function October() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: "40px" }}>
        <div className="title-holder" style={{ color: "#0c71c3" }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: "#0c71c3" }}>
            EAI Events For October
          </div>
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
              <source
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/isha.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p>MONTH: OCTOBER</p>
            <p>YEAR: 2024</p>
            <p>SCHOOL NAME: ISHIAGU CENTRAL SCHOOL ISHIAGU</p>
            <p>LOCAL GOVERNMENT: IVO</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited ISHIAGU CENTRAL SCHOOL ISHIAGU, where the organization donated study materials to the students. The materials ranged from pencils, textbooks, to notebooks. All this was done in an effort to help the less privileged ones in public schools across Ebonyi State. Our donations are in line with our survey regarding student performance, where we realized that students face challenges with study materials.
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
              <source
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ik.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p>MONTH: OCTOBER</p>
            <p>YEAR: 2024</p>
            <p>SCHOOL NAME: AMASIRI JSS AMASIRI</p>
            <p>LOCAL GOVERNMENT: AFIKPO NORTH</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited AMASIRI JSS AMASIRI, where the organization donated study materials to the students. The materials ranged from pencils, textbooks, to notebooks. This initiative was part of our efforts to support less privileged students in public schools across Ebonyi State, based on our survey findings about their academic challenges.
            </p>
          </Col>

          {/* Third Event */}
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
              <source
                src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/is.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p>MONTH: OCTOBER</p>
            <p>YEAR: 2024</p>
            <p>SCHOOL NAME: ISHIAGU HIGH JSS ISHIAGU</p>
            <p>LOCAL GOVERNMENT: IVO</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited ISHIAGU HIGH JSS ISHIAGU, where the organization donated study materials to the students. These included pencils, textbooks, and notebooks. This outreach is part of our effort to address the learning material needs faced by underprivileged students, as revealed in our statewide survey.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default October;
