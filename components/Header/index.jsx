import Image from 'next/image';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

const popIn = {
  hide: { opacit: 0, scale: 0 },
  enter: { opacit: 1, scale: 1 },
};

const fadeDown = {
  hide: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
};

const Header = ({ children, imgSrc }) => {
  return (
    <div className={styles.Header}>
      <motion.div
        variants={fadeDown}
        initial="hide"
        whileInView={'enter'}
        transition={{ type: 'spring' }}
        className={styles.textContent}
      >
        {children}
      </motion.div>
      {imgSrc && (
        <motion.div
          variants={popIn}
          initial="hide"
          whileInView={'enter'}
          transition={{ type: 'spring' }}
          className={styles.imgContainer}
        >
          <Image src={imgSrc} layout="fill" priority={true} />
        </motion.div>
      )}
    </div>
  );
};

export default Header;
