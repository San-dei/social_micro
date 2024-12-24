import React from "react";
import Image from "next/image";
import Stars from "./Stars";
import styles from "../../styles/landing.module.css";

const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.onlyDesktop}>
          <div className={styles.introSection}>
            <div className={styles.introTitle}>
              10.000+ of our users love our products.
            </div>
            <div className={styles.introText}>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </div>
          </div>

          <div className={styles.reviewsSection}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>
                <Stars />
              </div>
              <div className={styles.reviewSource}>
                Rated 5 Stars in Reviews
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>
                <Stars />
              </div>
              <div className={styles.reviewSource}>
                Rated 5 Stars in Report Guru
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>
                <Stars />
              </div>
              <div className={styles.reviewSource}>
                Rated 5 Stars in BestTech
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsSection}>
          <div className={styles.testimonialCard}>
            <div className={styles.userDetails}>
              <Image
                src={"/assets/image-colton.jpg"}
                alt="perfil"
                height={40}
                width={40}
                className={styles.userImage}
              />
              <div className={styles.perfil}>
                <div className={styles.userName}>Colton Smith</div>
                <div className={styles.userStatus}>Verified Buyer</div>
              </div>
            </div>
            <div className={styles.userFeedback}>
              `We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent!`
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.userDetails}>
              <Image
                src={"/assets/image-anne.jpg"}
                alt="perfil"
                height={40}
                width={40}
                className={styles.userImage}
              />
              <div className={styles.perfil}>
                <div className={styles.userName}>Irene Roberts</div>
                <div className={styles.userStatus}>Verified Buyer</div>
              </div>
            </div>
            <div className={styles.userFeedback}>
              `Customer services is always excellent and very quick turnaround.
              Completely delighted with the simplicity of the purchase and the
              speed of delivery`
            </div>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.userDetails}>
              <Image
                src={"/assets/image-irene.jpg"}
                alt="perfil"
                height={40}
                width={40}
                className={styles.userImage}
              />
              <div className={styles.perfil}>
                <div className={styles.userName}>Anne Wallace</div>
                <div className={styles.userStatus}>Verified Buyer</div>
              </div>
            </div>
            <div className={styles.userFeedback}>
              `Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone`
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
