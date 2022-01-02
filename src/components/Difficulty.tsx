import React, { useContext } from "react";
import { QuizContext } from "../context/context";
import { Container, Wrapper } from "../styles/App.styles";
import styles from "../styles/scss/App.module.scss";
import { useNavigate } from "react-router-dom";

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
      <Wrapper>
        <Container>
          <div className={styles.diff}>
            <form className={styles.diffForm}>
              <div>
                <p className={styles.question}>Select Difficulty to Start</p>

                <p className={styles.smalltext}>
                  Feeling up for a challenge or just wanna pass time?
                </p>
              </div>

              <div className={styles.mt40}>
                <div className={styles.flexRow}>
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
                </div>

                <div className={styles.flexRow}>
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
                </div>

                <div className={styles.flexRow}>
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
                </div>
              </div>
            </form>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Difficulty;
