import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AnswerObject } from "../API";
import styles from "../styles/scss/App.module.scss";

type Props = {
  question: string;
  answers: string[];
  userAnswers: AnswerObject[];
  questionNo: number;
  totalQuestions: number;
  accUserAns: string[];
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  callback2: () => void;
  callback3: () => void;
  setUserAnswers: React.Dispatch<React.SetStateAction<AnswerObject[]>>;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  questionNo,
  totalQuestions,
  accUserAns,
  callback,
  callback2,
  callback3,
}) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    setHover(true);
    e.currentTarget.style.color = "black";
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    setHover(false);
    e.currentTarget.style.color = "";
  };

  return (
    <div className={styles.quesForm}>
      <div>
        <div className={`${styles.questionNo} ${styles.flexRow}`}>
          <div className={styles.overflowH}>
            <motion.div
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className={styles.flexRow}
            >
              <div
                className={
                  questionNo > 1
                    ? `${styles.arrow} ${styles.arrowBg}`
                    : styles.arrow
                }
                onClick={callback3}
              >
                <FaLongArrowAltLeft fontSize="14px" />
              </div>

              <div>
                {questionNo} / {totalQuestions}
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className={styles.flexRow}
          >
            <p
              className={styles.question}
              dangerouslySetInnerHTML={{ __html: question }}
            />
          </motion.div>
        </div>
      </div>

      <div>
        {answers.map((answer, i) => (
          <div
            key={answer}
            className={`${styles.textleft} ${styles.flexRow} ${styles.overflowH}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className={styles.flexRow}
            >
              <input
                type="radio"
                id={answer}
                name="answers"
                value={answer}
                onChange={callback}
                defaultChecked={accUserAns[questionNo - 1] === answer}
                onClick={() =>
                  setTimeout(() => {
                    setHover(false);
                  }, 500)
                }
              />
              <label
                onMouseEnter={onMouseEnter}
                onMouseOver={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={
                  hover ? `${styles.options} ${styles.active}` : styles.options
                }
                htmlFor={answer}
                dangerouslySetInnerHTML={{ __html: answer }}
                onClick={callback2}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
