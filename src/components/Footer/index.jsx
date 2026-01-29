import React, { useState } from "react";
import "./Footer.css";

// Import the images
import ll1 from "../../assets/Footer_imgs/ll1.jpeg";
import ll2 from "../../assets/Footer_imgs/ll2.jpeg";
import ll3 from "../../assets/Footer_imgs/ll3.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: ll1, alt: "Partner Logo 1" },
    { src: ll2, alt: "Partner Logo 2" },
    { src: ll3, alt: "Partner Logo 3" }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Add event listener for escape key
  React.useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <span>×</span>
            </button>
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="modal-image"
              />
              <div className="image-caption">{selectedImage.alt}</div>
            </div>
            <div className="modal-navigation">
              <button 
                className="nav-btn prev-btn" 
                onClick={() => {
                  const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                  const prevIndex = (currentIndex - 1 + images.length) % images.length;
                  setSelectedImage(images[prevIndex]);
                }}
              >
                ←
              </button>
              <div className="image-counter">
                {images.findIndex(img => img.src === selectedImage.src) + 1} / {images.length}
              </div>
              <button 
                className="nav-btn next-btn" 
                onClick={() => {
                  const currentIndex = images.findIndex(img => img.src === selectedImage.src);
                  const nextIndex = (currentIndex + 1) % images.length;
                  setSelectedImage(images[nextIndex]);
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="container">
            <div className="footer-content">
              {/* Brand Section */}
              <div className="footer-brand">
                <div className="brand-header">
                  <div className="brand-icon">📚</div>
                  <div className="brand-info">
                    <h2 className="brand-title">
                      International New Arts and Sciences Research Journal
                    </h2>
                    <p className="brand-subtitle">
                      A Peer-Reviewed Open Access Academic Journal
                    </p>
                  </div>
                </div>
                
                <div className="brand-description">
                  <p>
                    Dedicated to advancing interdisciplinary research in arts and sciences through 
                    rigorous peer-review, global scholarly collaboration, and open access publishing.
                  </p>
                </div>
                
                {/* Journal Highlights */}
                <div className="journal-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">⭐</span>
                    <div className="highlight-content">
                      <h4>High Impact</h4>
                      <p>Rigorous peer-review process</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌐</span>
                    <div className="highlight-content">
                      <h4>Global Reach</h4>
                      <p>International editorial board</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🔓</span>
                    <div className="highlight-content">
                      <h4>Open Access</h4>
                      <p>Free access to all research</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact & Submission Info */}
              <div className="footer-contact">
                <div className="contact-section">
                  <h3 className="section-title">Journal Information</h3>
                  <div className="contact-info">
                    <div className="contact-item">
                      <span className="contact-icon">📧</span>
                      <div className="contact-details">
                        <h4>Submissions</h4>
                        <p>submit@nasrjournal.org</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">📞</span>
                      <div className="contact-details">
                        <h4>Editorial Office</h4>
                        <p>+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <span className="contact-icon">🏢</span>
                      <div className="contact-details">
                        <h4>Publisher</h4>
                        <p>NASRJ Publications, Chicago, IL</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submission Timeline */}
                {/* <div className="timeline-section">
                  <h3 className="section-title">Publication Timeline</h3>
                  <div className="timeline">
                    <div className="timeline-step">
                      <div className="step-number">1</div>
                      <div className="step-info">
                        <h4>Submission</h4>
                        <p>Continuous</p>
                      </div>
                    </div>
                    <div className="timeline-step">
                      <div className="step-number">2</div>
                      <div className="step-info">
                        <h4>Review</h4>
                        <p>4-6 weeks</p>
                      </div>
                    </div>
                    <div className="timeline-step">
                      <div className="step-number">3</div>
                      <div className="step-info">
                        <h4>Publication</h4>
                        <p>Quarterly issues</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Indexing & Abstracting */}
            <div className="indexing-section">
              <h3 className="indexing-title">Indexed & Abstracted In</h3>
              <div className="indexing-partners">
                <div className="partner-logo">
                  <span className="partner-icon">📊</span>
                  <span className="partner-name">Google Scholar</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-icon">🏛️</span>
                  <span className="partner-name">Library of Congress</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-icon">🔗</span>
                  <span className="partner-name">CrossRef</span>
                </div>
                <div className="partner-logo">
                  <span className="partner-icon">📈</span>
                  <span className="partner-name">Thomson Reuters</span>
                </div>
              </div>
            </div>

            {/* Policies & Copyright */}
            <div className="policies-section">
              <div className="copyright-info">
                <div className="copyright-text">
                  <p>© {currentYear} International New Arts and Sciences Research Journal (NASRJ)</p>
                  <p>All rights reserved. ISSN: [To be assigned] | e-ISSN: [To be assigned]</p>
                </div>
                <div className="copyright-badges">
                  <span className="badge">Open Access</span>
                  <span className="badge">Peer Reviewed</span>
                  <span className="badge">Creative Commons</span>
                </div>
              </div>

              <div className="policies-links">
                <a href="/privacy-policy" className="policy-link">Privacy Policy</a>
                <a href="/terms" className="policy-link">Terms of Use</a>
                <a href="/ethics" className="policy-link">Publication Ethics</a>
                <a href="/copyright" className="policy-link">Copyright</a>
                <a href="/archiving" className="policy-link">Archiving Policy</a>
              </div>

              <div className="legal-disclaimer">
                <div className="disclaimer-icon">📝</div>
                <p className="disclaimer-text">
                  This journal follows the Committee on Publication Ethics (COPE) guidelines. 
                  All submissions undergo rigorous double-blind peer review. Published under 
                  Creative Commons Attribution 4.0 International License.
                </p>
              </div>
            </div>

            {/* Image Gallery Section with Click to Enlarge */}
            <div className="logos-section">
              <h3 className="logos-title">
                Our Partners & Affiliations
                <span className="click-hint">Click any logo to view full size</span>
              </h3>
              <div className="logos-container">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="logo-wrapper"
                    onClick={() => openModal(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="footer-logo clickable-logo"
                    />
                    <div className="logo-overlay">
                      <span className="zoom-icon">🔍</span>
                      <span className="view-text">Click to View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Credit */}
            <div className="developer-section">
              <div className="developer-info">
                <span className="developer-icon">💻</span>
                <span className="developer-text">Website developed by Zaid Fadel</span>
              </div>
              <div className="accessibility-info">
                <span className="accessibility-icon">♿</span>
                <span className="accessibility-text">WCAG 2.1 AA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;