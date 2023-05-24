// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Input from './Input'
// import EyeDrop from './EyeDrop';
import { useState, useRef } from 'react';
import HowToUse from './Views/HowToUse';
import UpdateHistory from './Views/UpdateHistory';
import NotFound from './Views/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path={'/'} element={<App />} /> */}
          <Route path={'/HowToUse'} element={<HowToUse />} />
          <Route path={'/UpdateHistory'} element={<UpdateHistory />} />
          <Route path={'/'} element={<Input />} />
          <Route path={'/*'} element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

      {/* <h1>color picker</h1> */}
      {/* <Input /> */}


    </div>
  );
}
export default App;
