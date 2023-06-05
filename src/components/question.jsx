import React, { useState, useEffect } from "react";
function Question({ comp, points, setpoints, update, cohand }) {
  const [op1, setop1] = useState("");
  const [op2, setop2] = useState("");
  const [op3, setop3] = useState("");
  const [op4, setop4] = useState("");
  const [selected, setselected] = useState(null);
  const [cor, setcor] = useState();
  const [current, setcurrent] = useState(0);
  const questions = [
    {
      ques: "Q1.  Susan is on a train travelling north at 50mph, Calculate the mass of the sun.",
      op1: "1.989 × 10^30 kilograms",
      op2: "2 × 10^30 kilograms",
      op3: "Three Earth combined",
      op4: "I dont Know",
      correctOption: op1,
    },
    {
      ques: "Q2.  If Ray makes $250000 a year.Why is he still single?",
      op1: "He is ugly",
      op2: "He is a professional beggar",
      op3: "He does not want to marry",
      op4: "I dont bother about others life",
      correctOption: op4,
    },
    {
      ques: "Q3.  If a vegan and a meat eater fight eachother who will get a higher hospital bill?",
      op1: "Meat Eater",
      op2: "Vegan",
      op3: "What?",
      op4: "Me",
      correctOption: op2,
    },
    {
      ques: "Q4.  What are you doing?",
      op1: "Playing the quiz",
      op2: "Using my brain",
      op3: "Wasting my time",
      op4: "PLaning to kill myself",
      correctOption: op3,
    },
    {
      ques: "Q5.  Why are you jobless?",
      op1: "Lost my job",
      op2: "I am 10",
      op3: "I am not",
      op4: "I am too dumb for a job",
      correctOption: op4,
    },
  ];

  const nextques = () => {
    setcurrent(current + 1);
    setcor();
    setselected(null);
  };
  const answerHandler = (s) => {
    if (!selected) {
      setselected(s);
      setcor(curques.correctOption);
    }
  };
  const pointHandler = () => {
    if (selected === curques.correctOption) {
      setpoints(points + 1);
    }
  };

  const curques = questions[current];

  const finished = () => {
    comp(true);
  };


  useEffect(() => {
    setop1(curques.op1);
    setop2(curques.op2);
    setop3(curques.op3);
    setop4(curques.op4);
  }, [current]);

  useEffect(() => {
    update(points);
  }, [points]);

  useEffect(() => {
    cohand(comp);
  }, [comp]);

  return (
    <div className="wrapper">
      <div className="ques">{curques.ques}</div>
      <div className="options">
        <div
          onClick={() => {
            answerHandler(op1);
          }}
          className={`op  ${selected === op1 ? "wrong" : ""} ${
            cor === op1 ? "correct" : ""
          }`}
        >
          <span>a)</span> <p>{curques.op1}</p>
        </div>
        <div
          onClick={() => answerHandler(op2)}
          className={`op ${selected === op2 ? "wrong" : ""} ${
            cor === op2 ? "correct" : ""
          }`}
        >
          <span>b)</span> <p>{curques.op2}</p>
        </div>
        <div
          onClick={() => answerHandler(op3)}
          className={`op ${selected === op3 ? "wrong" : ""} ${
            cor === op3 ? "correct" : ""
          }`}
        >
          <span>c)</span> <p>{curques.op3}</p>
        </div>
        <div
          onClick={() => answerHandler(op4)}
          className={`op ${selected === op4 ? "wrong" : ""} ${
            cor === op4 ? "correct" : ""
          }`}
        >
          <span>d)</span> <p>{curques.op4}</p>
        </div>
      </div>
      <button
        onClick={() => {
          pointHandler();
          nextques();
        }}
        className={`${selected && current < 4 ? "visible" : ""}`}
      >
        Next
      </button>
      <button
        onClick={() => {
          pointHandler();
          finished();
        }}
        className={`${selected && current === 4 ? "visible" : ""}`}
      >
        Submit
      </button>
    </div>
  );
}

export default Question;
