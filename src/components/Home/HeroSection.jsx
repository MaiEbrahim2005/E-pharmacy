import React, { useRef, useState } from 'react';
import './HeroSection.css';
import { FiUpload } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HeroSection = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
     
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        toast.error('Please select a valid file type (JPG, PNG, PDF)', {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }
      
      
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size should be less than 5MB', {
          position: "top-right",
          autoClose: 3000,
        });
        return;
      }
      
      setSelectedFile(file);
      
      
      toast.success(
        <div>
          <strong>Prescription uploaded successfully!</strong>
          <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>
            Click "Shop Now" for recommended medicines
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileData = {
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: reader.result,
          uploadedAt: new Date().toISOString()
        };
        localStorage.setItem('prescriptionFile', JSON.stringify(fileData));
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleShopNow = () => {
    if (selectedFile) {
  
      setIsUploading(true);
      
     
      const prescriptionProducts = [
        { id: 1, name: "ImmunoBoost", price: 63.00, quantity: 1, image: "/assets/images/products/product1.png", category: "Vitamins & Health Supplements", type: "Vitamin" },
        { id: 2, name: "MetaboTrim", price: 87.00, quantity: 1, image: "/assets/images/products/product2.png", category: "Vitamins & Health Supplements", type: "Herbal" },
        { id: 5, name: "NutriCore Essentials", price: 36.00, quantity: 1, image: "/assets/images/products/product5.png", category: "Prescription Medicines", type: "Vitamin" },
        { id: 7, name: "AcneShield Gel", price: 42.00, quantity: 1, image: "/assets/images/products/product7.png", category: "Prescription Medicines", type: "Cream" }
      ];
      
      
      localStorage.setItem('cart', JSON.stringify(prescriptionProducts));
      localStorage.setItem('isPrescriptionOrder', 'true');
      
      toast.info(
        <div>
          <strong>Processing your prescription...</strong>
          <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>
            Adding recommended medicines to your cart
          </div>
        </div>,
        {
          position: "top-right",
          autoClose: 1500,
        }
      );
      
     
      setTimeout(() => {
        setIsUploading(false);
        navigate('/checkout');
      }, 1500);
      
    } else {
      navigate('/shop');
    }
  };

  
  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = '';
    localStorage.removeItem('prescriptionFile');
    
    toast.info('Prescription removed', {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-container">
        <div className="right-content">
          <div className="health-list" aria-hidden="false">
            <div className="health-item" role="list">
              <span className="dot" aria-hidden="true"></span>
              <span>Health</span>
              <span className="dot" aria-hidden="true"></span>
              <span>Trust</span>
              <span className="dot" aria-hidden="true"></span>
              <span>Online</span>
            </div>
          </div>

          <h1 className="main-title">
            Instant Pharmacy Access For You
          </h1> 

          <div className="large-image-container">
            <img
              src="/assets/images/banner-img1.jpg"
              alt="Assorted medicines and wellness products"
              className="large-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = e.target.parentNode.querySelector('.image-placeholder.large');
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="image-placeholder large" role="img" aria-label="Large Medicine Image">Large Medicine Image</div>
          </div>
        </div>

        <aside className="left-content" aria-label="Intro and actions">
          <div className="clients-section" role="region" aria-label="Happy clients">
            <div className="circles-container" aria-hidden="true">
              <img src="/assets/images/user1.png" className="circle-img" alt="Client avatar 1" />
              <img src="/assets/images/user2.png" className="circle-img" alt="Client avatar 2" />
              <img src="/assets/images/user3.png" className="circle-img" alt="Client avatar 3" />
              <img src="/assets/images/user4.png" className="circle-img" alt="Client avatar 4" />
            </div>
            <div className="clients-info">
              <span className="clients-number">4k+</span>
              <p className="clients-text">Happy Clients</p>
            </div> 
          </div>

          <p className="hero-description">
            Order prescription and over-the-counter medicines online with confidence.
          </p>

          <div className="hero-buttons">
            <button 
              className={`btn-shop ${isUploading ? 'loading' : ''}`} 
              aria-label="Shop Now"
              onClick={handleShopNow}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : (
                <span>Shop Now</span>
              )}
            </button>
            
            <button 
              className={`btn-upload ${selectedFile ? 'has-file' : ''}`} 
              aria-label="Upload Prescription"
              onClick={handleUploadClick}
            >
              <FiUpload className="upload-icon" aria-hidden="true" />
              <span>Upload Prescription</span>
            </button>
            
           
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png,.pdf"
              style={{ display: 'none' }}
              aria-hidden="true"
            />
          </div>

         
          {selectedFile && (
            <div className="selected-file-info">
              <button 
                className="btn-remove-file"
                onClick={handleRemoveFile}
              >
                Remove
              </button>
            </div>
          )}

          <div className="small-image-container">
            <img
              src="/assets/images/banner-img2.jpg"
              alt="Assorted bottles on shelf"
              className="small-image"
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = e.target.parentNode.querySelector('.image-placeholder.small');
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="image-placeholder small" role="img" aria-label="Small Medicine Image">Small Medicine Image</div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;