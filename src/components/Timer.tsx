import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/context";
import styles from "../styles/scss/App.module.scss";

const Timer = () => {
  const { starttime, time, setTime, ...rest } = useContext(QuizContext);

  let updatedS = time.s;
  let updatedM = time.m;
  let updatedH = time.h;

  const startTimer = () => {
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    updatedS++;
    setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  useEffect(() => {
    let timer = setInterval(startTimer, 1000);

    if (starttime === false) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [starttime]);
  return (
    <>
      <div className={styles.timer}>
        <span>{time.h >= 10 ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
        <span>{time.m >= 10 ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
        <span>{time.s >= 10 ? time.s : "0" + time.s}</span>&nbsp;
      </div>
    </>
  );
};

export default Timer;
