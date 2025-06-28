'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './tour.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import BackToTop from '../components/BackToTop';
import Loader from '../components/Loader';

const tourPackages = [
  {
    id: '1',
    title: 'Coastal Escape',
    description: 'Discover the Untouched Beauty of Sri Lanka’s Exotic Beaches',
    duration: '4 Nights / 5 Days',
    image: '/img/coastal.jpg',
  },
  {
    id: '2',
    title: 'Highland Escape',
    description:
      'Experience the serene beauty of Sri Lanka’s hills, with misty tea plantations and stunning waterfalls.',
    duration: '3 Nights / 4 Days',
    image: '/img/highland.jpg',
  },
  {
    id: '3',
    title: 'Romantic Retreat',
    description:
      'Celebrate love with a dreamy getaway, exploring Sri Lanka’s most enchanting and intimate destinations.',
    duration: '6 Nights / 7 Days',
    image: '/img/romantic.jpg',
  },
  {
    id: '4',
    title: 'Culture Tour',
    description:
      "Experience Sri Lanka's rich cultural heritage with historic landmarks and traditional performances.",
    duration: '3 Nights / 4 Days',
    image: '/img/culture.png',
  },
  {
    id: '5',
    title: 'Wildlife Tour',
    description:
      'Encounter the exotic wildlife in Sri Lanka’s stunning national parks.',
    duration: '3 Nights / 4 Days',
    image: '/img/wild.jpg',
  },
  {
    id: '6',
    title: 'Historical Tour',
    description:
      'Visit the ancient ruins and learn about Sri Lanka’s fascinating history.',
    duration: '4 Nights / 5 Days',
    image: '/img/historical.jpg',
  },
];

function TourCard({ tour }: { tour: (typeof tourPackages)[0] }) {
  return (
    <Link
      key={tour.id}
      href={`/tour/${tour.id}`}
      className={styles.escapeCardLink}
    >
      <div
        className={styles.escapeCard}
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        <div className={styles.escapeOverlay}></div>
        <div className={styles.escapeContent}>
          <h3>{tour.title}</h3>
          <p>{tour.description}</p>
          <span className={styles.escapeLabel}>{tour.duration}</span>
        </div>
      </div>
    </Link>
  );
}

export default function TourPackages() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Tour Packages - LK Tour Lanka</title>
      </Head>
      <Navbar />

      <header className={styles.tourIntro}>
        <div className={styles.tourIntroContent}>
          <h1>TOUR PACKAGES</h1>
          <p style={{ fontSize: '1.2rem', color: '#ffffff' }}>
            Exploring Sri Lanka is a breeze when you trust LK Tour Lanka with
            all your travel needs. Our expert guides and drivers are passionate
            about showcasing the beauty and culture of this island, ensuring you
            have an unforgettable experience every step of the way.
          </p>
        </div>
      </header>

      {loading ? (
        <Loader height="50vh" />
      ) : (
        <section className={styles.epicEscapes}>
          <div className={styles.escapesGrid}>
            {tourPackages.slice(0, 3).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className={`${styles.escapesGrid} ${styles.escapesGridB}`}>
            {tourPackages.slice(3).map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>
      )}

      <Footer />
      <BackToTop />
    </>
  );
}
