import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './css/TVoices.module.css';
import Loader from '../components/Loader';

type Feedback = {
  subject: string;
  comment: string;
  reviewerName: string;
  rating: number; // 1-5
};

const feedbacks: Feedback[] = [
  {
    subject: 'Great tour in Sri Lanka with very caring driver',
    comment: `We were as a family (child 11 months, mom, dad, two aunts and grandma) 11 days in Sri Lanka with Lalith as driver. We had a van with a child seat.
Lalith has taken us safely to all desired destinations (Sigiriya, Passikudah, Arugambay, Ella, Kandy and Negambo) and was very caring. When the baby was tired, we took a break and so we also came to very authentic “restaurants” where tourists rarely come.
It was an incredibly nice time and I can absolutely recommend him.`,
    reviewerName: 'Andrea O',
    rating: 5,
  },
  {
    subject: 'Perfect, exciting, and will come again.',
    comment: `This trip to Sri Lanka was great thanks to our excellent guide! He was very professional, gracious and well-informed about the local culture. The itinerary is well arranged, safe to drive and gives us an insight into Sri Lanka's beautiful culture, nature and local life. It is highly recommended. Thank you very much, we will definitely be back!`,
    reviewerName: 'SIYUAN',
    rating: 4,
  },
  {
    subject: 'An amazing trip',
    comment: `My friend and I have just returned home from 2 weeks in Sri Lanka, we had an amazing time and that was greatly helped by having Lalith as our tour guide and driver. We visited Wilpattu, Anuradhapura, Polonnaruwa, Sigiriya, Kandy. Ella, Mirissa and Galle and Lalith helped us along the way taking us to interesting locations and beautiful sights. He is a very friendly guy who is very passionate about his country. He is a good driver, nothing was too much trouble and we always had a good laugh. We would recommend Lalith to anyone.`,
    reviewerName: 'Alex Johnson',
    rating: 5,
  },
  {
    subject: 'Exceptional Tour Guide – Made Our Sri Lanka Trip Unforgettable',
    comment: `We have just finished an incredible two-week tour through Sri Lanka, and we owe so much of the experience to our amazing tour guide Lalith. From start to finish, he made our holiday seamless, enjoyable, and truly memorable.
`,
    reviewerName: 'Becky Ramsey',
    rating: 4,
  },
  {
    subject: 'Four weeks in Sri Lanka',
    comment:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    reviewerName: 'Sujeevan',
    rating: 4,
  },
];

function getStars(rating: number) {
  return '★★★★★☆☆☆☆☆'.slice(5 - rating, 10 - rating);
}

const COMMENT_PREVIEW_LENGTH = 120;

export default function TVoices() {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleReadMore = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section className={styles.trustedVoices}>
      <h2>Trusted Voices</h2>
      <div className={styles.voicesGrid}>
        {loading ? (
          <Loader height="40vh" />
        ) : (
          feedbacks.map((fb, idx) => {
            const isLong = fb.comment.length > COMMENT_PREVIEW_LENGTH;
            const isExpanded = expanded === idx;
            const displayComment =
              isExpanded || !isLong
                ? fb.comment
                : fb.comment.slice(0, COMMENT_PREVIEW_LENGTH) + '...';

            return (
              <div className={styles.voiceCard} key={idx}>
                <div className={styles.quoteIcon}>“</div>
                <div className={styles.subject}>{fb.subject}</div>
                <div className={styles.starRating}>
                  {getStars(fb.rating).slice(0, 5)}
                </div>
                <p className={styles.comment}>
                  {displayComment}
                  {isLong && (
                    <button
                      className={styles.readMore}
                      onClick={() => handleReadMore(idx)}
                      type="button"
                    >
                      {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                  )}
                </p>
                <p className={styles.reviewerName}>{fb.reviewerName}</p>
                <div className={styles.tripadvisorIcon}>
                  <Image
                    src="/icons/tripadvisor-icon.png"
                    alt="TripAdvisor"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
