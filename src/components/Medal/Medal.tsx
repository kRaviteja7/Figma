import React from 'react'
import './medal.css'
import {StarOutlined,SafetyCertificateOutlined,BulbOutlined} from '@ant-design/icons';

const Medal:React.FC = () => {
  return (
    <div className='cont'>
        <h1 >Sorem ipsum dolor site medals</h1>
        <StarOutlined className='i'/>
        <h3 className='nn'>Village did removenjoyed</h3>
        <SafetyCertificateOutlined className='i'/>
        <h3 className='nn'>Nail like length sooner</h3>
        <BulbOutlined className='i'/>
        <h3 className='nn'>Expansive windows adapted</h3>
    </div>
  )
}

export default Medal