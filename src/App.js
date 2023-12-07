import React from 'react';
import Navbar from './components/navbar';
import { Route, Routes} from 'react-router-dom';
import {Home} from './pages/home.js';
import {Chat} from './pages/chat.js';
import {Footer} from './components/footer.js';


function App() {
  return (
    <>
      <div class="flex flex-col h-screen justify-between">
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<Home />}/>
          <Route path='/chat' element={<Chat />} />
        </Routes>  
        <Footer />
      </div>

    </> 
  );
}

export default App;