import React, {Fragment,Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar'
import Landing_page from './pages/Landing_page'
import Problem_description from './pages/Problem_description'
import Research from './pages/Research'
import Design from './pages/Design';


function App() {
  return (
      <div className="React_first_app">
        <Navbar/>
        <div className=""> 
            <Landing_page/>
            <Problem_description/>
            <Research/>
            <Design/>
        </div>
      </div>
      
  );
}

export default App;
