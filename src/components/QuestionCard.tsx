import React, { useEffect, useState } from "react";
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
  setUserAnswers: React.Dispatch<React.SetStateAction<AnswerObject[]>>;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  questionNo,
  totalQuestions,
  accUserAns,
  callback,
}) => {
  return (
    <div>
      <p className={styles.questionNo}>
        {questionNo} / {totalQuestions}
      </p>
      <p
        className={styles.question}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <input
              type="radio"
              id={answer}
              name="answers"
              value={answer}
              onChange={callback}
              defaultChecked={accUserAns[questionNo - 1] === answer}
            />
            <label
              htmlFor={answer}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
