import './Congratz.css'
import CheckMark from '../SVG/icon-success.svg'



export default function Congratz(params) {
    console.log('params', params);
    
    
    return (
        <div className='congratz'>
            <img src={CheckMark} alt='check mark' className='check-mark' />
            <h1 className='h1'>Thanks for subscribing!</h1>
            <p className='p'>A comfirmation email has sent to <b>{params.email}</b>. Please open it and click
                the button inside to confirm your subscription.</p>
            <button onClick={window.close} className='btn'>{params.btnText}</button>

        </div>
    )
};
