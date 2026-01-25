import React, { useRef, useState } from 'react'
import "./Header.css"
import { hero_image } from "../../assets";
import { Link } from "react-scroll";
import Achievement from '../Achievement'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

// Import only k1, k2, k3, k12, k13 images
import k1 from "../../assets/Header_imgs/k1.jpeg";
import k2 from "../../assets/Header_imgs/k2.jpeg";
import k3 from "../../assets/Header_imgs/k3.jpeg";
import k12 from "../../assets/Header_imgs/k12.jpeg";
import k13 from "../../assets/Header_imgs/k13.jpeg";

// Import icons for modal
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const container = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // All images for modal (includes k12 and k13)
  const allImages = [
    { src: k1, alt: "Book Cover 1" },
    { src: k2, alt: "Book Cover 2" },
    { src: k3, alt: "Book Cover 3" },
    { src: k12, alt: "Journal Volume 12" },
    { src: k13, alt: "Journal Volume 13" },
  ];

  // Only k1, k2, k3 for the bottom gallery (red box area)
  const galleryImages = [
    { src: k1, alt: "Book Cover 1" },
    { src: k2, alt: "Book Cover 2" },
    { src: k3, alt: "Book Cover 3" },
  ];

  useGSAP(() => {
    const timeline = gsap.timeline({ delay: 1, stagger: 1 })
    timeline
      .fromTo(
        ".image__container",
        { scale: .5, opacity: 0, y: 150 },
        { scale: 1, ease: 'sine.in', opacity: 1, y: 0 }
      )
      .from(
        ".header-title",
        { opacity: 0, y: -30 }
      )
      .from(
        ".header-section",
        { opacity: 0, y: -30 }
      )
      .from(
        ".header-journal",
        { opacity: 0, y: -30 }
      )
      .from(
        ".journal-images-row",
        { opacity: 0, y: 20, stagger: 0.2 }
      )
  }, { scope: container })

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
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
    <header id='header'>
      <div className='container full__height'>
        {/* Centered Electrician Image Section */}
        <div className="centered-content">
          <div className='image__container'>
            <img src={hero_image} alt="Electrician at work" />
          </div>
          <p className="header-title">
            American–Arab Scientific Association for Literature and Science
          </p>
          <p className="header-section">
            Section 2: To publish a Scientific Journal dedicated to scientific research
            in the fields of Literature and Science
          </p>
          <p className="header-journal">
            International New Arts and Sciences Research Journal
          </p>
          
          {/* K12 and K13 Images - Side by side under journal title */}
          <div className="journal-images-row">
            <div 
              className="journal-image-wrapper"
              onClick={() => openImageModal(allImages[3], 3)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={k12} 
                alt="Journal Volume 12" 
                className="journal-image"
              />
              <div className="journal-image-label">Volume 12</div>
            </div>
            
            <div 
              className="journal-image-wrapper"
              onClick={() => openImageModal(allImages[4], 4)}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={k13} 
                alt="Journal Volume 13" 
                className="journal-image"
              />
              <div className="journal-image-label">Volume 13</div>
            </div>
          </div>
        </div>
        
        {/* <Achievement /> */}

        {/* Books Gallery Section - Now only shows k1, k2, k3 */}
        <div className="books-gallery-section">
          <div className="books-gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                className="books-gallery-item"
                key={index}
                onClick={() => openImageModal(image, index)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="books-gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="books-gallery-info" style={{ textAlign: 'center', marginTop: '20px' }}>
            <p className="text__muted">
              {/* Additional info can go here */}
            </p>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="book-modal" onClick={closeImageModal}>
          <div className="book-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="book-modal-close" onClick={closeImageModal}>
              <FaTimes />
            </button>

            <button className="book-modal-nav book-modal-prev" onClick={goToPrevious}>
              <FaChevronLeft />
            </button>

            <div className="book-modal-image-container">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="book-modal-image"
              />
              <div className="book-image-info">
                <h3>{selectedImage.alt}</h3>
                <p>Image {currentIndex + 1} of {allImages.length}</p>
              </div>
            </div>

            <button className="book-modal-nav book-modal-next" onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header