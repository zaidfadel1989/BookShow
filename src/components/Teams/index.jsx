// In Teams.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Add this import
import "./Teams.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import publicationImage from "../../assets/Sub.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });
    
    timeline
      .from(".title", { y: -50, opacity: 0 })
      .from(".title-divider", { scale: 0, opacity: 0, duration: 0.6 })
      .from(".sub__title", { y: -50, opacity: 0 })
      .from(".journal-item", { y: 50, opacity: 0, stagger: 0.2, duration: 0.6 }, "-=0.4")
      .from(".featured-research-section", { y: 50, opacity: 0, duration: 0.8 }, "-=0.4");
  }, { scope: container });

  return (
    <section id="team" ref={container}>
      <div className="container">
        {/* Publication Image with Text Overlay */}
        <div className='submission__image-container'>
          <img src={publicationImage} alt="Publication" className="submission__image" />
          <div className='submission__content'>
            <div className='submission__text'>
              <h1 className='title'>Publication</h1>
              <div className='title-divider'></div>
              <p className='sub__title'>
                Explore groundbreaking studies across diverse fields of human knowledge in our annual scientific magazine.
              </p>
            </div>
          </div>
        </div>

        {/* Research Projects Section */}
        <div className="research-projects-section">
          <div className="section-header">
            <h2 className="section-title">Research Projects</h2>
            <p className="section-description">
              Explore various scientific research projects across multiple disciplines.
            </p>
            <div className="section-divider"></div>
          </div>
          
          {/* Two Journal Cards Side by Side */}
          <div className="journals-grid">
            <div className="journal-item">
              <div className="journal-header">
                <h3 className="journal-title">INTERNATIONAL NEW ARTS AND SCIENCES Research Journal</h3>
              </div>
              <div className="journal-details">
                <p className="journal-frequency">Frequency : Owner Year</p>
                <p className="journal-volume">Vol : Eight : No. 8,2020</p>
              </div>
              <div className="journal-editor">
                <p>Editor — in — Chief Professor Mahmoud F. Al-Ali (PhD)</p>
                <p>Chicago/ ILLINOIS — USA</p>
              </div>
            </div>

            <div className="journal-item">
              <div className="journal-header">
                <h3 className="journal-title">INTERNATIONAL NEW ARTS AND SCIENCES Research Journal</h3>
              </div>
              <div className="journal-details">
                <p className="journal-frequency">Frequency : Owner Year</p>
                <p className="journal-volume">Vol : Eight : No. 8,2020</p>
              </div>
              <div className="journal-editor">
                <p>Editor — in — Chief Professor Mahmoud F. Al-Ali (PhD)</p>
                <p>Chicago/ ILLINOIS — USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Research Section - Updated with Link */}
        <div className="featured-research-section">
          <div className="section-header">
            <h2 className="section-title">Featured Research</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="featured-research-content">
            <h3 className="research-title">
              Dramaturgy and Brecht's Political Theory in Die Mutter: The Mother
            </h3>
            <div className="research-description">
              <p>
                This groundbreaking research explores the intersection of dramaturgy and political theory 
                in Bertolt Brecht's seminal work "Die Mutter" (The Mother). The study delves into Brecht's 
                revolutionary approach to theater as a platform for social and political discourse.
              </p>
              <p>
                Through meticulous analysis of Brecht's epic theater techniques and their political 
                implications, this publication offers new insights into how theatrical performance 
                can serve as a catalyst for social change and political awareness.
              </p>
            </div>
            <div className="research-actions">
              <Link to="/publication2" className="read-research-btn">
                Read the research
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;