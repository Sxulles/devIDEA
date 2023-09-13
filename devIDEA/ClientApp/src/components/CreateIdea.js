import React, { useEffect, useState } from 'react';
import "./CreateIdea.css";
import {getElement} from "bootstrap/js/src/util";

export const CreateIdea = () => {
    // Itt lesznek a szükséges useState-ek, useEffectek
    // Ez a komponens fog kommunikálni a backend-el a válaszok kidolgozásához
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const handleOnChange = (event) => {
        const dataValue = event.target.getAttribute("data-value");
        switch (dataValue) {
            case "question1":
                setCurrentQuestion(1);
                break;
            case "question2":
                setCurrentQuestion(2);
                break;
            case "question3":
                setCurrentQuestion(3);
                break;
            case "question4":
                setCurrentQuestion(4);
                break;
            case "question5":
                setCurrentQuestion(5);
                break;
        }
        
    }
    
    return (
        <div className="py-3">
            <h3>Make your idea reality</h3>
            
            <div className="Container" style={currentQuestion == 0 ? {display : "block"} : {display : "block"}}>
                <span>Here is the question 1!</span>
                <select className="select1" onChange={handleOnChange}  data-value="question1">
                    <option value="option1" >option 1</option>
                    <option value="option2" >option 2</option>
                    <option value="option3" >option 3</option>
                    <option value="option4" >option 4</option>
                    <option value="option5" >option 5</option>
                    <option value="option6" >option 6</option>
                </select>
            </div>

            <div className="Container"  style={currentQuestion >= 1 ? {display : "block"} : {display : "none"}}>
                <span>Here is the question 2!</span>
                <select className="select2" onChange={handleOnChange}  data-value="question2">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                    <option>option 6</option>
                </select>
            </div>

            <div className="Container" style={currentQuestion >= 2 ? {display : "block"} : {display : "none"}}>
                <span>Here is the question 3!</span>
                <select className="select3" onChange={handleOnChange}  data-value="question3">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                    <option>option 6</option>
                </select>
            </div>

            <div className="Container" style={currentQuestion >= 3 ? {display : "block"} : {display : "none"}}>
                <span>Here is the question 4!</span>
                <select className="select4" onChange={handleOnChange}  data-value="question4">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                    <option>option 6</option>
                </select>
            </div>

            <div className="Container" style={currentQuestion >= 4 ? {display : "block"} : {display : "none"}}>
                <span>Here is the question 5!</span>
                <select className="select5" onChange={handleOnChange}  data-value="question5">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                    <option>option 6</option>
                </select>
            </div>

            <div className="Container" style={currentQuestion >= 5 ? {display : "block"} : {display : "none"}}>
                <span>Here is the question 6!</span>
                <select className="select6" onChange={handleOnChange}  data-value="question6">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                    <option>option 6</option>
                </select>
            </div>           
            
        </div>
    );
}