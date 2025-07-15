import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/sitd.jpg'),
    time: '19 March 2025',
    title: 'Donation to Urban Community Primary School',
    description: 'The Emeka Anyimude Initiative visited Urban Community Primary School where the organization donated seats to teachers so as to ehance teaching activities.',
    link: '/march'
  },
  {
    id: 2,
    image: require('../assets/images/do.jpg'),
    time: '10 FEB 2025',
    title: 'Donation to Community Junior Secondary Umuoghara school',
    description: 'The Emeka Anyimude Initiative visited Community Junior Secondary Umuoghara school donations of Study materials were made through its representative.',
    link: '/febuary'
  },
  {
    id: 3,
    image: require('../assets/images/dm.jpg'),
    time: '21 JANUARY 2025',
    title: 'Donation to Democracy primary school',
    description: 'The Emeka Anyimude Initiative visited Democracy Estate PrimarySchool where the organization donated Study materials to the student.',
    link: '/january'
  }
]

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Recent News</h2>
          <div className="subtitle">get latest news regarding our programs</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;