import {useState} from "react";
export const SelectItem = ({ indexKey, questionAnswerPair, setAvailableField, availableFieldIndexes }) => {
    
    const isAvailable = (!availableFieldIndexes.has(indexKey - 1) && indexKey !== 0);

    const [actualValue, setActualValue] = useState("")
    const handleOnChange = (value) => {
        setActualValue(prevState => prevState = value)
        setAvailableField(indexKey)
    };
    
    return(
        <div className="mt-5">
            <h4 className={isAvailable ? "text-muted lead mb-3" : "lead mb-3"}>{questionAnswerPair.question} <span className="text-primary">*</span></h4>
            <select disabled={isAvailable} value={actualValue} className="form-select bg-dark text-white py-3" onChange={e => handleOnChange(e.target.value)}>
                
                <option style={{display: "none"}} value="default">Please choose an option...</option>
                
                {questionAnswerPair.answers.map(answer =>
                    <option key={answer} value={answer}>{answer}</option>
                    )
                }
                
            </select>
        </div>
    );
};