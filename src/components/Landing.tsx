import { Outlet, Link, useLocation } from "react-router-dom";
import { Container, Wrapper } from "../styles/App.styles";
import { Title } from "../styles/Landing.styles";
import styles from "../styles/scss/App.module.scss";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <motion.div exit={{ opacity: 0 }} transition={{ delay: 0.5 }}>
        <Wrapper>
          <Container>
            <div className={styles.landingDiv}>
              <div className={styles.overflowH}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Title>Welcome to Quiztopia 🧩</Title>
                </motion.div>
              </div>

              <div className={styles.overflowH}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className={styles.fs18}>
                    Time to realize how little you think you know 🙂
                  </p>
                </motion.div>
              </div>

              <div className={styles.overflowH}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <button className={styles.button}>
                    <Link to="info">Let's Go</Link>
                  </button>
                </motion.div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </motion.div>

      <Outlet />
    </>
  );
};

export default Landing;
