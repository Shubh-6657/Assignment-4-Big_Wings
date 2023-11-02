import React from 'react';
// import Navbar from './Navbar';
import Dropdown from './Dropdown';
import Dashboard from '@mui/icons-material/Dashboard';
import { Route,Routes } from 'react-router-dom';
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
      <nav>
        <ul>
          <li><a href="/Dashboarda">Dashboard</a></li>
        </ul>
      </nav>
      <Routes>
      <Route path="/Dashboarda" element={<Dashboard/>} />
    </Routes>

    </div>


  );
}

export default App;
