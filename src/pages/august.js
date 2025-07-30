import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function August() {
  return (
    <section id="about" className="block about-block">
      <Container fluid style={{ marginTop: '40px' }}>
        <div className="title-holder" style={{ color: '#0c71c3' }}>
          <h2>Events Of The Month</h2>
          <div className="subtitle" style={{ color: '#0c71c3' }}>EAI Events For August</div>
        </div>
        <Row>
          {/* Event 1 */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ezillo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> AUGUST</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> CENTRAL SCHOOL EZILLO</p>
            <p><strong>LOCAL GOVERNMENT:</strong> ISHIELU</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited CENTRAL SCHOOL EZILLO, where the organization donated study materials to the students. These included pencils, textbooks, and notebooks. 
              This effort was part of our mission to support underprivileged students in public schools across Ebonyi State. Our donations were informed by a survey that showed many students lacked basic learning materials.
            </p>
          </Col>

          {/* Event 2 */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/izia.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> AUGUST</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> IZHIA GIRLS JSS</p>
            <p><strong>LOCAL GOVERNMENT:</strong> OHAUKWU</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited IZHIA GIRLS JSS to donate essential study materials such as pencils, textbooks, and notebooks. 
              This donation was made to assist disadvantaged students based on our research, which identified a shortage of educational materials as a barrier to learning.
            </p>
          </Col>

          {/* Event 3 */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/ish.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> SEPTEMBER</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> GIRLS JUNIOR HIGH SCHOOL EZILLO</p>
            <p><strong>LOCAL GOVERNMENT:</strong> ISHIELU</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited GIRLS JUNIOR HIGH SCHOOL EZILLO, donating various study materials including pencils, textbooks, and notebooks. 
              These contributions support our mission to uplift educational standards among underprivileged students in Ebonyi State.
            </p>
          </Col>

          {/* Event 4 */}
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
              <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/nsu.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col sm={6}>
            <p><strong>MONTH:</strong> SEPTEMBER</p>
            <p><strong>YEAR:</strong> 2024</p>
            <p><strong>SCHOOL NAME:</strong> NSULAKPA PRIMARY SCHOOL EZZANGBO</p>
            <p><strong>LOCAL GOVERNMENT:</strong> OHAUKWU</p>
            <p><strong>STATE:</strong> EBONYI</p>
            <p><strong>DONATION TYPE:</strong> TEXTBOOKS</p>
            <p>
              The Emeka Anyimude Initiative visited NSULAKPA PRIMARY SCHOOL EZZANGBO to distribute study materials like textbooks, notebooks, and pencils. 
              The goal is to bridge the resource gap in public schools, especially for students struggling without adequate learning tools.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default August;
