import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import Imagelinkform from './components/imagelinkform/Imagelinkform';
import './App.css';
import Particles from 'react-particles-js';
const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
function App() {
  return (
    <div className="App">
      <Particles className='particles'
      params={particlesOptions}
      />
      <Navigation/>
      <Logo/>
      <Rank/>
      <Imagelinkform/>
      {/* {
      
      <FaceRecognition/>} */}
    </div>
  );
}

export default App;
