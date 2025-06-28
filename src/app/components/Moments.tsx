// src/app/components/Moments/Moments.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './css/Moments.module.css';
import Loader from '../components/Loader';

interface MomentsProps {
  showButton?: boolean; // Prop to control if the "See More Moments" button is displayed
  showTitle?: boolean; // Prop to control if the title is displayed
}

export default function Moments({
  showButton = true,
  showTitle = true,
}: MomentsProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.momentsCaptured}>
      {showTitle && (
        <div className={styles.momentsHeader}>
          <div className={styles.momentsDecor}></div>
          <h2>Moments Captured</h2>
          <div className={styles.momentsDecor}></div>
        </div>
      )}
      {loading ? (
        <Loader height="40vh" />
      ) : (
        <>
          <div className={styles.momentsGrid}>
            <div className={styles.momentImg}>
              <Image
                src="/img/moment1.jpg"
                alt="Moment 1"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.momentImg}>
              <Image
                src="/img/moment2.png"
                alt="Moment 2"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.momentImg}>
              <Image
                src="/img/about1.jpg"
                alt="Moment 3"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.momentImg}>
              <Image
                src="/img/moment4.png"
                alt="Moment 4"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.momentImg}>
              <Image
                src="/img/about3.jpg"
                alt="Moment 5"
                width={300}
                height={200}
              />
            </div>
            <div className={styles.momentImg}>
              <Image
                src="/img/moment6.jpg"
                alt="Moment 6"
                width={300}
                height={200}
              />
            </div>
          </div>

          {showButton && (
            <div className={styles.btnCenter}>
              <a href="/gallery" className={styles.btnSeeMore}>
                SEE MORE MOMENTS
              </a>
            </div>
          )}
        </>
      )}
    </section>
  );
}
