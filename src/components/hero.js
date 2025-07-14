import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


const aims = [
  {
    id: 1,
    icon: 'fas fa-bullseye',
    title: 'Our Aim',
    description: 'To assist quality of education across rural areas  by donating study materials, renovating classrooms, and any other relevant assistance to underprivileged students, ensuring equal learning opportunities for all.'
  },
  {
    id: 2,
    icon: 'fas fa-puzzle-piece',
    title: 'Our Objectives',
    description: 'To improve learning environments, enhance access to quality education, and support underprivileged students through strategic donations, infrastructure upgrades.'
  },
  
 
]

var heroData = [
  {
    id: 1,
    image: require('../assets/images/ggs.jpg'),
    title: 'Emeka Anyimude Initiatives Donation to Government Girls Secondary School Ndulo  ',
    description: 'We are pleased to announce donation to Government Girls Secondary School Ndulo, Ndulo. This support will help provide essential learning materials, improve classroom facilities, and create a better learning environment for the pupils. The school community deeply appreciates this gesture, which reflects a strong commitment to education and youth development in the area!',
    link: '/about'
  },
  {
    id: 2,
    image: require('../assets/images/sit.jpg'),
    title: 'Emeka Anyimude Initiatives Donate seat  ',
    description: 'We are pleased to announce donation of seat to teachers. in the past teachers lack sit to relax on when EAI notice that it swing into action by providing sit this is part of the effort  strengthen education and youth development in the area!',
    link: '/about'
  },
  {
    id: 3,
    image: require('../assets/images/hero5.jpeg'),
    title: 'Emeka Anyimude Initiatives Donation to Community Junior Secondary School Umuoghara ',
    description: 'We are pleased to announce donation to Community Junior Secondary School Umuoghara. This support will help provide essential learning materials, improve classroom facilities, and create a better learning environment for the pupils. The school community deeply appreciates this gesture, which reflects a strong commitment to education and youth development in the area!',
    link: '/about'
  }
];

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-book-open',
    title: ' study Materials',
    description: 'Donated To Schools.'
  },
  {
    id: 2,
    icon: 'fas fa-graduation-cap',
    title: ' Proposed Projects',
    description: 'Proposed Projects.'
  },
  {
    id: 3,
    icon: 'fas fa-school',
    title: 'Schools',
    description: 'Schools Across Rural Areas.'
  },
  {
    id: 4,
    icon: 'fas fa-user-graduate',
    title: 'Students Reached',
    description: ' Students Reached.'
  },
 
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={"slide " + hero.id}
            />
            <Carousel.Caption>
              <h2>{hero.title}</h2>
              <p>{hero.description}</p>
              <a className="btn btn-primary" href={hero.link}>
                Learn More <i className="fas fa-chevron-right"></i>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

    
      <div className="title-holder" style={{marginTop:'20px',marginBottom:'20px', color:'#0c71c3', fontSize:"20px",fontWeight:"bold"}}>
          <h2>INITIATIVES</h2>
        </div>
  <Container fluid>
      <Row className="g-2"> {/* Bootstrap gutter spacing, smaller value = less space */}
  {servicesData.map((service) => (
    <Col
      sm={3}
      className="holder text-center"
      key={service.id}
      style={{
        color: '#0c71c3',
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0.5rem', // reduced padding
      }}
    >
      <div className="icon" style={{ fontSize: '28px', marginBottom: '20px' }}>
        <i className={service.icon}></i>
      </div>
      <h3 style={{ color: '#0c71c3', fontSize: '23px', fontWeight: 'bold', marginBottom: '4px' }}>
        {service.title}
      </h3>
      <p style={{ color: '#0c71c3', fontSize: '18px', fontWeight: 200, marginBottom: '0' }}>
        {service.description}
      </p>
    </Col>
  ))}
</Row>


      </Container>

      < div className='obj' style={{background:'#0c71c3'}}>
        <div className="title-holder"style={{padding:"10px", color: 'white',}}>
          <h2>EDUCATION</h2>
          <div className="subtitle"style={{color: 'white',}}>we just want to help</div>
        </div>
        <Row>
          {
            aims.map(objectives => {
              return (
                <Col sm={6} className='holder' key={objectives.id} 
                style={{padding:'10px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <div className="icon" style={{ fontSize: '50px', marginBottom: '10px', borderRadius:"30px"}}>
                    <i className={objectives.icon}></i>
                  </div>
                  <h3>{objectives.title}</h3>
                  <p>{objectives.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </div>
    </section>
  );
}

export default AppHero;
