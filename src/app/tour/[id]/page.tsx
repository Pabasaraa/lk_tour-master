"use client";

import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from "./viewPackage.module.css"; // Correct CSS module import
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"; // Use Next.js Image component
import BackToTop from '@/app/components/BackToTop';
import Loader from '@/app/components/Loader';

interface PackageDetails {
  title: string;
  titleDesc: string;
  description: string;
  days: { day: string; image: string; activities: string[] }[];
  overview: {
    duration: string;
    transport: string;
    journey: string;
    guide: string;
    price: string;
  };
}

export default function ViewPackage() {
  const params = useParams();
  const packageId = params.id; // Get the dynamic ID from the URL

  const [packageData, setPackageData] = useState<PackageDetails | null>(null);

  useEffect(() => {
    if (packageId) {
      fetch(`/api/packages/${packageId}`) // Fetch the correct package ID
        .then((res) => res.json())
        .then((data) => setPackageData(data))
        .catch((err) => console.error("Error fetching package", err));
    }
  }, [packageId]);

  if (!packageData) {
    return <Loader/>
  }

  return (
    <>
      <Head>
        <title>View Package Details</title>
      </Head>
      <Navbar/>

      {/* Tour Intro Section */}
      <header className={styles.tourIntro}>
        <div className={styles.tourIntroContent}>
          <h1>{packageData.title}</h1>
          <p>{packageData.titleDesc}</p>
        </div>
      </header>

      <section className={styles.packageContainer}>
          {/* Package Description */}
          <p className={styles.packageDescription}>{packageData.description}</p>

          <div className={styles.packageContent}>
            {/* Itinerary Section */}
            <div className={styles.itinerary}>
              {packageData.days.map((day, index) => (
                <div key={index} className={styles.dayCard}>
                  <div className={styles.dayBadge}>Day {index + 1}</div>
                  <Image 
                    src={day.image} 
                    alt={`Day ${index + 1}`} 
                    width={500} // Set appropriate width
                    height={300} // Set appropriate height
                    className={styles.dayImage} 
                  />
                  <ul className={styles.dayActivities}>
                    {day.activities.map((activity, i) => (
                      <li key={i}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Overview Section */}
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p><strong>Duration:</strong> {packageData.overview.duration}</p>
              <p><strong>Transport:</strong> {packageData.overview.transport}</p>
              <p><strong>Journey:</strong> {packageData.overview.journey}</p>
              <p><strong>Guide:</strong> {packageData.overview.guide}</p>
              <p><strong>Price:</strong> <span className={styles.price}>{packageData.overview.price}</span></p>
              <button className={styles.inquireButton}>INQUIRE NOW</button>
            </div>
          </div>
      </section>
      
      <Footer/>

      <BackToTop/>
    </>
  );
}
