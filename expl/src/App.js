import './App.css';
import Home from './component/Home';
import ListUser from './component/ListUser';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import './style.css';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2 style={{color:'orange'}}> Workshop API </h2>
    <Navbar/>
    <Routes>
    <Route path='/Home' element={<Home/>} />
    <Route path='/Listuser' element={<ListUser/>} />
    <Route path='/profile/:userId' element={<Profile/>} />
    </Routes>
    </div>
  );
}

export default App;