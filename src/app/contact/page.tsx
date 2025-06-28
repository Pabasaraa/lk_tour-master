'use client';
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import BackToTop from '../components/BackToTop';
import Loader from '../components/Loader';

export default function ContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.contactIntro}>
        <div className={styles.contactTitle}>
          <h1>Contact Us</h1>
        </div>
      </section>

      {loading ? (
        <Loader height="50vh"/>
      ) : (
      <>
      {/* Main Contact Section */}
      <section className={styles.contactSection}>
        {/* Left Side: Contact Form */}
        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact Number" />
            <input type="text" placeholder="Country" />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right Side: Contact Details */}
        <div className={styles.infoContainer}>
          <p>
            We’re Here to Assist You. Whether you have questions about our tours, need assistance with
            booking, or want to share feedback, we’d love to hear from you! At
            LK Tour Lanka, your satisfaction means everything to us. Simply fill
            out the form on the left or contact us directly via phone or email.
            Let’s make your dream journey a reality!
          </p>
          <h3>Contact Details</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} />{' '}
            <a href="tel:+94770838768" className={styles.noDecoration}>
                +94 77 083 8768
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{' '}
            <a href="mailto:kumaralalith152@gmail.com" className={styles.noDecoration}>
                kumaralalith152@gmail.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} />{' '}
            247/2, Wijayarama Road, Gampaha, Sri Lanka.
          </p>
        </div>
      </section>
      </>
    )}

      <Footer />

      <BackToTop />
    </>
  );
}
