import Image from "next/image";
import styles from "../../styles/landing.module.css"

const Stars = () => {
  return (
    <>
        <Image
          src={"/assets/icon-star.svg"}
          alt="starts"
          height={15}
          width={15}
          className={styles.starIcon}
        />
        <Image
          src={"/assets/icon-star.svg"}
          alt="starts"
          height={15}
          width={15}
          className={styles.starIcon}
        />
        <Image
          src={"/assets/icon-star.svg"}
          alt="starts"
          height={15}
          width={15}
          className={styles.starIcon}
        />
        <Image
          src={"/assets/icon-star.svg"}
          alt="starts"
          height={15}
          width={15}
          className={styles.starIcon}
        />
        <Image
          src={"/assets/icon-star.svg"}
          alt="starts"
          height={15}
          width={15}
          className={styles.starIcon}
        />
    </>
  );
};

export default Stars;
