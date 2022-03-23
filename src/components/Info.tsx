import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/context";
import { Container, Wrapper } from "../styles/App.styles";
import styles from "../styles/scss/App.module.scss";

const Info: React.FC = () => {
  const { setUsername } = useContext(QuizContext);
  let navigate = useNavigate();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/difficulty");
  };
  return (
    <>
      <motion.div exit={{ opacity: 0 }} transition={{ delay: 0.5 }}>
        <Wrapper>
          <Container>
            <div className={styles.info}>
              <form className={styles.infoForm} onSubmit={onSubmitForm}>
                <div className={`${styles.label} ${styles.overflowH}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor="name">Enter your Username</label>
                  </motion.div>
                </div>

                <div
                  className={`${styles.relative} ${styles.after} ${styles.overflowH}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Type Your Username"
                      required
                      minLength={3}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                      }
                    />
                    <div className={styles.circle}>
                      <button className={styles.bgNone}>
                        <FaArrowRight fontSize="15px" color="white" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </form>
            </div>
          </Container>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Info;
