import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Difficulty,
  fetchQuiz,
  QuestionState,
  Dic,
  AnswerObject,
} from "../API";
import { Container, Wrapper } from "../styles/App.styles";
import QuestionCard from "./QuestionCard";
import { CircleLoader } from "react-spinners";
import styles from "../styles/scss/App.module.scss";
import { QuizContext } from "../context/context";

const TOTAL_QUESTIONS = 10;
let userAns: string[] = [];
let accUserAnswers: string[] = [];

function Quiz() {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isLoading, setisLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const { setStarttime, setTime, showTimer, setShowTimer, ...a } =
    useContext(QuizContext);

  let correctAns: Dic = {};

  const startQuiz = async () => {
    setGameOver(false);
    setisLoading(true);
    const data = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(data);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setisLoading(false);
    setTime({ s: 0, m: 0, h: 0 });
    setStarttime(true);
    setUserAnswer("");
  };

  const getAnswers = () => {
    questions.forEach((question, id) => {
      correctAns[id + 1] = question.correct_answer;
    });
    return correctAns;
  };

  const manageAnswers = () => {
    let answer: AnswerObject = {
      number: number + 1,
      answer: userAnswer,
    };

    setUserAnswers((prev) => [...prev, answer]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      return;
    } else {
      setNumber(nextQuestion);
    }
  };

  const prevQuestion = () => {
    const prevQuestion = number - 1;

    if (prevQuestion < 0) {
      return;
    } else {
      setNumber(prevQuestion);
    }
  };

  const finish = () => {
    let mapArray = (a1: string[], a2: string[]) =>
      a1.map((x: string, i: number) => [x, a2[i]]);
    let mappedArray = mapArray(userAns, accUserAnswers);
    let ansObj = Object.fromEntries(mappedArray);

    getAnswers();
    console.log(correctAns);
    console.log(ansObj);

    for (let i: number = 0; i < TOTAL_QUESTIONS; i++) {
      if (ansObj[i + 1] === correctAns[i + 1]) {
        setScore((prev) => prev + 1);
      } else {
        continue;
      }
    }
    setGameOver(true);
    setStarttime(false);
  };

  useEffect(() => {
    startQuiz();
    setShowTimer(true);
    setStarttime(true);
    userAns = [];
    accUserAnswers = [];

    return () => {
      setTime({ s: 0, m: 0, h: 0 });
      setShowTimer(false);
    };
  }, []);

  useEffect(() => {
    let ans = userAnswers.pop();
    if (ans) {
      if (userAns.includes(ans.number.toString())) {
        let index = userAns.indexOf(ans.number.toString());
        accUserAnswers.splice(index, 1, ans.answer);
      } else {
        userAns.push(ans.number.toString());
        accUserAnswers.push(ans.answer);
      }
    }
  }, [userAnswers, number]);

  useEffect(() => {
    manageAnswers();
  }, [userAnswer]);

  return (
    <Wrapper>
      <Container>
        <div className={styles.quiz}>
          {isLoading ? <CircleLoader /> : null}
          {gameOver && <div>Score : {score}</div>}
          {gameOver && <button onClick={startQuiz}>start</button>}
          {!gameOver && !isLoading ? (
            <QuestionCard
              questionNo={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
              callback={handleChange}
              accUserAns={accUserAnswers}
            />
          ) : null}
          {!gameOver && !isLoading && number > 0 ? (
            <button className="next" onClick={prevQuestion}>
              Prev Question
            </button>
          ) : null}

          {!gameOver && !isLoading && number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}

          {!gameOver && !isLoading ? (
            <button onClick={finish}>Finish</button>
          ) : null}
        </div>
      </Container>
    </Wrapper>
  );
}

export default Quiz;
