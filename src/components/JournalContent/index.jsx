import React, { useRef } from "react";
import "./JournalContent.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NASRJContent = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      ".page-header-section",
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        ".journal-content-section",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .from(".content-block", { opacity: 0, y: 25, stagger: 0.15 }, "-=0.4");
  }, { scope: container });

  return (
    <section id="journal-content" ref={container}>
      {/* Header */}
      {/* Page Title Header */}
<div className="page-header-section">
  <div className="container">
    <div className="page-header-content">
      <h1 className="page-title">
        International New Arts and Sciences Research Journal (NASRJ)
      </h1>
      <div className="page-title-divider"></div>
    </div>
  </div>
</div>


      {/* Main Content */}
      <div className="container">
        <div className="journal-content-section">

          <div className="content-block">
            <p>
              The <strong>International New Arts and Sciences Research Journal (NASRJ)</strong>
              is a multidisciplinary research journal published once a year in the English language.
              It provides an avenue for academics, postgraduate students, and practitioners to publish
              current and significant research papers and scholarly activities.
            </p>
            <p>
              NASRJ encourages submissions from all disciplines, including research papers, book reviews,
              and innovative ideas aimed at improving academic publishing.
            </p>
          </div>

          <div className="content-block">
            <h3>Mission</h3>
            <p>
              The mission of the journal is to provide academics, university teachers, and postgraduate
              students leading to Ph.D. degrees with opportunities to publish current and significant
              research as well as scholarly publication activities.
            </p>
            <p>
              The journal accepts research articles in all areas of higher education. Submission deadlines apply.
            </p>
          </div>

          <div className="content-block">
            <h3>Aim</h3>
            <p>
              NASRJ aims to publish double-blind peer-reviewed research in science, arts, and technology
              based on originality, importance, interdisciplinary interest, timeliness, accessibility,
              elegance, and innovative conclusions.
            </p>
            <p>
              The journal highlights changes in higher education and society and provides a reliable,
              cost-effective publishing solution for global readers.
            </p>
          </div>

          <div className="content-block">
            <h3>Objectives</h3>
            <ul className="objectives-list">
              <li className="objective-item">To be recognized worldwide</li>
              <li className="objective-item">Stimulate young researchers</li>
              <li className="objective-item">Publish high-quality research papers</li>
              <li className="objective-item">Publish original, innovative, and novel research</li>
              <li className="objective-item">Stimulate academic research writing</li>
              <li className="objective-item">Ensure global recognition of published research</li>
              <li className="objective-item">Encourage participation in international conferences</li>
            </ul>
          </div>

          <div className="content-block">
            <h3>Policy and Procedures</h3>
            <ol className="numbered-list">
              <li>The views expressed are those of the authors and do not necessarily reflect the journal.</li>
              <li>Manuscripts should be typed, double-spaced, preferably as a Word document and emailed to: <strong>albahith45@yahoo.com</strong></li>
              <li>All submitted materials become the property of the journal.</li>
              <li>The journal covers printing and external examiner expenses only.</li>
              <li>Accepted papers require approval by at least two examiners.</li>
              <li>Papers must be between 10 and 15 pages including references.</li>
              <li>The first edition appeared during the academic year 2015/2016.</li>
              <li>NASRJ is a yearly, multidisciplinary international journal.</li>
              <li>All editions are archived at the American-Arabic Association, Illinois, Chicago.</li>
            </ol>
          </div>

          <div className="content-block">
            <h3>Submissions</h3>
            <p>
              All articles undergo a double-blind peer-review process. Manuscripts are welcomed from
              academicians, researchers, and practitioners. Conference papers are accepted with significant
              revisions and proper citation.
            </p>
          </div>

          <div className="content-block">
            <h3>Guidelines for Manuscript Preparation</h3>
            <ol className="numbered-list">
              <li>Font size 12, Times New Roman.</li>
              <li>Single-spaced throughout with no extra paragraph spacing.</li>
              <li>Margins: 1.5 inches on all sides.</li>
              <li>Include at least two keywords below the abstract.</li>
              <li>Use endnotes instead of footnotes.</li>
              <li>Insert tables and figures within the text.</li>
              <li>Long tables and figures should be placed in the appendix.</li>
              <li>Provide a short author bio at the end.</li>
              <li>Submit a single Word file only.</li>
            </ol>
          </div>

          <div className="content-block">
            <h3>Publication Criteria</h3>
            <ol className="numbered-list">
              <li>Clear, correct, and unambiguous English.</li>
              <li>Proper justification for replicated or similar studies.</li>
              <li>No copyright infringement of third-party material.</li>
            </ol>
          </div>

          <div className="content-block editor-section">
            <h3>Editor-in-Chief</h3>
            <p><strong>Prof. Mahmoud F. Al-Ali</strong></p>
            <p>Chicago, IL, USA</p>
            <p>Phone: 1-847-637-7826</p>
            <p>Email: albahith45@yahoo.com | albahithmedical@yahoo.com</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NASRJContent;
