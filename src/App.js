import {React, useState} from "react";
import './App.css';
import Calculator from './component/Calculator';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {

  const [lightMode, setLightMode] = useState(true)

  return (
    <div className={lightMode ? "App d-flex flex-column text-bg-light": "App d-flex flex-column text-bg-dark"}>
      <Header lightMode={lightMode} setLightMode={setLightMode}/>
      <Calculator lightMode={lightMode}/>
      <Footer />
    </div>
  );
}

export default App;
