import React, { useRef, useState, useEffect } from 'react';
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
  const container = useRef(null);
  const galleryContainer = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('enter');
  const [showModalButtons, setShowModalButtons] = useState(false); // NEW STATE

  // ALL 23 gallery images with descriptions
  const galleryImages = [
    { 
      src: q1, 
      alt: "Translation: Some Aspects Of Applications", 
      number: 1,
      description: "Translation: In The Expression In Another Language Of What Has Been Expressed In A Source Language. Preservation of Semantic And Stylistic Equivalence."
    },
    { 
      src: q2, 
      alt: "The Alfa English Dictionary", 
      number: 2,
      description: "لـسـان مـعـجـم تـكـراراً مـعـجـم سـابـقـة وثـمـة نـوع جـديـد. فـهو أول مـعـجـم مـكـتـوب في الأسـمـاء الـتـي يـسـمـح بـالـكـلـمـة."
    },
    { 
      src: q3, 
      alt: "اللغة الإنجليزية", 
      number: 3,
      description: "لـيـس هـذا الـمـعـجـم تـكـراراً مـعـجـم سـابـقـة وثـمـة نـوع جـديـد. فـهو أول مـعـجـم مـكـتـوب في الأسـمـاء الـتـي يـسـمـح بـالـكـلـمـة."
    },
    { 
      src: q4, 
      alt: "Novels of Charlotte and Emily Bronte", 
      number: 4,
      description: "Prof. Mahmood Al Ali - Research on the literary works of Charlotte and Emily Bronte"
    },
    { src: q5, alt: "Research Publication Volume 5", number: 5, description: "Volume 5 of International Research Journal" },
    { src: q6, alt: "Research Publication Volume 6", number: 6, description: "Volume 6 of International Research Journal" },
    { src: q7, alt: "Research Publication Volume 7", number: 7, description: "Volume 7 of International Research Journal" },
    { src: q8, alt: "Research Publication Volume 8", number: 8, description: "Volume 8 of International Research Journal" },
    { src: q9, alt: "Research Publication Volume 9", number: 9, description: "Volume 9 of International Research Journal" },
    { src: q10, alt: "Research Publication Volume 10", number: 10, description: "Volume 10 of International Research Journal" },
    { src: q11, alt: "Research Publication Volume 11", number: 11, description: "Volume 11 of International Research Journal" },
    { src: q12, alt: "Research Publication Volume 12", number: 12, description: "Volume 12 of International Research Journal" },
    { src: q13, alt: "Research Publication Volume 13", number: 13, description: "Volume 13 of International Research Journal" },
    { src: q14, alt: "Research Publication Volume 14", number: 14, description: "Volume 14 of International Research Journal" },
    { src: q15, alt: "Research Publication Volume 15", number: 15, description: "Volume 15 of International Research Journal" },
    { src: q16, alt: "Research Publication Volume 16", number: 16, description: "Volume 16 of International Research Journal" },
    { src: q17, alt: "Research Publication Volume 17", number: 17, description: "Volume 17 of International Research Journal" },
    { src: q18, alt: "Research Publication Volume 18", number: 18, description: "Volume 18 of International Research Journal" },
    { src: q19, alt: "Research Publication Volume 19", number: 19, description: "Volume 19 of International Research Journal" },
    { src: q20, alt: "Research Publication Volume 20", number: 20, description: "Volume 20 of International Research Journal" },
    { src: q21, alt: "Research Publication Volume 21", number: 21, description: "Volume 21 of International Research Journal" },
    { src: q22, alt: "Research Publication Volume 22", number: 22, description: "Volume 22 of International Research Journal" },
    { src: q23, alt: "Research Publication Volume 23", number: 23, description: "Volume 23 of International Research Journal" },
  ];

  // Slider settings - Show only 2 slides at a time
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    centerPadding: '0px',
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // THIS IS THE KEY - DISABLES ALL ARROWS ON MAIN PAGE
    dots: true, // Keep dots for navigation
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false, // Disabled on all breakpoints
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
          arrows: false,
        }
      }
    ]
  };

  // REMOVE the SampleNextArrow and SamplePrevArrow functions completely
  // They are not needed since arrows are disabled

  const openImageModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setSlideDirection('enter');
    setShowModalButtons(true); // Show buttons when opening modal
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSlideDirection('exit');
    setShowModalButtons(false); // Hide buttons when closing modal
    setTimeout(() => {
      setSelectedImage(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const goToPrevious = () => {
    if (galleryImages.length === 0) return;
    
    setSlideDirection('slide-left');
    setTimeout(() => {
      const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
      setSlideDirection('enter');
    }, 300);
  };

  const goToNext = () => {
    if (galleryImages.length === 0) return;
    
    setSlideDirection('slide-right');
    setTimeout(() => {
      const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
      setSlideDirection('enter');
    }, 300);
  };

  // Toggle buttons visibility
  const toggleModalButtons = () => {
    setShowModalButtons(!showModalButtons);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case ' ':
        case 'Enter':
          toggleModalButtons();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, showModalButtons]);

  const getModalContentClass = () => {
    return `modal-content ${slideDirection}`;
  };

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
        </div>
      </div>

      {/* Gallery Section with CAROUSEL SLIDER */}
      <div className="gallery__section" ref={galleryContainer}>
        <h2 className="gallery__title">
          <span className='g-text'>Our Gallery</span>
        </h2>
        
        <div className="gallery-carousel-container">
          <Slider {...sliderSettings} className="gallery-slider">
            {galleryImages.map((image, index) => (
              <div 
                className="gallery-slide" 
                key={index}
                onClick={() => openImageModal(image, index)}
              >
                <div className="gallery-card">
                  <div className="gallery-image-container">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="gallery-slide-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Image Modal with Sliding Effect */}
      {selectedImage && (
        <div 
          className={`image-modal ${slideDirection === 'exit' ? 'fade-out' : ''} ${showModalButtons ? 'show-buttons' : ''}`} 
          onClick={closeImageModal}
        >
          <div 
            className={getModalContentClass()} 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeImageModal}>
              <FaTimes />
            </button>
            
            {/* Modal Navigation Buttons - Conditionally Rendered */}
            {showModalButtons && (
              <>
                <button className="modal-nav modal-prev" onClick={goToPrevious}>
                  <FaChevronLeft />
                </button>
                
                <button className="modal-nav modal-next" onClick={goToNext}>
                  <FaChevronRight />
                </button>
              </>
            )}
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-image"
                key={currentIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleModalButtons();
                }}
              />
              <div className="image-info">
                <h3>{selectedImage.alt}</h3>
                <p className="image-description">{selectedImage.description}</p>
                <p className="image-counter">Image {selectedImage.number} of {galleryImages.length}</p>
                <p className="click-instruction">
                  Click image to {showModalButtons ? 'hide' : 'show'} navigation buttons
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;