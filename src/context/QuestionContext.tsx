import React, { createContext, useState } from 'react';

export type States = {
  total: any | undefined,
  setTotal: (value: any | undefined) => void,
  score: number,
  setScore: (value: number) => void,

};

export const QuestionsContext = createContext<States | undefined>(undefined);

const QuestionsContextProvider = (props: any) => {
  const [total, setTotal] = useState<States>();
  const [score, setScore] = useState<number>(0);

  return (
    <QuestionsContext.Provider value={{
      total, setTotal,
      score, setScore,
    }}>
      {props.children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContextProvider;