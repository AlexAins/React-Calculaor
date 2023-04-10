import React from "react";
import {BsSunFill, BsFillMoonFill} from "react-icons/bs";
import "./Header.css";

function Header(props) {
    const {lightMode, setLightMode} = props;

    const handleModeChange = () => {
        setLightMode(!lightMode);
    }

    return(
        <div className="container d-flex justify-content-between align-items-center">
            <div className="flex-grow-0" style={{width: "56px"}}></div>
            <h1 className="flex-grow-1">Calculator</h1>
            <div className="form-check form-switch flex-grow-0 d-flex align-items-center">
                <input className="form-check-input me-2" type="checkbox" role="switch" id="modeSwitch" onClick={handleModeChange}></input>
                <label className="form-check-label" htmlFor="modeSwitch">
                    {lightMode ? <BsSunFill /> : <BsFillMoonFill />}
                </label>
            </div>
        </div>
    )
};

export default Header;