import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import TheForm from './components/TheForm';
import Results from './components/Results';


function App() {
    const [score, setScore] = useState(0);
    const [displayResults, setDisplayResults] = useState(false);

    const handleResultDisplay = () => {
        setDisplayResults(!displayResults);
    }

    const handleCheckbox = (e) => {
        let tempScore = score;
        if(e.target.checked) tempScore+=1;
        if(!e.target.checked) tempScore-=1;
        setScore(tempScore);
    }
    
    return (
        <div className="App">
            <Header resultsDisplayed={displayResults}/>
            {displayResults ? 
                <TheForm handleChange={handleCheckbox} finishTest={handleResultDisplay} /> : 
                <Results score={0} total={0} redoTest={handleResultDisplay}/>
            }
            <p>
                © OFFICIAL TRUE DESI TEST. DESIGN FROM RICE PURITY TEST.
            </p>
        </div>
    );
}

export default App;
