import "./app.css";
import { useEffect, useMemo, useState } from "react";

import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "What is React?",
      answers: [
        {
          text: "A programming language",
          correct: false,
        },
        {
          text: " A JavaScript library for building user interfaces",
          correct: true,
        },
        {
          text: "A database management system",
          correct: false,
        },
        {
          text: "Operating System",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What does JSX stand fo",
      answers: [
        {
          text: "JavaScript XML",
          correct: true,
        },
        {
          text: "JavaScript Extensible",
          correct: false,
        },
        {
          text: "JavaScript XAML",
          correct: false,
        },
        {
          text: "JavaScript XHTML",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "In React, which hook is used to add state to functional components",
      answers: [
        {
          text: "useContext",
          correct: false,
        },
        {
          text: " useReducer",
          correct: false,
        },
        {
          text: " useEffect",
          correct: false,
        },
        {
          text: " useState",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the purpose of the virtual DOM in React?",
      answers: [
        {
          text: "To improve SEO for React applications",
          correct: false,
        },
        {
          text: "To reduce the complexity of React components",
          correct: false,
        },
        {
          text: " To directly manipulate the actual DOM",
          correct: false,
        },
        {
          text: " To improve performance by minimizing actual DOM updates",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "What is the significance of keys in React lists?",
      answers: [
        {
          text: "They provide a unique identifier for the component.",
          correct: false,
        },
        {
          text: " They help React identify which items have changed, been added, or been removed in a list.",
          correct: true,
        },
        {
          text: " They define the order of rendering for components.",
          correct: false,
        },
        {
          text: " They are used to access the parent component from a child component.",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "In React, which hook is used to add state to functional components",
      answers: [
        {
          text: "useContext",
          correct: false,
        },
        {
          text: " useReducer",
          correct: false,
        },
        {
          text: " useEffect",
          correct: false,
        },
        {
          text: " useState",
          correct: true,
        },
      ],

    },
    {
      id: 7,
      question: "In React, which hook is used to add state to functional components",
      answers: [
        {
          text: "useContext",
          correct: false,
        },
        {
          text: " useReducer",
          correct: false,
        },
        {
          text: " useEffect",
          correct: false,
        },
        {
          text: " useState",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "In React, which hook is used to add state to functional components",
      answers: [
        {
          text: "useContext",
          correct: false,
        },
        {
          text: " useReducer",
          correct: false,
        },
        {
          text: " useEffect",
          correct: false,
        },
        {
          text: " useState",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "In React, which hook is used to add state to functional components",
      answers: [
        {
          text: "useContext",
          correct: false,
        },
        {
          text: " useReducer",
          correct: false,
        },
        {
          text: " useEffect",
          correct: false,
        },
        {
          text: " useState",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "In React, which hook is used to add state to functional components",
      answers: [
        {
          text: "useContext",
          correct: false,
        },
        {
          text: " useReducer",
          correct: false,
        },
        {
          text: " useEffect",
          correct: false,
        },
        {
          text: " useState",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '₹100' },
        { id: 2, amount: '₹200' },
        { id: 3, amount: '₹500' },
        { id: 4, amount: '₹1000' },
        { id: 5, amount: '₹2000' },
        { id: 6, amount: '₹5000' },
        { id: 7, amount: '₹10000' },
        { id: 8, amount: '₹20000' },
        { id: 9, amount: '₹50000' },
        { id: 10, amount: '₹100000' }
       ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
    
        <>

          <div className="main">
            {timeOut ? (
             
              <h1 className="endText">You earned: {earned}</h1>
        

            ) : (
              <>
            <h3 className="till_score">You Earned:{earned}</h3>

                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                   
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
    
    </div>
  );
}

export default App;
