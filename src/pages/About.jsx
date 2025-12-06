// src/pages/About.jsx
import React, { useState, useRef } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutServices from '../components/about/AboutServices';
import './About.css';

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="about-page">
      <AboutHero onWatchVideo={handleWatchVideo} />
      <AboutStats />
      <AboutServices />
      
      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal-overlay" onClick={handleCloseVideo}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-modal-btn" 
              onClick={handleCloseVideo}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="video-wrapper">
              <video 
                ref={videoRef}
                src="/src/assets/about/abtvideo.mp4" 
                controls 
                className="about-video"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;