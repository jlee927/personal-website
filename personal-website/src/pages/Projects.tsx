import Navbar from '../components/Navbar.tsx'
import ParticleBackground2 from '../components/ParticleBackground2.jsx'
import { motion } from "framer-motion"
import styles from '../styles/Projects.module.css'
import fetch from '../assets/fetch.png'
import poker from '../assets/3CardPoker.png'
import interview from '../assets/interview_diver.png'

const Projects: React.FC = () => {
  return (
    <div className={styles.project} >
      <Navbar showNavbar={true} useSticky={1} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className={styles.project_container}>
            <div className={styles.project_description}>
              <h1 className={styles.title}>Interview Diver</h1>
              <br />
              <p style={{ color: "pink" }}>
                Interview Diver is an AI-powered interview practice platform that helps users improve their interviewing skills through
                real-time voice input and AI-generated feedback. The projects frontend was created using React TypeScript frontend, while the
                backend was created with Flask and SQL. Postgres stores user data and processes responses using OpenAI. Users can customize their practice sessions by selecting profession, difficulty,
                number of questions, and experience level
              </p>
            </div>

            <div className={styles.project_preview}>
              <img src={interview} className={styles.project_image} />
            </div>
          </div>


          <div className={styles.project_container}>
            <div className={styles.project_description}>
              <h1 className={styles.title}>Fetch Finance</h1>
              <br />
              <p style={{ color: "pink" }}>
                Fetch Finance is a MERN stack application designed for tracking and budgeting personal finances.
                It features interactive visualizations for revenue, expenses, and savings trends using React and charting libraries.
                The backend, built with Express and MongoDB, handles data storage, authentication, and financial calculations through REST APIs, ensuring efficient data management.
              </p>
            </div>

            <div className={styles.project_preview}>
              <img src={fetch} className={styles.project_image} />
            </div>
          </div>


          <div className={styles.project_container}>
            <div className={styles.project_description}>
              <h1 className={styles.title}>Three Card Poker</h1>
              <br />
              <p style={{ color: "pink" }}>
                Three Card Poker is a multiplayer card game designed and developed using Java sockets for real-time client-server communication.
                The game ensures smooth gameplay by implementing synchronization mechanisms to maintain thread safety and prevent race conditions during shared resource access.
              </p>
            </div>

            <div className={styles.project_preview}>
              <img src={poker} className={styles.project_image} />
            </div>
          </div>

        </motion.div>

        <ParticleBackground2 />
      </div>
    </div >
  )
}

export default Projects
