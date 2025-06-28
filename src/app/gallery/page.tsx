// src/app/pages/gallery.tsx
'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Moments from '../components/Moments';
import styles from './gallery.module.css';
import BackToTop from '../components/BackToTop';

export default function Gallery() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.intro}>
        <div className={styles.title}>
          <h1>Moments Captured</h1>
        </div>
      </section>

      {/* Moments with showButton=false and showTitle=false */}
      <Moments showButton={false} showTitle={false} />

      <Footer />

      <BackToTop />
    </>
  );
}
