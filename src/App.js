import logo from './logo.svg';
import './App.css';
import  About  from './components/About';
import Image from './components/Image';
import Info_id from './components/Info_id';
import Interests from './components/Interests';
import Logo_social_media_icon from './components/Logo_social_media_icon';

function App() {
  return (
    <div className='parent'>
      <div className="App container" >
        <Image />
        <Info_id />
        <About/>
        <Interests/>
        <Logo_social_media_icon/>
      </div>
    </div>
   
  );
}

export default App;
