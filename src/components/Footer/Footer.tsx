import {LinkedinOutlined,InstagramOutlined,TwitterOutlined,GithubOutlined} from '@ant-design/icons';
import React from 'react';
import { Space, Button} from 'antd';
import './footer.css'

const Footer: React.FC= () => {
  return (
    <div className='phlogo'>
        <div className='foot'>
            <h1>pH Logo</h1>
            <p>The range goes from 0 - 14, with 7 being neutral. pHs of less than 7 indicate acidity, whereas</p>
            <Space>
                <LinkedinOutlined />
                <InstagramOutlined />
                <TwitterOutlined />
                <GithubOutlined />
            </Space>
        </div>
        <div className='foot'>
            <h1>Borem</h1>
            <div className='borem'>
                <span>Dorem</span>
                <span>worem</span>
                <span>Lorem</span>
                <span>phorem</span>
            </div>
        </div>
        <div className='foot'>
            <h1>Dorem</h1>
            <div className='borem'>
                <span>Yorem</span>
                <span>Borem</span>
                <span>Korem</span>
                <span>Jhorem</span>
            </div>
        </div>
        <div className='foot'>
            <h1>Join Our NewsLetter</h1>
            <div>
                <input value="Your Email Address"/>
                <Button type="primary" className='b'>Subscribe</Button>
                <p>* We will send you weekly updates for the better managment</p>
            </div>
        </div>
    </div>
  )
}

export default Footer