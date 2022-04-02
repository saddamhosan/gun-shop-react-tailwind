import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import GunDetail from './Component/GunDetail';
import Header from './Component/Header';
import Login from './Component/Login';
import Shop from './Component/Shop';


export const GunContext=createContext()
function App() {
  const [guns, setGuns] = useState([]);
  return (
    <GunContext.Provider value={[guns, setGuns]}>
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/gun/:id' element={<GunDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </GunContext.Provider>
  );
}

export default App;
