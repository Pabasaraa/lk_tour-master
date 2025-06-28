// src/app/components/epicEscapes/EpicEscapes.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './css/EpicEscapes.module.css';
import Link from 'next/link';
import Loader from '../components/Loader';

export default function EpicEscapes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.epicEscapes}>
      <div className={styles.escapesHeader}>
        <div className={styles.titleContainer}>
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={200}
            height={50}
            className={styles.arrow}
          />
          <h2 className={styles.escapesTitle}>
            Epic <span className={styles.span}>Escapes</span>
          </h2>
        </div>
        <p className={styles.headerP}>
          Exploring Sri Lanka is a breeze when you trust LK Tour Lanka with all
          your travel needs. Our expert guides and drivers are passionate about
          showcasing the beauty and culture of this island, ensuring you have an
          unforgettable experience every step of the way.
        </p>
      </div>

      {/* Loader */}
      {loading ? (
        <Loader height="60vh" />
      ) : (
        <>
          {/* Escape Cards */}
          <div className={styles.escapesGrid}>
            <Link key={1} href={`/tour/${1}`}>
              <div
                className={styles.escapeCard}
                style={{ backgroundImage: "url('/img/coastal.jpg')" }}
              >
                <div className={styles.escapeOverlay}></div>
                <div className={styles.escapeContent}>
                  <h3>Coastal Escape</h3>
                  <p>
                    Discover the Untouched Beauty of Sri Lanka’s Exotic Beaches
                  </p>
                  <span className={styles.escapeLabel}>4 Nights / 5 Days</span>
                </div>
              </div>
            </Link>

            <Link key={2} href={`/tour/${2}`}>
              <div
                className={styles.escapeCard}
                style={{ backgroundImage: "url('/img/highland.jpg')" }}
              >
                <div className={styles.escapeOverlay}></div>
                <div className={styles.escapeContent}>
                  <h3>Highland Escape</h3>
                  <p>
                    Experience the serene beauty of Sri Lanka’s hills, with
                    misty tea plantations and stunning waterfalls.
                  </p>
                  <span className={styles.escapeLabel}>3 Nights / 4 Days</span>
                </div>
              </div>
            </Link>

            <Link key={3} href={`/tour/${3}`}>
              <div
                className={styles.escapeCard}
                style={{ backgroundImage: "url('/img/romantic.jpg')" }}
              >
                <div className={styles.escapeOverlay}></div>
                <div className={styles.escapeContent}>
                  <h3>Romantic Retreat</h3>
                  <p>
                    Celebrate love with a dreamy getaway, exploring Sri Lanka’s
                    most enchanting and intimate destinations.
                  </p>
                  <span className={styles.escapeLabel}>6 Nights / 7 Days</span>
                </div>
              </div>
            </Link>
          </div>
        </>
      )}

      {/* View All Tours Button */}
      <div className={styles.btnCenter}>
        <a href="/tour" className={styles.btnViewTours}>
          VIEW ALL TOURS
        </a>
      </div>
    </section>
  );
}
