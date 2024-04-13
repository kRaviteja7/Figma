import React from 'react'
import './demo.css'
import { Button } from 'antd'
import {StarOutlined,CrownFilled ,FireFilled,ArrowRightOutlined} from '@ant-design/icons';

const Demo:React.FC = () => {
  return (
    <div>
        <div className='dem'>
            <div className='re'>
                <CrownFilled className='ic'/>
                <h1>yorem impus dolor site</h1>
                <span>From stands out as a remarkable series that delves into the intricacies of human emotion.</span>
                <span className='rr'>Read More<ArrowRightOutlined /></span>
            </div>
            <div className='re'>
                <FireFilled  className='ic'/>
                <h1>yorem impus dolor site</h1>
                <span>From stands out as a remarkable series that delves into the intricacies of human emotion.</span>
                <span className='rr'>Read More<ArrowRightOutlined style={{marginLeft:10}} /></span>
            </div>
            <div className='re'>
                <StarOutlined className='ic'/>
                <h1>yorem impus dolor site</h1>
                <span>From stands out as a remarkable series that delves into the intricacies of human emotion.</span>
                <span className='rr'>Read More<ArrowRightOutlined /></span>
            </div>
        </div>
        <Button className='l'>Requiest a demo</Button>
    </div>
    
  )
}

export default Demo