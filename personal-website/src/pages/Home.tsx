import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import ParticleBackground from '../components/ParticleBackground'
import ComputerIcon from '../assets/desktop-computer.png'
import ParticleBackground2 from '../components/ParticleBackground2'

const Home: React.FC = () => {
  return (
    <div>
      <section className={styles.home}>
        <ParticleBackground /> {/* Particle background still inside the section */}
        <div className={styles.home_container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={styles.first_text}>
              Hi, I'm Jin Lee, a Software Developer
            </h1>
            <h2 className={styles.second_text}>
              Welcome to My Website!
            </h2>
            <span style={{ color: "pink" }}>&#x2193;</span>
          </motion.div>
        </div>
      </section>

      <div className={styles.divider}>
      </div>

      <Navbar showNavbar={false} useSticky={0} />


      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_text}>
            <h1 className={styles.section_title}>About</h1>
            <br />
            <p style={{ color: "pink" }}>
              I'm a software developer passionate about using technology to solve real-world problems.
              My journey in computer science started with a fascination for how software can shape the future, and it’s been an exciting adventure ever since.
              I enjoy tackling complex challenges, constantly learning new technologies, and building innovative solutions.
              With a strong foundation in software development, I strive to create impactful and efficient systems that make a difference.
            </p>
          </div>

          <div className={styles.computer_container}>
            <img src={ComputerIcon} />
          </div>

        </div>
        <ParticleBackground2 />
      </section>


    </div>
  )
}

export default Home

