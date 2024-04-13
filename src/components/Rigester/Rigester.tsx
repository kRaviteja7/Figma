import React from 'react'
import './rigester.css'

const Rigester:React.FC = () => {
  return (
    <div className='container'>
        <div className='why'>
            <span>WHY CHOOSE US</span>
            <h1>Horem ipsum doler sit aptem, constructer adipiscing elit</h1>
            <span>WHY CHOOSE US</span>
        </div>
        <div className='form'>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Rigester