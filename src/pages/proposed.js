import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import rehabroof from '../assets/images/rehabroof.jpg';
import ugwu from '../assets/images/ugwu.jpg';

function Proposed() {
  return (
    <div>
    <section id="about" className="block about-block">
      <Container fluid style={{marginTop:"40px"}}>
        <div className="title-holder" style={{color:"#0c71c3"}}>
          <h2>Our Proposed Projects</h2>
          <div style={{ textAlign: "center", paddingBottom: "10px" }}>
          <p style={{ color: "#6D737A", fontWeight: "bold", fontSize: "16px" }}>
          Our proposed projects focus on empowering public schools and students by providing essential Study materials, including textbooks, writing supplies, and other learning resources. We also plan to support teachers to improve the quality of education delivered in the classroom. In addition, we aim to rehabilitate dilapidated school structures, creating a more conducive and safe learning environment. Through these targeted interventions, EAI seeks to promote equal access to quality education and inspire academic success among students from disadvantaged backgrounds.
          </p>
        </div>
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
  <source src="https://emekaanyimude.s3.eu-north-1.amazonaws.com/pres1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </Col>
          <Col sm={6}>
          <p>SCHOOL NAME : PRESCO SECONDARY SCHOOL , ABAKALIKI </p>
          <p>LOCAL GOVERNMENT:ABAKALIKI</p>
          <p>STATE:EBONYI</p>
          <p>CONDITION:Dillapitated Roof </p>
          <p>PROPOSED PROJECT: Roof Renovation </p>
          <p>Presco Secondary School, located in Ebonyi State, is currently facing severe infrastructural challenges, with one of the most pressing issues being its dilapidated classroom roofs. These damaged roofs pose a serious threat to the safety and learning experience of students and teachers, especially during the rainy season, when classes are often disrupted or relocated due to water leakage and unsafe conditions.
Recognizing the urgent need for intervention, the Emeka Anyimude Initiative (EAI) has identified Presco Secondary School as a priority in its ongoing mission to improve educational infrastructure across the state. As part of our proposed projects, EAI is committed to renovating the school’s classroom roofs to provide a safer, more conducive learning environment. This renovation will include replacing damaged roofing sheets, reinforcing roof structures, and ensuring proper drainage to prevent future deterioration.
Through this project, EAI aims not only to restore the physical integrity of the school but also to boost student morale, encourage school attendance, and promote academic excellence in a safer and more dignified setting.
 </p>
          </Col>
          <Col sm={6} style={{marginTop:'10px'}}>
          <Col sm={6} style={{
    width: "100%",
    height: "500px",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    objectFit: "cover",
  }}
>
            <    Image src={rehabroof}  />
          </Col>

          </Col>
          <Col sm={6}>
          <p>SCHOOL NAME :ISHIAGU HIGH SCHOOL </p>
          <p>LOCAL GOVERNMENT:IVO</p>
          <p>STATE:EBONYI</p>
          <p>CONDITION:Dillapitated Roof </p>
          <p>PROPOSED PROJECT: Roof Renovation </p>
          <p>ISHIAGU HIGH SCHOOL, located in Ebonyi State, is currently facing severe infrastructural challenges, with one of the most pressing issues being its dilapidated classroom roofs. These damaged roofs pose a serious threat to the safety and learning experience of students and teachers, especially during the rainy season, when classes are often disrupted or relocated due to water leakage and unsafe conditions.
Recognizing the urgent need for intervention, the Emeka Anyimude Initiative (EAI) has identified Ishiagu High School as a priority in its ongoing mission to improve educational infrastructure across the state. As part of our proposed projects, EAI is committed to renovating the school’s classroom roofs to provide a safer, more conducive learning environment. This renovation will include replacing damaged roofing sheets, reinforcing roof structures, and ensuring proper drainage to prevent future deterioration.
Through this project, EAI aims not only to restore the physical integrity of the school but also to boost student morale, encourage school attendance, and promote academic excellence in a safer and more dignified setting.
 </p>
      
          </Col >

          <Col sm={6} style={{marginTop:'10px'}}
    
>
            <    Image src={ugwu}  />
          </Col>
          <Col sm={6}>
     
          <p>SCHOOL NAME : UGWU JUNIOR SECONDARY SCHOOL </p>
          <p>LOCAL GOVERNMENT: OHAOZARA</p>
          <p>STATE:EBONYI</p>
          <p>CONDITION: Dillapitated Roof </p>
          <p>PROPOSED PROJECT: Roof Renovation </p>
          <p>UGWU JUNIOR SECONDARY SCHOOL, located in Ebonyi State, is currently facing severe infrastructural challenges, with one of the most pressing issues being its dilapidated classroom roofs. These damaged roofs pose a serious threat to the safety and learning experience of students and teachers, especially during the rainy season, when classes are often disrupted or relocated due to water leakage and unsafe conditions.
Recognizing the urgent need for intervention, the Emeka Anyimude Initiative (EAI) has identified ugwu junior secondary school as a priority in its ongoing mission to improve educational infrastructure across the state. As part of our proposed projects, EAI is committed to renovating the school’s classroom roofs to provide a safer, more conducive learning environment. This renovation will include replacing damaged roofing sheets, reinforcing roof structures, and ensuring proper drainage to prevent future deterioration.
Through this project, EAI aims not only to restore the physical integrity of the school but also to boost student morale, encourage school attendance, and promote academic excellence in a safer and more dignified setting.
 </p>
          </Col>
        </Row>
      </Container>
    </section>

        
    </div>
  );
}

export default Proposed;
