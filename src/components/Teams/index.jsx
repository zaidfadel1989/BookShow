import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./style.css";

const Teams = () => {
  const container = useRef(null);

  useEffect(() => {
    const cards = container.current.querySelectorAll(".team-card");
    const header = container.current.querySelector(".team-header");

    // Animate header
    gsap.from(header, {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate cards with proper stagger and initial opacity
    gsap.set(cards, { opacity: 0, y: 40 }); // Ensure initial state
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="team-page" ref={container} id="team">
  <div className="team-header">
    <h1>Editorial & Management Team</h1>
    <p>International New Arts and Sciences Research Journal (NASRJ)</p>
  </div>

      <div className="team-container">
        <div className="team-card">
          <h3>Prof. Mahmoud F. Al-Ali</h3>
          <span className="role">Editor-in-Chief</span>
          <p>Professor with extensive experience in academic publishing and international research leadership. Oversees editorial policy and peer-review standards.</p>
          <p className="contact">Chicago, IL, USA<br />albahith45@yahoo.com</p>
        </div>

        <div className="team-card">
          <h3>Dr. Ahmed Hassan</h3>
          <span className="role">Associate Editor</span>
          <p>Specialist in interdisciplinary research and peer-review coordination ensuring publication quality.</p>
          <p className="contact">USA<br />editor@nasrjournal.org</p>
        </div>

        <div className="team-card">
          <h3>Dr. Sarah M. Collins</h3>
          <span className="role">Managing Editor</span>
          <p>Handles manuscript workflow, author communication, and publication scheduling.</p>
          <p className="contact">United Kingdom<br />managing@nasrjournal.org</p>
        </div>

        {/* <div className="team-card">
          <h3>Dr. Ali R. Mahmoud</h3>
          <span className="role">Technical & Review Coordinator</span>
          <p>Oversees technical formatting, peer-review systems, and publication operations.</p>
          <p className="contact">Middle East<br />review@nasrjournal.org</p>
        </div> */}
      </div>
    </section>
  );
};

export default Teams;
