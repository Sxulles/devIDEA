import {useEffect, useState} from 'react';
import {SelectItem} from "./SelectItem";

export const NewIdea = () => {
    const [availableFieldIndexes, setAvailableFieldIndexes] = useState(new Set());
    const [questionAnswerPair, setQuestionAnswerPair] = useState([]);

    useEffect(() => {
        getTestUser();
        syncFetchApi();
    }, []);

    const setAvailableField = (item) => {
        setAvailableFieldIndexes((prevState) => new Set([...prevState, item]));
    };
    
    const getTestUser = async () => {
        let userName = "Carl";
        
        try {
            const response = await fetch(`https://localhost:7048/GetUserByName/${userName}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const syncFetchApi = () => {
        try {
            fetch('https://localhost:7048/selectGetQuestions')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    setQuestionAnswerPair(data);
                })
                .catch((error) => {
                    console.error('Error while fetching data:', error);
                });
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container-fluid py-3 pt-5 text-white new-idea-section">
            <div className="container bg-lightdark rounded-4 p-5 border border-secondary">
                <h2 className="display-2">New Idea</h2>
                <div className="mt-5">
                    {
                        questionAnswerPair && 
                        questionAnswerPair.map((qa, index) => 
                            <SelectItem key={qa.question} indexKey={index} questionAnswerPair={qa} setAvailableField={setAvailableField} availableFieldIndexes={availableFieldIndexes}/>
                        )
                    }
                </div>

                <div className="container-fluid mt-5">
                    <div className="row justify-content-end">
                        <div className="col-auto">
                            <button disabled={!(questionAnswerPair.length === availableFieldIndexes.size)} className="btn btn-lg btn-purpleblue">Create</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    );
}