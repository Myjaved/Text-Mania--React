import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// import Header from './Header'
import Textform from './Textform';
import Alert from './Alert';
import { useState } from 'react';
import About from './About';

function App(props){

  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been Enabled","success")    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success")
    }
  } 

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <About/>
      {/* <Header/> */}
      <Textform showAlert={showAlert}/>
      
    </>
  );
}
      
export default App;
      
    
      
      
      





