import React from 'react';
import img1 from './images/Logo.png';
import ContactForm from './ContactForm';


function App() {
  return (
    <div className="App">
      <img src={img1} alt="" class="center-image " />
      <ContactForm />
    </div>
  );
}

export default App;
