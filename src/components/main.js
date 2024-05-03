import React from 'react';
import './main.css';


export default function Main(props) {
  const [validity, setValidity] = React.useState()
  const [email, setemail] = React.useState('')
  

  function checkValidation() {
    if (!validity && email.length > 0) {
      props.fun()
      props.ction(email)
    }
  }
  function validateText(e) {
    setemail(e.target.value)
    setValidity(e.nativeEvent.srcElement.validity.typeMismatch)
  }  
  
    return (
        <div className='main'>
        <main className='mains-form'>
        <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a succss</li>
          <li>And much more!</li>
        </ul>
        <label className='user-input'>
            <div className='label-flex'>
                <span className='label'>Email address</span>
              <span className='error-label'>Valid email required</span>
            </div>
          <input type='email' className='input' onChange={validateText}></input>
        </label>
          <button onClick={checkValidation}>{props.btnText}</button>
      </main>
      <div className='mains-image'>
      </div></div>
    )
}