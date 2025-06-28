// src/app/components/Footer/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        {/* Left: Logo */}
        <div className={styles['footer-left']}>
          <Link href="/">
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
        {/* Center: Contact Info */}
        <div className={styles['footer-center']}>
          <div className={styles['footer-contact']}>
            <div className={styles['contact-item phone-item']}>
              <Image
                src="/icons/phone.png"
                alt="Phone"
                width={20}
                height={20}
              />{' '}
              <span>
                <a href="tel:+94770838768" className={styles.phoneDeco}>
                  +94 77 083 8768
                </a>
              </span>
            </div>
            <div className={styles['contact-item location-item']}>
              <Image
                src="/icons/location.png"
                alt="Location"
                width={20}
                height={20}
              />{' '}
              <span>247/2, Wijayarama Road, Gampaha, Sri Lanka.</span>
            </div>
            <div
              className={`${styles['contact-item email-item']} ${styles['email-item']}`}
            >
              <Image
                src="/icons/email.png"
                alt="Email"
                width={20}
                height={20}
              />
              {'  '}
              <span>kumaralalith152@gmail.com</span>
            </div>
          </div>
          <div className={styles['footer-copy']}>
            <p>&copy; LK Tours Lanka All Rights Reserved 2025</p>
          </div>
        </div>
        {/* Right: Social Icons */}
        <div className={styles['footer-right']}>
          <Link href="#">
            <Image
              src="/icons/Whatsapp.png"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </Link>
          <Link href="#">
            <Image
              src="/icons/Facebook.png"
              alt="Facebook"
              width={30}
              height={30}
            />
          </Link>
          <Link href="#">
            <Image
              src="/icons/Instagram.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
