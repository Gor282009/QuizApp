import React, { useState } from "react";

function QuizApp() {
    const [questions, setQuestions] = useState([
        {
            question: "What is the output of the following code? \n  `console.log(typeof null);`",
            options: ["Object", "Null", "Undifind", "Nummber"],
            correctAnswer: "Object",
        },
        {
            question: "Which of the following is a JavaScript data type?",
            options: [
                "Integer",
                "Boolean",
                "Decimal",
                "Character",
            ],
            correctAnswer: "Boolean",
        },
        {
            question: "Which method is used to convert a JSON string into a JavaScript object?",
            options: [
                "JSON.stringify()",
                "JSON.convert()",
                "JSON.toObject()",
                "JSON.parse()",
            ],
            correctAnswer: "JSON.parse()",
        },
        {
            question: "What will be the result of `2 + '2'` in JavaScript?",
            options: [
                "4",
                "Nan",
                "'22'",
                "Undifind",
            ],
            correctAnswer: "'22'",
        },
        {
            question: "Which statement is used to handle errors in JavaScript?",
            options: [
                "if...else",
                "error...catch",
                "try...catch",
                "throw...if",
            ],
            correctAnswer: "try...catch",
        },
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const checkAnswer = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        } else {
            setShowResults(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResults(false);
    };

    return (
        <div className="
        w-full h-[100vh] bg-black flex justify-center items-center">
            <div className="w-[500px] h-[400px] bg-yellow p-[50px] rounded-4xl">
                <h1 className="text-3xl font-bold flex justify-center">
                    Programming test
                </h1>
                {!showResults ? (
                    <div>
                        <p className="text-lg mb-4 flex justify-center text-white">
                            {questions[currentQuestion].question}
                        </p>
                        <ul>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index} >
                                    <input
                                        type="radio"
                                        name="answer"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={handleAnswerChange}
                                        className="mr-2"
                                    />
                                    {option}
                                </li>
                            ))}
                        </ul>
                        <button
                            className="w-[300px] h-[30px] 
                            bg-blue  mt-[50px] rounded-4xl text-white "
                            onClick={checkAnswer}
                        >
                            Next
                        </button>
                    </div>
                ) : (
                    <div className="w-500px flex justify-center flex-col">
                        <p className="text-2xl mb-4 text-white flex justify-center">
                            You answered one {score} of  {questions.length} the questions correctly.
                        </p>
                        <button
                            className="bg-blue w-[300px] h-[30px] rounded-4xl text-white"
                            onClick={restartQuiz}
                        >
                            Restart Test
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default QuizApp;
