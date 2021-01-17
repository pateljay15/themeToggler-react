import React, {useState} from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ThemeContext from './Context/ThemeContext';



const App = () => {
  const themeHook = useState("light");

  return(
    <div>
      <ThemeContext.Provider value={themeHook}>
        <Header />
        <HeroSection />
      </ThemeContext.Provider>

    </div>
  )
  
}

export default App;
