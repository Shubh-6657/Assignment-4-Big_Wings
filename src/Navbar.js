import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black', margin: '0', padding: '0' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: '0', justifyContent: 'flex-end' }}>
        <li style={{ margin: '10px' }}>
          <a href="/search" style={{ color: 'white' }}>&#128269;</a>
        </li>
        <li style={{ margin: '10px' }}>
          <a href="/calendar" style={{ color: 'white' }}>&#128197;</a>
        </li>
        <li style={{ margin: '10px' }}>
          <a href="/notification" style={{ color: 'white' }}>&#128276;</a>
        </li>
        <li style={{ margin: '10px' }}>
          <a href="/message" style={{ color: 'white' }}>&#128172;</a>
        </li>
        <li style={{ margin: '10px' }}>
          <a href="/settings" style={{ color: 'white' }}>&#9881;</a>
        </li>
        <li style={{ margin: '10px' }}>
          <a href="/profile pic" style={{ color: 'white' }}>&#9776;</a> 
        </li>
        <li style={{ margin: '10px' }}>
          <a href="/profile pic" style={{ color: 'white' }}>&#128100;</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
