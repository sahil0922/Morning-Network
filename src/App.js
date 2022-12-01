import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const apiKey = process.env.REACT_APP_APIKEY

const App = () => {
  
  const[progress, setProgress] = useState(0); 

    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            />
          <Navbar /> 
          <Routes>
              <Route path="/" element ={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category= "general" />} /> 
              <Route path="/General" element ={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category= "general" />} /> 
              <Route path='/Sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category= "sports" />} />  
              <Route path='/Technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category= "technology" />} />
              <Route path='/Science' element= {<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category= "science" />} /> 
              <Route path='/Business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category= "business" />} /> 
              <Route path='/Health' element={ <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category= "health" />} />
              <Route path='/Entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category= "entertainment" />} />   
              
            </Routes>
        </Router>
      </div>
    )
}

export default App;
