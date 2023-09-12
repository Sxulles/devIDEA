import React, { useEffect, useState } from 'react';

export const CreateIdea = () => {
    // Itt lesznek a szükséges useState-ek, useEffectek
    // Ez a komponens fog kommunikálni a backend-el a válaszok kidolgozásához
    
    return (
        <div>
            <h3>Make your idea a reality</h3>
            
            <span>Here is the question !</span>
            <select className="select1">
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
                <option>option 6</option>
            </select>
        </div>
    );
}