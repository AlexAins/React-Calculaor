import {React, useState} from "react";

function Calculator() {

    const [value, setValue] = useState();

    const AddValue = (e) => {
        setValue(e.target.value);
    }

    return(
        <div>
            <div>
                <p>{value}</p>
            </div>
            <div>
                <button value={0} onClick={AddValue}> 0 </button>
                <button value={1} onClick={AddValue}> 1 </button>
                <button value={2} onClick={AddValue}> 2 </button>
                <button value={3} onClick={AddValue}> 3 </button>
                <button value={4} onClick={AddValue}> 4 </button>
                <button value={5} onClick={AddValue}> 5 </button>
                <button value={6} onClick={AddValue}> 6 </button>
                <button value={7} onClick={AddValue}> 7 </button>
                <button value={8} onClick={AddValue}> 8 </button>
                <button value={9} onClick={AddValue}> 9 </button>
            </div>
            <div>
                <button>+</button>
                <button>-</button>
                <button>/</button>
                <button>*</button>
                <button>=</button>
                <button>Ans</button>
            </div>
        </div>
    )
}

export default Calculator;