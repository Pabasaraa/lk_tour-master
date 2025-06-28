'use client';
import { useState } from 'react';
import styles from './css/Navbar.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navLeft}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/img/logo.jpg"
                alt="LK Tour Lanka Logo"
                width={100}
                height={0}
                style={{ height: 'auto', width: '100px' }}
                priority
              />
            </Link>
          </div>
          <div className={`${styles.navRight} ${styles.desktopMenu}`}>
            <a href="/" className={styles.navLink}>
              HOME
            </a>
            <a href="/tour" className={styles.navLink}>
              TOURS
            </a>
            {/* <a href="/ptour" className={styles.navLink}>
              PERSONALIZED TOURS
            </a> */}
            <a href="/gallery" className={styles.navLink}>
              GALLERY
            </a>
            <a href="/contact" className={styles.navBtn}>
              INQUIRE NOW
            </a>
          </div>
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <a href="/" className={styles.navLink} onClick={toggleMobileMenu}>
              HOME
            </a>
            <a
              href="/tour"
              className={styles.navLink}
              onClick={toggleMobileMenu}
            >
              TOURS
            </a>
            {/* <a
              href="/ptour"
              className={styles.navLink}
              onClick={toggleMobileMenu}
            >
              PERSONALIZED TOURS
            </a> */}
            <a
              href="/gallery"
              className={styles.navLink}
              onClick={toggleMobileMenu}
            >
              GALLERY
            </a>
            <a
              href="/contact"
              className={styles.navBtn}
              onClick={toggleMobileMenu}
            >
              INQUIRE NOW
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
