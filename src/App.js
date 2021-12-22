import './bootstrap.min.css'
import './App.css';
import {  BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';


function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<LoginScreen></LoginScreen>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/details" element={<DetailScreen/>}/>
        
      </Routes>
    </Router>
  )
}

export default App;
