import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/context";
import { Container, Wrapper } from "../styles/App.styles";
import styles from "../styles/scss/App.module.scss";

const Info: React.FC = () => {
  const { username, setUsername, ...rest } = useContext(QuizContext);
  let navigate = useNavigate();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/difficulty");
  };
  return (
    <>
      <Wrapper>
        <Container>
          <div className={styles.info}>
            <form className={styles.infoForm} onSubmit={onSubmitForm}>
              <div className={styles.label}>
                <label htmlFor="name">Enter your Username</label>
              </div>

              <div className={`${styles.relative} ${styles.after}`}>
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
              </div>
            </form>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Info;
