import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [theme, setTheme] = useState('light');

  const [switchText, setSwitchText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const [customTheme, setCustomTheme] = useState('primary');

  const showAlert = (message,type) => {
    setAlert({msg:message, type:type});
    setTimeout(() => {
      setAlert(null);
    },1000);
  }

  const handleMode = (e) => {
    if(e.target.checked) {
      setTheme('dark');
      setSwitchText('Enable Light Mode');
      document.body.style.backgroundColor = '#29253a';
      showAlert('Dark mode on!!','success');
      setCustomTheme('primary');
    } else {
      setTheme('light');
      setSwitchText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode on!!','danger');
      setCustomTheme('primary');
    }
  }

  const handleCustomTheme = (e) => {
    console.log(e.target.innerText);
    if(e.target.innerText === 'Success') {
      document.body.style.backgroundColor = '#6da56d';
      setCustomTheme('success');
    } else if(e.target.innerText === 'Info') {
      document.body.style.backgroundColor = '#b0eaf7';
      setCustomTheme('info');
    } else if(e.target.innerText === 'Danger') {
      document.body.style.backgroundColor = '#dc6974';
      setCustomTheme('danger');
    }
  }

  const handleParamTheme = (cls) => {
    console.log(cls);
  }

  return ( 
    <>
    <Router>
    <Navbar title="Text Utils" about="About Us" 
      mode={theme} 
      switchText={switchText}
      handleMode={handleMode}
      handleTheme={handleCustomTheme}
      handleParamTheme={handleParamTheme}/>

      <div className="container">
        <Alert alert={alert}/>
      </div>

      <div className="container my-3">  
        <Switch>
          <Route exact path="/about">
            <About mode={theme}/>
          </Route>
          <Route exact path="/">
              <TextForm heading="Enter text to analyze"
                mode={theme}
                showAlert={showAlert}
                customTh={customTheme}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;