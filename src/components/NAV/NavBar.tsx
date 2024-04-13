import { Button} from 'antd';
import './nav.css'
  
  const NavBar: React.FC= () => {
    return (
      <nav className='navbar'>
        <Button type="primary" className='b'>pH Logo</Button>
        <div >
          <div className='aa'>
            <span className='ss'>Home</span>
            <span className='ss'>About Us</span>
            <span className='ss'>Products</span>
            <span className='ss'>Blog</span>
            <span className='ss'>Pricing</span>
          </div>
        </div>
        <div>
          <a href='https://www.google.com/gmail/about/'>Sign in</a>
          <Button type="primary" className='fc'>Sign up & Try Now</Button>
        </div>
      </nav>
    );
  };

export default NavBar