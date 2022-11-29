import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
import React, { useState } from 'react';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title='Text-Mania' mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element=<About mode={mode} /> />
            <Route exact path="/" element=<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />/>
          </Routes>
        </div>
      </Router>
    </>
  );
}





export default App;










