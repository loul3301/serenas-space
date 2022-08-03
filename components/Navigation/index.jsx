import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.branding}>
          <h5 className={styles.logoText}>
            <Link href="/">Serena Stante</Link>
          </h5>
        </div>

        <div className={styles.navLinks}>
          <ul
            className={!isOpen ? styles.ul : `${styles.ul} ${styles.active}`}
            onClick={() => setIsOpen(false)}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Works</Link>
            </li>
            <li>
              <Link href="/">Contact Me</Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
