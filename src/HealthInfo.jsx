
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HealthInfo.css";

const HealthInfo = () => {
  const [hasChronic, setHasChronic] = useState("");
  const [disease, setDisease] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasChronic === "yes" && disease.trim() !== "") {
      const today = new Date().toISOString();
      localStorage.setItem("needReminder", "true");
      localStorage.setItem("chronicDisease", disease.trim());
      localStorage.setItem("lastReminder", today);
      localStorage.setItem("chronicPatient", "true");
      toast.success("✅ Your health data has been saved successfully");
    } 
    else if (hasChronic === "no") {
      localStorage.setItem("needReminder", "false");
      localStorage.setItem("chronicPatient", "false");
      toast.info("✅ Saved: No chronic diseases");
    } 
    else {
      toast.warning("⚠️ Please complete all fields");
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to clear all health data?")) {
      localStorage.removeItem("needReminder");
      localStorage.removeItem("chronicDisease");
      localStorage.removeItem("lastReminder");
      localStorage.removeItem("lastReminderDate");
      localStorage.removeItem("chronicPatient");
      setHasChronic("");
      setDisease("");
      toast.info("🧹 All health data has been cleared");
    }
  };

  return (
    <div className="simple-health-page">
      <h1>Health Information</h1>
      
      <div className="simple-health-box">
        <h2>Chronic Disease Management</h2>
        <p>Let us know if you have any chronic diseases so we can send you medication reminders</p>
        
        <form onSubmit={handleSubmit} className="simple-form">
          <div className="form-field">
            <label>Do you have a chronic disease?</label>
            <select
              value={hasChronic}
              onChange={(e) => setHasChronic(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {hasChronic === "yes" && (
            <div className="form-field">
              <label>What is the disease?</label>
              <input
                type="text"
                placeholder="Example: Diabetes - High Blood Pressure - Asthma"
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="save-btn">
            Save Information
          </button>
        </form>

        <button onClick={handleReset} className="reset-btn">
          Clear Data
        </button>
        
        <div className="info-note">
          <p>💡 <strong>Note:</strong> This information helps us provide better service. You can update it anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthInfo;