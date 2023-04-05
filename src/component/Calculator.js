import {React, useState, useEffect} from "react";
import "./Calculator.css";

function Calculator() {

    // Setting states
    const [equation, setEquation] = useState(" ");
    const [result, setResult] = useState(" ");
    const [savedAnswer, setSavedAnswer] = useState(" ");
    const [displayAnswer, setDisplayAnswer] = useState(false);

    const CreateEquation = (e) => {
        setEquation(equation + e.target.value);
        setDisplayAnswer(false)
    }

    const RunEquation = () => {
        try {
            // eslint-disable-next-line
            setResult(eval(equation));
            // eslint-disable-next-line
            setSavedAnswer(eval(equation));
            setEquation("");
            setDisplayAnswer(true);
        } catch (error) {
            setResult("Error");
            setEquation("");
            setDisplayAnswer(true);
        }
    }

    const ClearEquation = () => {
        setEquation("");
        setResult("");
    }

    const EditEquation = () => {
        setEquation(equation.slice(0,-1))
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            let keySelect = e.key;
            const possibleKey = ['0','1','2','3','4','5','6','7','8','9','.','-','+','/','*','(',')']
            if(possibleKey.includes(keySelect)){
                document.querySelector(`button[value='${keySelect}']`).click();
            }
            else if (keySelect === "Enter"){
                document.querySelector(`button[value='=']`).click();
            }
            else if (keySelect === "Backspace"){
                document.getElementById("deleteButton").click();
            }
            else if (keySelect === "c"){
                document.getElementById("clearButton").click();
            }
            else if (keySelect === "a"){
                document.getElementById("ansButton").click();
            }  
        }

        window.addEventListener("keydown", handleKeyDown);

        // Included to stop it registering the event twice
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    },[])
   
    return(
        <div className="container d-flex justify-content-center align-items-center flex-grow-1">
            <div className="card ">
                <div className="row m-3 text-bg-secondary rounded">
                    <div className="container d-flex justify-content-start mathDisplay">
                        {displayAnswer ? <p className="m-0 ps-3 align-self-center fs-2">{result}</p> : <p className="m-0 ps-3 align-self-center fs-2">{equation}</p> }
                    </div>
                </div>
                <div className="row m-0 py-3">
                    <div className="col-8">
                        <div className="row-cols-3">
                            <button type="button" className="btn btn-outline-dark" value={1} onClick={CreateEquation}> 1 </button>
                            <button type="button" className="btn btn-outline-dark" value={2} onClick={CreateEquation}> 2 </button>
                            <button type="button" className="btn btn-outline-dark" value={3} onClick={CreateEquation}> 3 </button>
                            <button type="button" className="btn btn-outline-dark" value={4} onClick={CreateEquation}> 4 </button>
                            <button type="button" className="btn btn-outline-dark" value={5} onClick={CreateEquation}> 5 </button>
                            <button type="button" className="btn btn-outline-dark" value={6} onClick={CreateEquation}> 6 </button>
                            <button type="button" className="btn btn-outline-dark" value={7} onClick={CreateEquation}> 7 </button>
                            <button type="button" className="btn btn-outline-dark" value={8} onClick={CreateEquation}> 8 </button>
                            <button type="button" className="btn btn-outline-dark" value={9} onClick={CreateEquation}> 9 </button>
                            <button type="button" className="btn btn-outline-dark" value={0} onClick={CreateEquation}> 0 </button>
                            <button type="button" className="btn btn-outline-dark" value={"."} onClick={CreateEquation}>.</button>
                            <button id="ansButton" type="button" className="btn btn-outline-dark" value={savedAnswer} onClick={CreateEquation}>Ans</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row-cols-2">
                            <button type="button" className="btn btn-outline-dark" value={"+"} onClick={CreateEquation}>+</button>
                            <button type="button" className="btn btn-outline-dark" value={"-"} onClick={CreateEquation}>-</button>
                            <button type="button" className="btn btn-outline-dark" value={"/"} onClick={CreateEquation}>/</button>
                            <button type="button" className="btn btn-outline-dark" value={"*"} onClick={CreateEquation}>*</button>
                            <button type="button" className="btn btn-outline-dark" value={"("} onClick={CreateEquation}>(</button>
                            <button type="button" className="btn btn-outline-dark" value={")"} onClick={CreateEquation}>)</button>
                        </div>
                        <div className="row-cols-1">
                            <button type="button" className="btn btn-outline-dark" value={"="} onClick={RunEquation}>=</button>
                        </div>
                    </div>
                </div> 
                <div className="container pb-3">
                    <button id ="clearButton" type="button" className="btn btn-outline-dark mx-2" onClick={ClearEquation}>Clear</button>
                    <button id ="deleteButton" type="button" className="btn btn-outline-dark mx-2" onClick={EditEquation}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;