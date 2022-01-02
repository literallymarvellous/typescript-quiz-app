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
        </div>
        <p
          className={styles.question}
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>

      <div>
        {answers.map((answer) => (
          <div key={answer} className={`${styles.textleft} ${styles.flexRow}`}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
