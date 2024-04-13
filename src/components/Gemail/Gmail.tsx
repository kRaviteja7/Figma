import React from 'react'
import './gmail.css'

const Gmail:React.FC = () => {
  return (
    <div className='gg '>
        <div className='d'>
            <span style={{color:'blue'}}>Nibh tellus molestic nan mass enima, megna actisc skjd</span>
            <h1 ><span style={{color:'blue'}}>Nibh tellus molestic</span> nan mass enima, megna actisc skjd sdfj sjojoioi kjkn</h1>
            <span style={{marginTop:50}}>Nibh tellus molestic nan mass enima, megna actisc skjd sdfj sjojoioi kjkn lkll fee oijjjo sdkjnknsd snksjd kjndkjs sfnjksn sfjsio efo jnj iedjoif fji nfiwej nejnf</span>
            <div className='wr'>
                <input type='text' placeholder='Register using gmail addres' className='inr'/>
                <button className='jk'>Requist a demo</button>
            </div>
            <div className='ch'>
                <input type='checkbox' id='register' style={{borderRadius:5}}/>
                <label htmlFor='register' style={{marginTop:5}}> Free Register</label><br/>
                <input type='checkbox' id='grateService' style={{borderRadius:5}}/>
                <label htmlFor='grateService' style={{marginTop:5}}>Great Service</label>
            </div>
        </div>
        <div>
            <img src="https://cdn.dribbble.com/users/12095349/screenshots/19388442/media/e5d5390a7c40f09ec9552414363127a3.png?resize=1000x750&vertical=center" alt="" />
        </div>
    </div>
  )
}

export default Gmail