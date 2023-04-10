import React from "react";

function Header(props) {
    const {lightMode, setLightMode} = props;

    const handleModeChange = () => {
        setLightMode(!lightMode);
    }

    return(
        <div className="container d-flex justify-content-center align-items-center">
            <h1>Calculator</h1>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" onClick={handleModeChange}></input>
            </div>
        </div>
    )
};

export default Header;