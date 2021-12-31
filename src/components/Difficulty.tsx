import React, { useContext } from "react";
import { QuizContext } from "../context/context";
import { Container, Wrapper } from "../styles/App.styles";
import styles from "../styles/scss/App.module.scss";

const Difficulty = () => {
  const { level, setLevel, ...rest } = useContext(QuizContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLevel(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <div className={styles.diff}>
            <p className={styles.question}>Select Difficulty</p>
            <div>
              <input
                type="radio"
                id="easy"
                value="easy"
                name="level"
                onChange={handleChange}
              />
              <label htmlFor="easy">Easy</label>
            </div>

            <div>
              <input
                type="radio"
                id="medium"
                value="medium"
                name="level"
                onChange={handleChange}
              />
              <label htmlFor="medium">Medium</label>
            </div>

            <div>
              <input
                type="radio"
                id="hard"
                value="hard"
                name="level"
                onChange={handleChange}
              />
              <label htmlFor="hard">Hard</label>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Difficulty;
