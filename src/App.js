import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TheForm from './components/TheForm';
import Results from './components/Results';
import questions from './components/questions';

function App() {
    const [score, setScore] = useState(0);
    const [displayResults, setDisplayResults] = useState(false);

    const handleResultDisplay = () => {
        if(displayResults) setScore(0);
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
            {!displayResults ? 
                <TheForm handleChange={handleCheckbox} finishTest={handleResultDisplay} questions={questions} resetTest={() => setScore(0)}/> : 
                <Results score={score} total={questions.length} redoTest={handleResultDisplay}/>
            }
            <p>
                © OFFICIAL TRUE DESI TEST. DESIGN FROM RICE PURITY TEST. 
            </p>
        </div>
    );
}

export default App;
