import React from 'react';
// import Navbar from './Navbar';
import Dropdown from './Dropdown';
import Dashboard from './Dashboard';
import {  Route, Routes } from "react-router-dom"

// import { Dashboarda } from './pages/Dashboard';
// import { Dashboard } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <header>
        {/* <Navbar /> */}
        <Dropdown />
      </header>
      {/* <Dashboard/> */}
      <Routes>
        <Route
            path="dashboard"
            element={
                <Dashboard />
            }
          />
    </Routes>
    

    </div>


  );
}

export default App;
