// src/app/components/About/About.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './css/About.module.css';
import Loader from '../components/Loader';

export default function About() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* About Section */}
      <section
        className={`${styles.section} ${styles.container} ${styles.aboutSection}`}
      >
        <div className={styles.aboutText}>
          <p>Your Gateway to Unforgettable Adventures</p>
          <h2>LK TOUR LANKA</h2>
          <p>
            Welcome to LK Tour Lanka – Where Your Journey Meets Excellence! As
            one of Sri Lanka's premier travel curators, we transform your travel
            dreams into bespoke experiences. Whether it’s exclusive private
            tours, vibrant group adventures, or handpicked hotel stays, every
            detail is designed with precision and care. From your first inquiry
            to the last cherished moment, we ensure your journey through Sri
            Lanka is nothing short of extraordinary...
          </p>
          <div className={styles.btnBook}>
            <a href="/tour" className={styles.btn}>
              Book Your Adventure
            </a>
          </div>
        </div>

        {loading ? (
          <Loader height="60vh" />
        ) : (
          <div className={styles.aboutImages}>
            <Image
              src="/img/about1.jpg"
              alt="Tourists"
              layout="responsive"
              width={200}
              height={200}
              className={styles.aboutImg}
            />
            <Image
              src="/img/about2.jpg"
              alt="Sri Lanka View"
              layout="responsive"
              width={200}
              height={200}
              className={styles.aboutImg}
            />
            <Image
              src="/img/about3.jpg"
              alt="Guide with Tourists"
              width={1200}
              height={400}
              style={{ width: '100%' }}
              className={styles.aboutImg}
            />
          </div>
        )}
      </section>
    </>
  );
}
