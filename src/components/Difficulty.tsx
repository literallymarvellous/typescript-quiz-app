import React, { useContext } from "react";
import { QuizContext } from "../context/context";
import { Container, Wrapper } from "../styles/App.styles";
import styles from "../styles/scss/App.module.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Difficulty = () => {
  const { level, setLevel, ...rest } = useContext(QuizContext);
  let navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(e.target.value);

    setTimeout(() => {
      navigate("/quiz");
    }, 500);
  };

  return (
    <>
      <motion.div exit={{ opacity: 0 }} transition={{ delay: 0.5 }}>
        <Wrapper>
          <Container>
            <div className={styles.diff}>
              <form className={styles.diffForm}>
                <div>
                  <div className={styles.overflowH}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={styles.question}>
                        Select Difficulty to Start
                      </p>
                    </motion.div>
                  </div>

                  <div className={styles.overflowH}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className={styles.smalltext}>
                        Feeling up for a challenge or just wanna pass time?
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className={styles.mt40}>
                  <div className={styles.overflowH}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className={styles.flexRow}
                    >
                      <input
                        type="radio"
                        id="easy"
                        value="easy"
                        name="level"
                        onChange={handleChange}
                      />
                      <label className={styles.optionsDiff} htmlFor="easy">
                        Easy
                      </label>
                    </motion.div>
                  </div>

                  <div className={styles.overflowH}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className={styles.flexRow}
                    >
                      <input
                        type="radio"
                        id="medium"
                        value="medium"
                        name="level"
                        onChange={handleChange}
                      />
                      <label className={styles.optionsDiff} htmlFor="medium">
                        Medium
                      </label>
                    </motion.div>
                  </div>

                  <div className={styles.overflowH}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.5 }}
                      className={styles.flexRow}
                    >
                      <input
                        type="radio"
                        id="hard"
                        value="hard"
                        name="level"
                        onChange={handleChange}
                      />
                      <label className={styles.optionsDiff} htmlFor="hard">
                        Hard
                      </label>
                    </motion.div>
                  </div>
                </div>
              </form>
            </div>
          </Container>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Difficulty;
