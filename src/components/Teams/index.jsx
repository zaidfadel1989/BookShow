import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./style.css";

const Teams = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header elements separately for better staging
      gsap.from(".team-header h1", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      });
      
      gsap.from(".team-header p", {
        opacity: 0,
        y: -10,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      // Animate cards with proper stagger and initial state
      gsap.from(".team-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "back.out(1.2)",
        delay: 0.4,
      });
    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  const teamMembers = [
    {
      name: "Prof. Mahmoud F. Al-Ali",
      role: "Editor-in-Chief",
      description: "Professor with extensive experience in academic publishing and international research leadership. Oversees editorial policy and peer-review standards.",
      location: "Chicago, IL, USA",
      email: "albahith45@yahoo.com",
      accentColor: "#2563eb"
    }
  ];

  return (
    <section className="team-page" ref={container} id="team">
      <div className="team-header">
        <h1>Editorial & Management Team</h1>
        <p>International New Arts and Sciences Research Journal (NASRJ)</p>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div 
            className="team-card" 
            key={index}
            style={{ '--accent-color': member.accentColor }}
          >
            <div className="card-header">
              <h3>{member.name}</h3>
              <span className="role">
                <span className="role-icon">⚡</span>
                {member.role}
              </span>
            </div>
            
            <p className="description">{member.description}</p>
            
            <div className="card-footer">
              <div className="contact-info">
                <div className="location">
                  <span className="icon">📍</span>
                  <span>{member.location}</span>
                </div>
                <div className="email">
                  <span className="icon">✉️</span>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;