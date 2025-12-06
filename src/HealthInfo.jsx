// src/HealthInfo.jsx
import "./healthinfo.css";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HealthInfo = () => {
  const [hasChronic, setHasChronic] = useState("");
  const [disease, setDisease] = useState("");

  // Save patient data to Local Storage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasChronic === "yes" && disease !== "") {
      const today = new Date().toISOString();

      localStorage.setItem("needReminder", "true");
      localStorage.setItem("chronicDisease", disease);
      localStorage.setItem("lastReminder", today);
      localStorage.setItem("chronicPatient", "true");

      toast.success("✅ Your data has been saved successfully");
    } 
    else if (hasChronic === "no") {
      localStorage.setItem("needReminder", "false");
      localStorage.setItem("chronicPatient", "false");

      toast.info("✅ Saved: No chronic disease");
    } 
    else {
      toast.warning("Please complete all fields");
    }
  };

  // Reset all Local Storage data
  const handleReset = () => {
    localStorage.removeItem("needReminder");
    localStorage.removeItem("chronicDisease");
    localStorage.removeItem("lastReminder");
    localStorage.removeItem("lastReminderDate");
    localStorage.removeItem("chronicPatient");
    localStorage.removeItem("cart");
    localStorage.removeItem("loggedIn");

    toast.info("🧹 All local data has been cleared!");
  };

  return (
    <div>
      <h2>Health Status</h2>

      <form onSubmit={handleSubmit}>
        <p>Do you have a chronic disease?</p>

        <select
          value={hasChronic}
          onChange={(e) => setHasChronic(e.target.value)}
        >
          <option value="">Choose</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {hasChronic === "yes" && (
          <div>
            <p>What is the disease?</p>
            <input
              type="text"
              placeholder="Example: Diabetes / Blood Pressure"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
            />
          </div>
        )}

        <button type="submit" style={{ marginTop: "10px" }}>
          Save
        </button>
      </form>

      {/* Reset button */}
      <button
        type="button"
        onClick={handleReset}
        style={{ marginTop: "20px", backgroundColor: "#f44336", color: "#fff", padding: "10px", border: "none", borderRadius: "5px" }}
      >
        Reset All Data
      </button>
    </div>
  );
};

export default HealthInfo;
