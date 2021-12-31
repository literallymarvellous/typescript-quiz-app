import { Children, createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type Time = {
  s: number;
  m: number;
  h: number;
};

interface Context {
  starttime: boolean;
  setStarttime: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  level: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
  showTimer: boolean;
  setShowTimer: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContextDefaultValue: Context = {
  starttime: false,
  setStarttime: () => null,
  username: "",
  setUsername: () => null,
  level: "",
  setLevel: () => null,
  time: { s: 0, m: 0, h: 0 },
  setTime: () => null,
  showTimer: false,
  setShowTimer: () => null,
};

export const QuizContext = createContext<Context>(ContextDefaultValue);

export const QuizContentProvider: React.FC<Props> = ({ children }) => {
  const [starttime, setStarttime] = useState(false);
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState("");
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [showTimer, setShowTimer] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        starttime,
        setStarttime,
        username,
        setUsername,
        level,
        setLevel,
        time,
        setTime,
        showTimer,
        setShowTimer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
