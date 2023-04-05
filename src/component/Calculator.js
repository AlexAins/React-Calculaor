import {React, useState} from "react";

function Calculator() {

    const [equation, setEquation] = useState("");

    const CreateEquation = (e) => {
        setEquation(equation + e.target.value);
    }

    const [result, setResult] = useState("");

    const RunEquation = () => {
        setResult(eval(equation));
    }

    return(
        <div>
            <div>
                <p>{equation}</p>
                <p>{result}</p>
            </div>
            <div>
                <button value={0} onClick={CreateEquation}> 0 </button>
                <button value={1} onClick={CreateEquation}> 1 </button>
                <button value={2} onClick={CreateEquation}> 2 </button>
                <button value={3} onClick={CreateEquation}> 3 </button>
                <button value={4} onClick={CreateEquation}> 4 </button>
                <button value={5} onClick={CreateEquation}> 5 </button>
                <button value={6} onClick={CreateEquation}> 6 </button>
                <button value={7} onClick={CreateEquation}> 7 </button>
                <button value={8} onClick={CreateEquation}> 8 </button>
                <button value={9} onClick={CreateEquation}> 9 </button>
            </div>
            <div>
                <button value={"+"} onClick={CreateEquation}>+</button>
                <button value={"-"} onClick={CreateEquation}>-</button>
                <button value={"/"} onClick={CreateEquation}>/</button>
                <button value={"*"} onClick={CreateEquation}>*</button>
                <button value={"="} onClick={RunEquation}>=</button>
                <button value={result} onClick={CreateEquation}>Ans</button>
            </div>
        </div>
    )
}

export default Calculator;