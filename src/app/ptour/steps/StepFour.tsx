"use client";
import styles from "./StepFour.module.css";

interface StepFourProps {
  onPrevious: () => void;
  formData: any;
}

export default function StepFour({ onPrevious, formData }: StepFourProps) {
  // You can manage state here if you want to store user selections (tourGuide, inquiries)
  // or simply add a handleSubmit function for the final form submission.

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>Plan Your Trip</h2>
      <div className={styles.stepsIndicator}>
        <span className={styles.completedStep}>✓</span>
        <span className={styles.completedStep}>✓</span>
        <span className={styles.completedStep}>✓</span>
        <span className={styles.activeStep}>4</span>
      </div>
      <div className={styles.formSection}>
        <label className={styles.label}>
          Do you need a tour guide? <span className={styles.required}>*</span>
        </label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input type="radio" name="tourGuide" value="National Guide" />
            Yes – National Guide
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="tourGuide" value="Chauffeur Guide" />
            Yes – Chauffeur Guide
          </label>
          <label className={styles.radioLabel}>
            <input type="radio" name="tourGuide" value="No Guide" />
            No, I don’t need a guide
          </label>
        </div>

        <label className={styles.label}>Any Inquiries:</label>
        <textarea
          className={styles.textArea}
          name="inquiries"
          placeholder="Write your inquiries here..."
        />

        {/* Buttons stacked */}
        <button
          className={styles.submitButton}
          style={{ marginTop: "20px" }}
        >
          Submit
        </button>
        <button
          className={styles.prevButton}
          onClick={onPrevious}
        >
          Previous
        </button>
      </div>
    </div>
  );
}
