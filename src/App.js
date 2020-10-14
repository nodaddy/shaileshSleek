import React from 'react';
import './App.css';
import Students from './Components/Students'


function App() {

  //separate JSON objects for CSS
  var AppCSS = {
    paddingTop:'20px',
    backgroundColor:'silver',
    height:'100vh'
  }

  return (
    <div className="App" style={AppCSS}>
   
       <Students></Students>
    </div>
  );
}

export default App;
