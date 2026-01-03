import React, { useRef, useState } from 'react';
import "./About.css";

// Import the main images that we know exist
import m1 from "../../assets/m1.jpeg";
import m2 from "../../assets/m2.jpeg";
import m3 from "../../assets/m3.jpeg";
import about_image from "../../assets/about-image.jpeg";

// IMPORT ALL q1 to q23 images
import q1 from "../../assets/about_imgs/q1.jpeg";
import q2 from "../../assets/about_imgs/q2.jpeg";
import q3 from "../../assets/about_imgs/q3.jpeg";
import q4 from "../../assets/about_imgs/q4.jpeg";
import q5 from "../../assets/about_imgs/q5.jpeg";
import q6 from "../../assets/about_imgs/q6.jpeg";
import q7 from "../../assets/about_imgs/q7.jpeg";
import q8 from "../../assets/about_imgs/q8.jpeg";
import q9 from "../../assets/about_imgs/q9.jpeg";
import q10 from "../../assets/about_imgs/q10.jpeg";
import q11 from "../../assets/about_imgs/q11.jpeg";
import q12 from "../../assets/about_imgs/q12.jpeg";
import q13 from "../../assets/about_imgs/q13.jpeg";
import q14 from "../../assets/about_imgs/q14.jpeg";
import q15 from "../../assets/about_imgs/q15.jpeg";
import q16 from "../../assets/about_imgs/q16.jpeg";
import q17 from "../../assets/about_imgs/q17.jpeg";
import q18 from "../../assets/about_imgs/q18.jpeg";
import q19 from "../../assets/about_imgs/q19.jpeg";
import q20 from "../../assets/about_imgs/q20.jpeg";
import q21 from "../../assets/about_imgs/q21.jpeg";
import q22 from "../../assets/about_imgs/q22.jpeg";
import q23 from "../../assets/about_imgs/q23.jpeg";

import { FaCheck, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  const container = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ALL 23 gallery images
  const galleryImages = [
    { src: q1, alt: "Research Publication 1", number: 1 },
    { src: q2, alt: "Research Publication 2", number: 2 },
    { src: q3, alt: "Research Publication 3", number: 3 },
    { src: q4, alt: "Research Publication 4", number: 4 },
    { src: q5, alt: "Research Publication 5", number: 5 },
    { src: q6, alt: "Research Publication 6", number: 6 },
    { src: q7, alt: "Research Publication 7", number: 7 },
    { src: q8, alt: "Research Publication 8", number: 8 },
    { src: q9, alt: "Research Publication 9", number: 9 },
    { src: q10, alt: "Research Publication 10", number: 10 },
    { src: q11, alt: "Research Publication 11", number: 11 },
    { src: q12, alt: "Research Publication 12", number: 12 },
    { src: q13, alt: "Research Publication 13", number: 13 },
    { src: q14, alt: "Research Publication 14", number: 14 },
    { src: q15, alt: "Research Publication 15", number: 15 },
    { src: q16, alt: "Research Publication 16", number: 16 },
    { src: q17, alt: "Research Publication 17", number: 17 },
    { src: q18, alt: "Research Publication 18", number: 18 },
    { src: q19, alt: "Research Publication 19", number: 19 },
    { src: q20, alt: "Research Publication 20", number: 20 },
    { src: q21, alt: "Research Publication 21", number: 21 },
    { src: q22, alt: "Research Publication 22", number: 22 },
    { src: q23, alt: "Research Publication 23", number: 23 },
  ];

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeImageModal();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section id='about'>
      <div className='container' ref={container}>
        <div className='column company__photo'>
          <img src={about_image} alt='International New Arts and Sciences Research Journal' />
          <div className='editer'>Editor in Chief</div>
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
              { label: "Explore", title: "Books" },
              { label: "Read", title: "Online" },
              { label: "Research", title: "Journals" },
              { label: "Discover", title: "Authors" },
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

      {/* Gallery Section with ALL 23 images */}
      <div className="gallery__section">
        <h2 className="gallery__title">
          <span className='g-text'>Our Gallery</span>
        </h2>
        <p className="gallery__description text__muted">
          Showcasing our journey in scholarly publishing and academic excellence
        </p>
        
        <div className="gallery__grid">
          {galleryImages.map((image, index) => (
            <div 
              className="gallery__item" 
              key={index}
              onClick={() => openImageModal(image, index)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery__image"
                loading="lazy"
              />
              <div className="image__number">{image.number}</div>
            </div>
          ))}
        </div>
        
        <div className="gallery__success" style={{ textAlign: 'center', marginTop: '20px' }}>
         
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeImageModal}>
              <FaTimes />
            </button>
            
            <button className="modal-nav modal-prev" onClick={goToPrevious}>
              <FaChevronLeft />
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-image"
              />
              <div className="image-info">
                <h3>{selectedImage.alt}</h3>
                <p>Image {selectedImage.number} of {galleryImages.length}</p>
              </div>
            </div>
            
            <button className="modal-nav modal-next" onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;