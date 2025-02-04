import styles from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface Props {
  showNavbar: boolean
  useSticky: number
}


const Navbar: React.FC<Props> = ({ showNavbar, useSticky }) => {
  const [isSticky, setIsSticky] = useState(showNavbar);

  // Set sticky class after scrolling past the intro section
  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector(`.${styles.container}`);
      if (introSection && window.scrollY >= introSection.clientHeight + (window.innerHeight / 2)) {
        setIsSticky(true);
      } else if (useSticky == 0) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.container} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.left_content}>
        {/*<h1>Logo Placeholder</h1>*/}
      </div>

      <div className={styles.right_content}>
        <NavLink to="/"
          className={({ isActive }) => isActive ? `${styles.links} ${styles.active_link}` : styles.links}
        >
          <h2>Home</h2>
        </NavLink>

        <NavLink to="/projects"
          className={({ isActive }) => isActive ? `${styles.links} ${styles.active_link}` : styles.links}
        >
          <h2>Projects</h2>
        </NavLink>

        <NavLink to="/contact"
          className={({ isActive }) => isActive ? `${styles.links} ${styles.active_link}` : styles.links}
        >
          <h2>Contact</h2>
        </NavLink>
      </div>
    </nav >
  )
}

export default Navbar

