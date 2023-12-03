import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes} from 'react-router-dom';
import {Home} from './pages/home.js';
import {Chat} from './pages/chat.js';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home />}/>
        <Route path='/chat' element={<Chat />} />
      </Routes>  
    </> 
  );
}

export default App;