import {React, useState} from "react";

function Calculator() {

    const [equation, setEquation] = useState("");
    const [result, setResult] = useState("");
    const [savedAnswer, setSavedAnswer] = useState("");
    const [counter, setCounter] = useState(0);

    const CreateEquation = (e) => {
        setEquation(equation + e.target.value);
        setCounter(counter + 1);
    }

    const RunEquation = () => {
        // eslint-disable-next-line
        setResult(eval(equation));
        // eslint-disable-next-line
        setSavedAnswer(eval(equation));
        setEquation("");
        setCounter(0)
    }

    const ClearEquation = () => {
        setEquation("");
        setResult("");
        setCounter(0)
    }

    const EditEquation = () => {
        setEquation(equation.slice(0,-1))
    }

    return(
        <div className="container">
            <div className="card">
                <div className="row">
                    <p>{equation}</p>
                    <p>{result}</p>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="row-cols-3">
                            <button value={1} onClick={CreateEquation}> 1 </button>
                            <button value={2} onClick={CreateEquation}> 2 </button>
                            <button value={3} onClick={CreateEquation}> 3 </button>
                            <button value={4} onClick={CreateEquation}> 4 </button>
                            <button value={5} onClick={CreateEquation}> 5 </button>
                            <button value={6} onClick={CreateEquation}> 6 </button>
                            <button value={7} onClick={CreateEquation}> 7 </button>
                            <button value={8} onClick={CreateEquation}> 8 </button>
                            <button value={9} onClick={CreateEquation}> 9 </button>
                            <button value={0} onClick={CreateEquation}> 0 </button>
                            <button value={"."} onClick={CreateEquation}>.</button>
                            <button value={savedAnswer} onClick={CreateEquation}>Ans</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row-cols-2">
                            <button value={"+"} onClick={CreateEquation}>+</button>
                            <button value={"-"} onClick={CreateEquation}>-</button>
                            <button value={"/"} onClick={CreateEquation}>/</button>
                            <button value={"*"} onClick={CreateEquation}>*</button>
                            <button value={"("} onClick={CreateEquation}>(</button>
                            <button value={")"} onClick={CreateEquation}>)</button>
                            <button value={"="} onClick={RunEquation}>=</button>
                        </div>
                    </div>
                </div> 
                <div>
                    <button onClick={ClearEquation}>Clear</button>
                    <button onClick={EditEquation}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;