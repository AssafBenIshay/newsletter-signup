import './App.css';
import Main from '../src/components/main'
import Congratz from './components/Congratz';
import React from 'react';

function App() {
  const [success, setSuccess] = React.useState(false)
  const [vEmail, setVemail] = React.useState('YOUR EMAIL')
  const [buttonText, setButtonText] = React.useState('Subscribe to monthly newsletter')
  
  function f2(email) {
    return setVemail(email)
  }
  function regSuccess() {
    setSuccess(true)
    setButtonText('Dismiss message')
    
  }
  return (
    <div className="App">
      {success ? <Congratz btnText={buttonText} email={vEmail} /> : <Main fun={regSuccess} ction={f2} btnText={buttonText}  />}
    </div>
  );
}

export default App;
