import './AboutHero.css';

const AboutHero = ({ onWatchVideo }) => {
  return (
    <section className="about-hero">
      <div className="container">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1>ABOUT US</h1>
            <h2>Committed to Making Healthcare Accessible</h2>
            <p>
              We offer a trusted platform where you can confidently order both prescription and over-the-counter medicines online. Our team is dedicated to safety, reliability, and exceptional customer care—ensuring that you receive the medications you need, when you need them, without hassle.
            </p>
            <p>
              With a focus on convenience and quality, we partner with licensed pharmacies and healthcare professionals. Our mission is to simplify your healthcare journey, one delivery at a time.
            </p>
            
            {/* زر مشاهدة الفيديو */}
           <button 
              className="watch-video-btn" 
              onClick={onWatchVideo}
              aria-label="Watch company video"
            >
              <div className="play-icon-container">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span>Watch Video</span>
            </button>
          </div>
          
          <div className="about-hero-image">
            <img 
              src="/assets/about/aboutimg.jpg" 
              alt="Pharmacy Team" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/520x400/8B5CF6/FFFFFF?text=Pharmacy+Team";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;