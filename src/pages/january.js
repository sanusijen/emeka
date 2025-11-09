import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function January() {


  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: "40px" }}>
        <div className="title-holder" style={{ color: "#0c71c3" }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: "#0c71c3" }}>EAI Events For January</div>
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p>MONTH: JANUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: DEMOCRACY ESTATE PRIMARY SCHOOL, ABAKALIKI</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited Democracy Estate Primary School, where the organization donated study materials to the students. These materials included pencils, textbooks, and notebooks. This initiative was carried out to support underprivileged children in public schools across Ebonyi State. Our donations are based on findings from a survey that revealed students in the school face challenges accessing study materials.
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
            <p>MONTH: JANUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: NKWEGU CPS, NKWAGU</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited Nkwegu CPS, Nkwagu, where the organization donated study materials to the students. The donated items included pencils, textbooks, and notebooks. This effort aims to support less privileged children in public schools across Ebonyi State. Our action is based on a survey that showed students struggle with access to study materials.
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/cen.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p>MONTH: JANUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: CENTRAL URBAN PRIMARY SCHOOL I, ABAKALIKI</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited Central Urban Primary School I, Abakaliki, where the organization donated study materials such as pencils, textbooks, and notebooks to the students. This is part of our effort to assist underprivileged children in public schools across Ebonyi State. Our donations are informed by a survey that revealed significant difficulties students face in obtaining essential learning materials.
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
            <p>MONTH: JANUARY</p>
            <p>YEAR: 2025</p>
            <p>SCHOOL NAME: PRISON SPECIAL SECONDARY SCHOOL, ABAKALIKI</p>
            <p>LOCAL GOVERNMENT: ABAKALIKI</p>
            <p>STATE: EBONYI</p>
            <p>DONATION TYPE: TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited Prison Special Secondary School, Abakaliki, and donated study materials to the students. These included pencils, textbooks, and notebooks. This effort is aimed at supporting underprivileged students in public schools throughout Ebonyi State. Our initiative is guided by a survey which revealed that many students face challenges accessing study materials.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default January;
