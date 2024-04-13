import React from 'react'
import './playstore.css'
import {AppleOutlined ,PlaySquareOutlined} from '@ant-design/icons';

const Playstore:React.FC = () => {
  return (
    <div className='play'>
        <span className='h'>HOREM IPSUM DOLOR SIT CONSUCTURE ADIPSING ELITE.</span>
        <h1>Torem ipsum dolor sit amet, consecture adipsing elit.</h1>
        <span>Torem ipsum dolor sit amet, consecture adipsing elit.</span>
        <div >
            <button><AppleOutlined />PlayStore</button>
            <button className='p'><PlaySquareOutlined />GooglePlay</button>
        </div>
    </div>
  )
}

export default Playstore