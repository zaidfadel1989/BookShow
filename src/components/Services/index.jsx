// src/components/Services/index.jsx
import React, { useRef } from "react";
import "./Services.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import subImage from "../../assets/building-10.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
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
      .from(".guidelines-section", { y: 50, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".publication-criteria-section", { y: 50, opacity: 0, duration: 0.6 }, "-=0.4");
  }, { scope: container });

  return (
    <section id="services" ref={container}>
      <div className="container">
        {/* Submission Image with Text Overlay */}
        <div className='submission__image-container'>
          <img src={subImage} alt="Submissions Process" className="submission__image" />
          <div className='submission__content'>
            <div className='submission__text'>
              <h1 className='title'>Submissions</h1>
              <div className='title-divider'></div>
              <p className='sub__title'>
                All articles are subjected to a double blind peer-review process. Manuscripts are invited from academicians, researchers, and practitioners for publication consideration in all areas. We will also consider work that has been presented at conferences (significant changes must be made before submission to the journal and proper citation of the conference paper is required).
              </p>
            </div>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="guidelines-section">
          <h2 className="guidelines-title">Guidelines for manuscript preparation</h2>
          <div className="guidelines-list">
            <div className="guideline-item">
              <span className="guideline-number">1</span>
              <p className="guideline-text">Font size should be 12 times new roman including the title page except for the table numbers which can be smaller to fit the page. Country, email address/es, contact numbers of the authors.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">2</span>
              <p className="guideline-text">The paragraphs for the entire manuscript is typed using single spacing(including title page, references, and author bio profile). There should be no spaces in between paragraphs. A space is only placed in between headings.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">3</span>
              <p className="guideline-text">The left and right margins are 1.5 inches. Top and down margins are 1.5 inches.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">4</span>
              <p className="guideline-text">Provide 2 or more keywords below the abstract.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">5</span>
              <p className="guideline-text">Using footnotes: reconstruct the footnotes as end notes found at the end of the manuscript.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">6</span>
              <p className="guideline-text">Tables and figures are interjected in the text where they are supposed to be found. Tables and figures should fit in a portrait format (not landscape).</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">7</span>
              <p className="guideline-text">Tables and figures should fit one page of manuscript in portrait format (not landscape) if the tables and figures are long, place them in the appendix. If the text is enough to illustrate the results, no need to report tables and figures.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">8</span>
              <p className="guideline-text">Provide one paragraph (3 to 4 sentences) bio profile for each author placed at the end of manuscript. Indicate the institutional affiliation, country, and email address.</p>
            </div>
            <div className="guideline-item">
              <span className="guideline-number">9</span>
              <p className="guideline-text">Submit the manuscript as a single word file. Do not separate the manuscript into several files. Articles are accepted in manuscript word format only.</p>
            </div>
          </div>
        </div>

        {/* Publication Criteria Section */}
        <div className="publication-criteria-section">
          <h2 className="publication-criteria-title">Publication Criteria</h2>
          <div className="publication-criteria-list">
            <div className="criteria-item">
              <span className="criteria-number">1</span>
              <p className="criteria-text">English quality: the language in submitted articles must be clear, correct, and unambiguous.</p>
            </div>
            <div className="criteria-item">
              <span className="criteria-number">2</span>
              <p className="criteria-text">If a submitted study replicates or is very similar to previous work, authors must provide a sound scientific rationale for the submitted work and clearly reference and discuss the existing literature.</p>
            </div>
            <div className="criteria-item">
              <span className="criteria-number">3</span>
              <p className="criteria-text">It is compulsory for the authors to ensure that no material submitted as part of a manuscript infringes existing copyrights, or the rights of a third party.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;