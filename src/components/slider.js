import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    title: "Course 1",
    description: " ",
    image: require('../assets/images/ggs.jpg'), // Fixed path
  },
  {
    title: "Course 2",
    name: "Amos John",
    school: "Success Academy Jahi",
    description: "",
    image: require('../assets/images/sit.jpg'),
  },
  {
    title: "Course 3",
    name: "Maryam Asuku",
    school: "Greight Heights Academy",
    description: "",
    image: require('../assets/images/slid1.jpg'),
  },
  {
    title: "Course 4",
    name: "John Faruk",
    school: "Sheik Abubakar Gumi",
    description: "",
    image: require('../assets/images/hero4.jpeg'),
  },
  {
    title: "Course 5",
    name: "John Faruk",
    school: "Sheik Abubakar Gumi",
    description: "",
    image: require('../assets/images/hero2.jpeg'),
  },
];

const Card = ({ course }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
        margin: "10px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={course.image}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        alt={course.title}
      />
      
     
      <p style={{ color: "#6D737A", fontSize: "14px", padding: "5px" }}>
        {course.description}
      </p>
    </div>
  );
};

const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards in a row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 cards on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 cards on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      style={{ width: "100%", backgroundColor: "white", padding: "30px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px" }}>
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>
            Educational revolution{" "}
            <span style={{color:"#0c71c3"}}>
              through empowering schools and student for better studies
            </span>
          </h1>
          <p style={{ color: "#6D737A", fontWeight: "bold", fontSize: "16px" }}>
       EAI educational revolution goal is to empower the less previllege children in our dear ebonyi state by empowering schools and student with necceassry teaching and study materials ranging from training, study materials.
          </p>
        </div>
        <Slider {...settings}>
          {courses.map((course, i) => (
            <div key={i}>
              <Card course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;