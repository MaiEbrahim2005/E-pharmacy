import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>جاري التحميل...</p>
    </div>
  );
}

export default LoadingSpinner;