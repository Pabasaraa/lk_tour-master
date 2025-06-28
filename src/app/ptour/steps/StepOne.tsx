"use client";
import { useState } from "react";
import styles from "./StepOne.module.css";

interface StepOneProps {
  onNext: (data: { title: string; fullName: string; nationality: string; email: string; phone: string }) => void;
  updateFormData: (data: any) => void;
  formData: any;
}

export default function StepOne({ onNext, updateFormData, formData }: StepOneProps) {
  const [localData, setLocalData] = useState({
    title: formData.title || "",
    fullName: formData.fullName || "",
    nationality: formData.nationality || "",
    email: formData.email || "",
    phone: formData.phone || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        <span className={styles.activeStep}>1</span>
        <span className={styles.inactiveStep}>2</span>
        <span className={styles.inactiveStep}>3</span>
        <span className={styles.inactiveStep}>4</span>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Title *</label>
            <select name="title" value={localData.title} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
              <option value="Rev">Rev</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Full Name *</label>
            <input type="text" name="fullName" value={localData.fullName} onChange={handleChange} required />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label>Nationality *</label>
          <input type="text" name="nationality" value={localData.nationality} onChange={handleChange} required />
        </div>
        <div className={styles.inputGroup}>
          <label>Email *</label>
          <input type="email" name="email" value={localData.email} onChange={handleChange} required />
        </div>
        <div className={styles.inputGroup}>
          <label>Phone *</label>
          <input type="tel" name="phone" value={localData.phone} onChange={handleChange} required />
        </div>

        {/* Placeholder for reCAPTCHA */}
        <div className={styles.recaptchaPlaceholder}>[reCAPTCHA]</div>

        {/* Single-column Buttons */}
        <button type="submit" className={styles.nextButton}>
          Next
        </button>
      </form>
    </div>
  );
}
