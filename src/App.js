import './App.css';
import Calculator from './component/Calculator';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
