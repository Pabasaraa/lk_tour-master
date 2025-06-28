// src/app/components/Why/Why.tsx
import Image from 'next/image';
import styles from './css/Why.module.css';

export default function Why() {
  return (
    <>
      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <h2 className={styles.whyTitle}>
          Why Choose
          {/* <br /> */}
          <span className={styles.highlight}>
            <div className={styles.highlighttxt}>LK Tour Lanka</div>
            <Image
              src="/icons/underline.svg"
              alt="underline"
              width={500}
              height={60}
              className={styles.underline}
            />
          </span>
        </h2>
        <div className={styles.whyChooseWrapper}>
          {/* Left Column */}
          <div className={styles.whyChooseColumn}>
            <div className={styles.whyChooseItem}>
              <Image
                src="/img/Help.svg"
                alt="Booking"
                width={100}
                height={100}
              />
              <div>
                <h3>Booking Made Effortless</h3>
                <p>
                  Enjoy a seamless booking experience with just a few clicks. At
                  LK Tour Lanka, we make planning your perfect getaway quick,
                  easy, and stress-free.
                </p>
              </div>
            </div>
            <div className={styles.horizontalBar}></div>
            <div className={styles.whyChooseItem}>
              <Image
                src="/img/Balloon.svg"
                alt="Travel"
                width={100}
                height={100}
              />
              <div>
                <h3>Travel in Comfort and Style</h3>
                <p>
                  Enjoy a smooth, relaxing ride with our top-notch
                  transportation services. Whether it's a private or a group
                  tour, we ensure comfort at every mile of your Sri Lankan
                  journey.
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className={styles.verticalBar}></div>
          {/* Horizontal Separator */}
          <div className={styles.horizontalBarResponsive}></div>

          {/* Right Column */}
          <div className={styles.whyChooseColumn}>
            <div className={styles.whyChooseItem}>
              <Image
                src="/img/guidence.svg"
                alt="Guidance"
                width={100}
                height={100}
              />
              <div>
                <h3>Expert Guidance at Every Step</h3>
                <p>
                  We are here to guide you through every detail, ensuring your
                  journey is smooth and unforgettable. Trust us to provide
                  insights and support, making your Sri Lankan adventure truly
                  special.
                </p>
              </div>
            </div>
            <div className={styles.horizontalBar}></div>
            <div className={styles.whyChooseItem}>
              <Image
                src="/img/Journey.svg"
                alt="Journey"
                width={100}
                height={100}
              />
              <div>
                <h3>Your Journey, Your Way</h3>
                <p>
                  Customize your perfect tour with our tailor-made packages,
                  designed to match your interests and preferences. Whether it's
                  relaxation or exploration, we create an experience just for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
