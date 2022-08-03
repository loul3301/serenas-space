import styles from './Section.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hide: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
};

const fadeDown = {
  hide: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
};

const Section = ({
  children,
  header,
  imgSrc,
  reverse = false,
  vertical = false,
  divClassName,
}) => {
  let className = `${styles.ServiceDetailedSection}`;
  if (reverse && !vertical)
    className += ` ${styles.ServiceDetailedSectionReversed}`;
  if (vertical && !reverse)
    className += ` ${styles.ServiceDetailedSectionVertical}`;
  if (vertical && reverse)
    className += ` ${styles.ServiceDetailedSectionVerticalReversed}`;

  return (
    <div className={`${className} ${divClassName}`}>
      {header && (
        <motion.h2
          variants={fadeUp}
          initial="hide"
          whileInView={'enter'}
          transition={{ type: 'spring', delay: 0.5 }}
          className={styles.sectionHeader}
        >
          {header}
        </motion.h2>
      )}
      <div className={styles.mainContent}>
        <motion.div
          variants={fadeUp}
          initial="hide"
          whileInView={'enter'}
          transition={{ type: 'spring', delay: 0.5 }}
          className={
            !imgSrc
              ? `${styles.textContent} ${styles.textOnly}`
              : `${styles.textContent}`
          }
        >
          {children}
        </motion.div>
        {imgSrc && (
          <motion.div
            variants={fadeDown}
            initial="hide"
            whileInView={'enter'}
            transition={{ type: 'spring', delay: 0.5 }}
            className={styles.imgContainer}
          >
            <Image src={imgSrc} layout="fill" priority={true} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Section;
