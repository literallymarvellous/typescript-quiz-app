import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Wrapper } from "../styles/App.styles";
import { Title } from "../styles/Landing.styles";
import Header from "../components/Header";
import Aside from "../components/Aside";
import styles from "../styles/scss/App.module.scss";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <motion.div>
        <Wrapper>
          <Container>
            <div className={styles.landingDiv}>
              <Title>Welcome to Quiztopia 🧩</Title>

              <p className={styles.fs18}>
                Time to test how much you think know
              </p>

              <button className={styles.button}>
                <Link to="info">Let's Go</Link>
              </button>
            </div>
          </Container>
        </Wrapper>
      </motion.div>

      <Outlet />
    </>
  );
};

export default Landing;
