import React, {useEffect, useState} from 'react';
import "./CreateIdea.css";

export const CreateIdea = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // This section is not final (need to refactor)
    const [defaultState1, setDefaultState1] = useState("default");
    const [defaultState2, setDefaultState2] = useState("default");
    const [defaultState3, setDefaultState3] = useState("default");
    const [defaultState4, setDefaultState4] = useState("default");
    const [defaultState5, setDefaultState5] = useState("default");
    const [defaultState6, setDefaultState6] = useState("default");
    const [questions, setQuestions] = useState({});

    useEffect(() => {
        const fetch = populateQuestions();
    }, []);

    const populateQuestions = async () => {
        try {
            const response = await fetch('https://localhost:7048/selectGetQuestions');
            const data = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleOnChange = (event) => {
        const dataValue = event.target.getAttribute("data-value");
        switch (dataValue) {
            case "question1":
                if(event.target.value === "default") {
                    setCurrentQuestion(0);
                    setDefaultState1(event.target.value);
                    setDefaultState2("default");
                    setDefaultState3("default");
                    setDefaultState4("default");
                    setDefaultState5("default");
                    setDefaultState6("default");
                } else {
                    setCurrentQuestion(1);
                    setDefaultState1(event.target.value);
                    setDefaultState2("default");
                    setDefaultState3("default");
                    setDefaultState4("default");
                    setDefaultState5("default");
                    setDefaultState6("default");
                }
                break;
            case "question2":
                if(event.target.value === "default") {
                    setCurrentQuestion(1);
                    setDefaultState3("default");
                    setDefaultState4("default");
                    setDefaultState5("default");
                    setDefaultState6("default");
                } else {
                    setCurrentQuestion(2);
                    setDefaultState2(event.target.value);
                    setDefaultState3("default");
                    setDefaultState4("default");
                    setDefaultState5("default");
                    setDefaultState6("default");
                }
                break;
            case "question3":
                if(event.target.value === "default") {
                    setCurrentQuestion(2);
                    setDefaultState4("default");
                    setDefaultState5("default");
                    setDefaultState6("default");
                } else {
                    setCurrentQuestion(3);
                    setDefaultState3(event.target.value);
                    setDefaultState4("default");
                    setDefaultState5("default");
                    setDefaultState6("default");
                }
                break;
            case "question4":
                if(event.target.value === "default") {
                    setCurrentQuestion(3);
                    setDefaultState5("default");
                    setDefaultState6("default");
                } else {
                    setCurrentQuestion(4);
                    setDefaultState4(event.target.value);
                    setDefaultState5("default");
                    setDefaultState6("default");
                }
                break;
            case "question5":
                if(event.target.value === "default") {
                    setCurrentQuestion(4);
                    setDefaultState6("default");
                } else {
                    setCurrentQuestion(5);
                    setDefaultState5(event.target.value);
                    setDefaultState6("default");
                }
                break;
        }
    }

    return (
        <div className="py-3">
            <h3>Make your idea reality</h3>

            <div className="question-contaier" style={currentQuestion === 0 ? {display : "block"} : {display : "block"}}>
                <span>{questions[0]}</span>
                <select value={defaultState1} className="select1" onChange={handleOnChange} data-value="question1">
                    <option value="default">Please choose</option>
                    <option value="option2">{questions && questions[0][0]}</option>
                    <option value="option3">{questions[0][1]}</option>
                    <option value="option4">{questions[0][2]}</option>
                    <option value="option5">{questions[0][3]}</option>
                    <option value="option6">{questions[0][4]}</option>
                    <option value="option6">{questions[0][5]}</option>
                </select>
            </div>

            <div className="question-contaier"  style={currentQuestion >= 1 ? {display : "block"} : {display : "none"}}>
                <span>{questions[1]}</span>
                <select value={defaultState2} className="select2" onChange={handleOnChange}  data-value="question2">
                    <option value="default">Please choose</option>
                    <option value="option1">{questions[1][0]}</option>
                    <option value="option2">{questions[1][1]}</option>
                    <option value="option3">{questions[1][2]}</option>
                    <option value="option4">{questions[1][3]}</option>
                    <option value="option5">{questions[1][4]}</option>
                    <option value="option5">{questions[1][5]}</option>
                </select>
            </div>

            <div className="question-contaier" style={currentQuestion >= 2 ? {display : "block"} : {display : "none"}}>
                <span>{questions[2]}</span>
                <select value={defaultState3} className="select3" onChange={handleOnChange}  data-value="question3">
                    <option value="default">Please choose</option>
                    <option value="option1">{questions[2][0]}</option>
                    <option value="option2">{questions[2][1]}</option>
                    <option value="option3">{questions[2][2]}</option>
                    <option value="option4">{questions[2][3]}</option>
                    <option value="option5">{questions[2][4]}</option>
                </select>
            </div>

            <div className="question-contaier" style={currentQuestion >= 3 ? {display : "block"} : {display : "none"}}>
                <span>{questions[3]}</span>
                <select value={defaultState4} className="select4" onChange={handleOnChange}  data-value="question4">
                    <option value="default">Please choose</option>
                    <option value="option1">{questions[3][0]}</option>
                    <option value="option2">{questions[3][1]}</option>
                    <option value="option3">{questions[3][2]}</option>
                    <option value="option4">{questions[3][3]}</option>
                    <option value="option5">{questions[3][4]}</option>
                    <option value="option5">{questions[3][5]}</option>
                </select>
            </div>

            <div className="question-contaier" style={currentQuestion >= 4 ? {display : "block"} : {display : "none"}}>
                <span>{questions[4]}</span>
                <select value={defaultState5} className="select5" onChange={handleOnChange}  data-value="question5">
                    <option value="default">Please choose</option>
                    <option value="option1">{questions[4][0]}</option>
                    <option value="option2">{questions[4][1]}</option>
                    <option value="option3">{questions[4][2]}</option>
                    <option value="option4">{questions[4][3]}</option>
                </select>
            </div>

            <div className="question-contaier" style={currentQuestion >= 5 ? {display : "block"} : {display : "none"}}>
                <span>{questions[5]}</span>
                <select value={defaultState6} className="select6" onChange={handleOnChange}  data-value="question6">
                    <option value="default">Please choose</option>
                    <option value="option1">{questions[5][0]}</option>
                    <option value="option2">{questions[5][1]}</option>
                    <option value="option3">{questions[5][2]}</option>
                    <option value="option4">{questions[5][3]}</option>
                    <option value="option5">{questions[5][4]}</option>
                </select>
            </div>

        </div>
    );
}