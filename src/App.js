import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import UsernameBox from './components/text-box';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
      <UsernameBox />
      
    </>
      
  );
}

export default App;