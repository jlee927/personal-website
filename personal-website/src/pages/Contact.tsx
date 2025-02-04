import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import styles from "../styles/Contact.module.css"
import ParticleBackground2 from "../components/ParticleBackground2"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"

interface Props {
  email: string
  subject: string
  body: string
}

const Mailto: React.FC<Props> = ({ email, subject, body }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
      <img src={gmail} className={styles.github} />
    </a>
  );
};

const Contact: React.FC = () => {
  return (
    <div >
      <Navbar showNavbar={true} useSticky={1} />
      <section className={styles.contact}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={styles.title}>Contact Me!</h1>

            <div className={styles.icon_container}>
              <a href="https://github.com/jlee927">
                <img src={github} className={styles.github} />
              </a>

              <a href="https://github.com/jlee927">
                <img src={linkedin} className={styles.github} />
              </a>
              <Mailto email={"jklee882@gmail.com"} subject={"Reaching Out From Jin's Personal Website"} body={""} />

            </div>
          </motion.div>
          <ParticleBackground2 />
        </div>
      </section>
    </div>
  );


}
export default Contact
