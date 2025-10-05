import React, { useRef } from 'react';
import "./About.css";
import m1 from "../../assets/m1.jpeg";
import m2 from "../../assets/m2.jpeg";
import m3 from "../../assets/m3.jpeg";
import about_image from "../../assets/about-image.jpeg"; // ✅ fixed variable name
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    if (!container.current) return; // ✅ safety check
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });

    timeline
      .from(".company__photo", { x: -50, opacity: 0, duration: 0.8 })
      .from(".title", { y: -50, opacity: 0, duration: 0.6 })
      .from(".sub__title", { y: -50, opacity: 0, duration: 0.6 })
      .from(".box", { x: -50, opacity: 0, stagger: 0.3 })
      .from(".description", { y: -50, opacity: 0, duration: 0.6 })
      .from(".group", { y: -50, opacity: 0, duration: 0.6 })
      .from(".buttons__container", { y: -50, opacity: 0, duration: 0.6 });
  }, { scope: container });

  return (
    <section id='about'>
      <div className='container' ref={container}>
        <div className='column company__photo'>
          <img src={about_image} alt='International New Arts and Sciences Research Journal' />
        </div>

        <div className='column'>
          <h1 className='title'>
            <span className='g-text'>About Us</span>
          </h1>

          <h3 className='sub__title'>
            Realizing visions through fundamental focus.
          </h3>

          <div className='company__media__container'>
            <div className='box'>
              <img src={m1} alt='Research Publication' />
            </div>
            <div className='box'>
              <img src={m2} alt='Academic Excellence' />
            </div>
            <div className='box'>
              <img src={m3} alt='Global Reach' />
            </div>
          </div>

          <p className='text__muted description'>
            International New Arts and Sciences Research Journal is a worldwide-based publisher,
            publishing peer-reviewed open-access models with innovative approaches to address
            challenges in the scholarly publishing system globally.
          </p>

          <p className='text__muted description'>
            This multidisciplinary research journal provides an avenue for academics, teachers,
            postgraduate students, and practitioners to publish current and significant research
            papers in all fields of science, arts, and technology.
          </p>

          <div className='group'>
            {[
              { label: "Publication", title: "Peer-Reviewed" },
              { label: "Access", title: "Open Access" },
              { label: "Research", title: "Multidisciplinary" },
              { label: "Recognition", title: "Worldwide" },
            ].map((item, index) => (
              <div className='row' key={index}>
                <div className='icon__container'>
                  <FaCheck />
                </div>
                <div className='details'>
                  <p className="text__muted">{item.label}</p>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className='buttons__container'>
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn__primary">Get a quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
