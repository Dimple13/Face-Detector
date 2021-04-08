import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import FaceRecognition from './components/facerecognition/FaceRecognition';
import Imagelinkform from './components/imagelinkform/Imagelinkform';
import './App.css';
import Particles from 'react-particles-js';
import {Component} from 'react';
import Clarifai from 'clarifai';
  
const app = new Clarifai.App({
  apiKey: '80ebc62a05334c24b6eebc6c35ac086e'
});

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'', 
      box:{},
    }
  }

  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      
    }
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  
  
  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input});
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input)
        .then(response=>this.calculateFaceLocation(response))
        .catch(err=>console.log(err));
    }

 
  render(){
  return (
    <div className="App">
      <Particles className='particles'
      params={particlesOptions}
      />
      <Navigation/>
      <Logo/>
      <Rank/>
      <Imagelinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}

export default App;
