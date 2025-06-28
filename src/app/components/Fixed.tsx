// src/app/components/Fixed/Fixed.tsx
import styles from './css/Fixed.module.css';

export default function Fixed() {
  return (
    <>
      {/* Fixed Background Section */}
      <section className={styles.fixedBgSection}>
        <div className={styles.overlay}></div>
        <div className={styles.fixedBgContent}>
          <h2>
            "Explore Sri Lanka's Wonders: Eight UNESCO World Heritage Sites
            Await You!"
          </h2>
        </div>
      </section>
    </>
  );
}
