import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

function May() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: "40px" }}>
        <div className="title-holder" style={{ color: "#0c71c3" }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: "#0c71c3" }}>EAI Events for May</div>
        </div>
        <Row>
          {/* PRESSCO SECONDARY SCHOOL */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ak.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> May</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong> Pressco Secondary School</p>
            <p><strong>LOCAL GOVERNMENT:</strong> Abakaliki</p>
            <p><strong>STATE:</strong> Ebonyi</p>
            <p><strong>DONATION TYPE:</strong> Textbooks</p>
            <p>
              The Emeka Anyimude Initiative visited Pressco Secondary School, where the organization donated study materials to students. The materials ranged from pencils and textbooks to notebooks. This was done in an effort to support less privileged students in public schools across Ebonyi State. Based on our survey regarding the academic performance of the students, we found that many face challenges due to a lack of study materials.
            </p>
          </Col>

          {/* UNITY HIGH SCHOOL */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/oni.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> May</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong> Unity High School</p>
            <p><strong>LOCAL GOVERNMENT:</strong> Onicha</p>
            <p><strong>STATE:</strong> Ebonyi</p>
            <p><strong>DONATION TYPE:</strong> Textbooks</p>
            <p>
              The Emeka Anyimude Initiative visited Unity High School, where the organization donated study materials to students. These materials included pencils, textbooks, and notebooks. This initiative supports underprivileged students in public schools across Ebonyi State. Our survey revealed that many students struggle due to the lack of basic study materials.
            </p>
          </Col>

          {/* AKAEZA COMMUNITY */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ak.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> May</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong>Akaeze Community Iyioji JSS Akaeze</p>
            <p><strong>LOCAL GOVERNMENT:</strong> Ivo</p>
            <p><strong>STATE:</strong> Ebonyi</p>
            <p><strong>DONATION TYPE:</strong> Textbooks</p>
            <p>
              The Emeka Anyimude Initiative visited Akaeza Community Iyioji JSS Akaeze and donated study materials including pencils, textbooks, and notebooks. This outreach is part of our mission to support disadvantaged students in public schools throughout Ebonyi State. Our survey indicated that a lack of study materials significantly hinders academic performance.
            </p>
          </Col>

          {/* EZZA ROAD SCHOOL II */}
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
              {/* No video source provided for this one */}
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> May</p>
            <p><strong>YEAR:</strong> 2025</p>
            <p><strong>SCHOOL NAME:</strong> Ezza Road School II, Abakaliki</p>
            <p><strong>LOCAL GOVERNMENT:</strong> Onicha</p>
            <p><strong>STATE:</strong> Ebonyi</p>
            <p><strong>DONATION TYPE:</strong> Textbooks</p>
            <p>
              The Emeka Anyimude Initiative visited Ezza Road School II, Abakaliki, and donated study materials such as pencils, textbooks, and notebooks. This program is part of our ongoing support for students in public schools across Ebonyi State. Based on our findings, many students face academic challenges due to the unavailability of basic educational supplies.
            </p>
          </Col>

          {/* OSHIRI CENTRAL SCHOOL */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/oshi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> May</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> Oshiiri Central School, Oshiiri</p>
            <p><strong>LOCAL GOVERNMENT:</strong> Onicha</p>
            <p><strong>STATE:</strong> Ebonyi</p>
            <p><strong>DONATION TYPE:</strong> Textbooks</p>
            <p>
              The Emeka Anyimude Initiative visited Oshiiri Central School, Oshiiri, and provided students with essential study materials such as pencils, textbooks, and notebooks. This act of support aligns with our mission to uplift students in public schools across Ebonyi State. Our survey findings revealed a strong need for learning materials, which directly affect student performance.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default May;
