import React, { useRef } from 'react'
import "./Project.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

import Slider from "react-slick"

const Project = () => {
  const container = useRef(null)
  
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      }
    })
    
    timeline
      .from(".title", {y: -50, opacity: 0})
      .from(".sub__title", {y: -50, opacity: 0})
      .fromTo(".slick-slide", {x: 100, opacity: 0}, {opacity: 1, stagger: .5, x: 0})
  }, {scope: container})

  // Custom Next Arrow Component
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "-45px", zIndex: 1 }}
        onClick={onClick}
      >
        <FaChevronRight style={{ color: "#4a90e2", fontSize: "2rem" }} />
      </div>
    );
  }

  // Custom Previous Arrow Component
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "-45px", zIndex: 1 }}
        onClick={onClick}
      >
        <FaChevronLeft style={{ color: "#4a90e2", fontSize: "2rem" }} />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 1000, // Changed from 3000 to 1000 for smoother transition
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '20px',
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000, // Changed from 2000 to 3000
    nextArrow: <SampleNextArrow />, // Added custom next arrow
    prevArrow: <SamplePrevArrow />, // Added custom prev arrow
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '15px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        }
      }
    ]
  };

  return (
    <section id='project' ref={container}>
      {/* <div className='project__top'>
        <h1 className='title'>Our<span className='g-text'> Projects</span></h1>
        <h3 className='sub__title'>Innovative construction projects, exceptional craftsmanship.</h3>
      </div> */}
      
      <Slider {...settings} className='projects__container'>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className='project__card'>
              <div className='image__container'>
                <img src={project.image} alt={project.title} />
              </div>
              <div className='box'>
                <h1 className='name'>{project.title}</h1>
              </div>
              <div className='details'>
                <h3 className='name'>{project.title}</h3>
                <p className='text__muted description'>{project.description}</p>
                <button className='btn'>Read more</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </section>
  )
}

export default Project