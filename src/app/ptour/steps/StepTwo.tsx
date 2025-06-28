"use client";
import { useState } from "react";
import styles from "./StepTwo.module.css";

interface StepTwoProps {
  onNext: (data: {
    arrivalDate: string;
    departureDate: string;
    nights: string;
    accommodation: string;
    adults: string;
    children: string;
  }) => void;
  onPrevious: () => void;
  updateFormData: (data: any) => void;
  formData: any;
}

export default function StepTwo({
  onNext,
  onPrevious,
  updateFormData,
  formData,
}: StepTwoProps) {
  const [localData, setLocalData] = useState({
    arrivalDate: formData.arrivalDate || "",
    departureDate: formData.departureDate || "",
    nights: formData.nights || "",
    accommodation: formData.accommodation || "",
    adults: formData.adults || "",
    children: formData.children || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFormData(localData);
    onNext(localData);
  };

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>Plan Your Trip</h2>
      <div className={styles.stepsIndicator}>
        <span className={styles.completedStep}>✓</span>
        <span className={styles.activeStep}>2</span>
        <span className={styles.inactiveStep}>3</span>
        <span className={styles.inactiveStep}>4</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Date of Arrival *</label>
            <input
              type="date"
              name="arrivalDate"
              value={localData.arrivalDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Date of Departure *</label>
            <input
              type="date"
              name="departureDate"
              value={localData.departureDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>How Many Nights? *</label>
          <input
            type="number"
            name="nights"
            value={localData.nights}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Type of Accommodation *</label>
          <select
            name="accommodation"
            value={localData.accommodation}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="5 Star Hotel">5 Star Hotel</option>
            <option value="4 Star Hotel">4 Star Hotel</option>
            <option value="3 Star Hotel">3 Star Hotel</option>
            <option value="Luxury Boutique">Luxury Boutique</option>
            <option value="Wallet Friendly">Wallet Friendly</option>
          </select>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>No. of Adults *</label>
            <input
              type="number"
              name="adults"
              value={localData.adults}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>No. of Children</label>
            <input
              type="number"
              name="children"
              value={localData.children}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons stacked */}
        <button
          type="submit"
          className={styles.nextButton}
          style={{ marginTop: "20px" }}
        >
          Next
        </button>
        <button
          type="button"
          className={styles.prevButton}
          onClick={onPrevious}
        >
          Previous
        </button>
      </form>
    </div>
  );
}
