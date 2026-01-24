import React, { useRef, useState } from 'react'
import "./Header.css"
import { hero_image } from "../../assets";
import { Link } from "react-scroll";
import Achievement from '../Achievement'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

// Import k1 to k11 images from the correct path
import k1 from "../../assets/Header_imgs/k1.jpeg";
import k2 from "../../assets/Header_imgs/k2.jpeg";
import k3 from "../../assets/Header_imgs/k3.jpeg";
import k4 from "../../assets/Header_imgs/k4.jpeg";
import k5 from "../../assets/Header_imgs/k5.jpeg";
import k6 from "../../assets/Header_imgs/k6.jpeg";
import k7 from "../../assets/Header_imgs/k7.jpeg";
import k8 from "../../assets/Header_imgs/k8.jpeg";
import k9 from "../../assets/Header_imgs/k9.jpeg";
import k10 from "../../assets/Header_imgs/k10.jpeg";
import k11 from "../../assets/Header_imgs/k11.jpeg";

// Import icons for modal
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Header = () => {
  const container = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // All k1 to k11 images
  const bookImages = [
    { src: k1, alt: "Book Cover 1" },
    { src: k2, alt: "Book Cover 2" },
    { src: k3, alt: "Book Cover 3" },
    { src: k4, alt: "Book Cover 4" },
    { src: k5, alt: "Book Cover 5" },
    { src: k6, alt: "Book Cover 6" },
    { src: k7, alt: "Book Cover 7" },
    { src: k8, alt: "Book Cover 8" },
    { src: k9, alt: "Book Cover 9" },
    { src: k10, alt: "Book Cover 10" },
    { src: k11, alt: "Book Cover 11" },
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
        ".title",
        { opacity: 0, y: -30 }
      )
      .from(
        ".description",
        { opacity: 0, y: -30 }
      )
      .from(
        ".buttons__container",
        { opacity: 0, y: 40 }
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
    const newIndex = currentIndex === 0 ? bookImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(bookImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === bookImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(bookImages[newIndex]);
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
        <div className="row">
          <div className='column'>
            <h1 className='title'>
              International{" "}<br />
              <span className='highlight'>New Arts & Sciences</span>
            </h1>
            <p className='text__muted description'>
              Discover groundbreaking research across diverse <br />fields of human knowledge in our annual magazine.
            </p>

            <div className='buttons__container'>
              <Link to="services" smooth={true} className="btn">Our Services</Link>
              <Link to="contact" smooth={true} className="btn btn__primary">Contact Us</Link>
            </div>
          </div>
          <div className="column">
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
          </div>
        </div>
        <Achievement />

        {/* Books Gallery Section - Added to the bottom */}
        <div className="books-gallery-section">
          <h2 className="books-gallery-title">
            <span className='highlight'>Our Publications</span>
          </h2>
          <p className="books-gallery-description text__muted">
            Showcasing our collection of published books and academic works
          </p>

          <div className="books-gallery-grid">
            {bookImages.map((image, index) => (
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
                {/* REMOVED: <div className="book-number">#{image.number}</div> */}
              </div>
            ))}
          </div>

          <div className="books-gallery-info" style={{ textAlign: 'center', marginTop: '20px' }}>
            <p className="text__muted">
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
                <p>Image {currentIndex + 1} of {bookImages.length}</p>
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