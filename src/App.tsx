import './App.css';
import Clg from './components/Clg/Clg';
import Demo from './components/Demo/Demo';
import Footer from './components/Footer/Footer';
import Gmail from './components/Gemail/Gmail';
import Img from './components/Img/Img';
import Knowmore from './components/Knowmore/Knowmore';
import Medal from './components/Medal/Medal';
import Meet from './components/Meet/Meet';
import NavBar from './components/NAV/NavBar';
import Playstore from './components/Playstore/Playstore';
import Rigester from './components/Rigester/Rigester';
import Text from './components/Text/Text';
import Segmet from './components/Segment/Segmet';


const App: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <Gmail/>
      <Clg/>
      <Img/>
      <Text/>
      <Demo/>
      <Medal/>
      <Knowmore/>
      <Meet/>
      <Segmet/>
      <Playstore/>
      <Rigester/>
      <Footer/>
    </div>
  );
};


export default App;
