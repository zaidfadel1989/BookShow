import React, { useRef } from "react";
import "./JournalContent.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const JournalContent = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ delay: 0.5 });
    timeline
      .fromTo(
        ".page-header-section",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(
        ".journal-content-section",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .from(".welcome-section", { opacity: 0, x: -30, duration: 0.6 }, "-=0.4")
      .from(".about-section", { opacity: 0, x: 30, duration: 0.6 }, "-=0.4");
  }, { scope: container });

  return (
    <section id="journal-content" ref={container}>
      {/* Blue Header Section - Now at the very top */}
      <div className="page-header-section">
        <div className="container">
          <div className="page-header-content">
            <h1 className="main-title">Inasrjournal Academic Research</h1>
            <p className="title-subtitle">Advancing Knowledge Through Scholarly Excellence and Innovative Research Publications</p>
            <div className="title-divider"></div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container">
        <div className="journal-content-section">
          <div className="journal-content-row">
            {/* Welcome & Objectives Section */}
            <div className="journal-column">
              <div className="welcome-section">
                <h2>Welcome to Inasrjournal</h2>
                <div className="objectives-container">
                  <h3>Objectives</h3>
                  <ul className="objectives-list">
                    <li className="objective-item">To be recognized World Wide</li>
                    <li className="objective-item">Stimulate young researcher</li>
                    <li className="objective-item">To publish high-quality research papers</li>
                    <li className="objective-item">To publish original innovative and novel research articles</li>
                    <li className="objective-item">To stimulate teachers streams research writing</li>
                    <li className="objective-item">Research articles are recognized worldwide</li>
                    <li className="objective-item">Attending conferences in different fields</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* About & Mission Section */}
            <div className="journal-column">
              <div className="about-section">
                <div className="about-header">
                  <h2>About Inasrjournal Magazine</h2>
                </div>
                <div className="mission-container">
                  <h3>Mission</h3>
                  <div className="mission-content">
                    <p>
                      The mission of teachers of universities streams research journal published once a year in English Language, 
                      is provides for academics, university's teachers, postgraduate students leading to the Ph.D degree, to publish 
                      current and significant researches as well as publication activities.
                    </p>
                    <p>
                      The journal accepts research articles on any areas of higher education. There is deadline for article submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalContent;