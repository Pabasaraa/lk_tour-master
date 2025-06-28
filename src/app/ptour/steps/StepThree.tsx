"use client";
import { useState } from "react";
import styles from "./StepThree.module.css";

interface StepThreeProps {
  onPrevious: () => void;
  onNext: (data: { selectedPlaces: string[]; customLocation: string }) => void;
  formData: {
    selectedPlaces?: string[];
    customLocation?: string;
  };
}

export default function StepThree({ onPrevious, onNext, formData }: StepThreeProps) {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(formData.selectedPlaces || []);
  const [customLocation, setCustomLocation] = useState(formData.customLocation || "");

  const handleCheckboxChange = (place: string) => {
    setSelectedPlaces((prev) =>
      prev.includes(place)
        ? prev.filter((p) => p !== place)
        : [...prev, place]
    );
  };

  const handleNext = () => {
    onNext({ selectedPlaces, customLocation });
  };

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>Plan Your Trip</h2>
      <div className={styles.stepsIndicator}>
        <span className={styles.completedStep}>✓</span>
        <span className={styles.completedStep}>✓</span>
        <span className={styles.activeStep}>3</span>
        <span className={styles.inactiveStep}>4</span>
      </div>

      <label className={styles.label}>
        Select where you would like to visit <span className={styles.required}>*</span>
      </label>
      <div className={styles.checkboxGrid}>
        {[
          "Anuradhapura", "Dambulla", "Haputale", "Horton Plains", "Kandy",
          "Mannar", "Nuwara Eliya", "Ratnapura", "Batticaloa", "Galle",
          "Hatton", "Jaffna", "Kegalle", "Matale", "Polonnaruwa", "Sigiriya",
          "Colombo", "Gampaha", "Hikkaduwa", "Kalutara", "Kurunegala",
          "Matara", "Puttalam", "Trincomalee"
        ].map((place) => (
          <label key={place} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedPlaces.includes(place)}
              onChange={() => handleCheckboxChange(place)}
              required
            />
            {place}
          </label>
        ))}
      </div>

      <label className={styles.label}>Don't see what you are looking for?</label>
      <textarea
        className={styles.textArea}
        placeholder="Let us know where you want to go"
        value={customLocation}
        onChange={(e) => setCustomLocation(e.target.value)}
      />

      {/* Buttons stacked */}
      <button
        className={styles.nextButton}
        onClick={handleNext}
        style={{ marginTop: "20px" }}
      >
        Next
      </button>
      <button
        className={styles.prevButton}
        onClick={onPrevious}
      >
        Previous
      </button>
    </div>
  );
}
