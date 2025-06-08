import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar';

import About from './components/About';
import Experience from './components/Experiance';
import Home from './components/Home';
import Project from './components/Projects';
import Footer from './components/Footer';
import Start from './components/Start'

function App() {
  //const [count, setCount] = useState(0)
  const [showPortfolio, setShowPortfolio] = useState(false);
  
  const [startFade, setStartFade] = useState(false);

  const handleViewPortfolio = () => {
    setStartFade(true);
    setTimeout(() => {
      setShowPortfolio(true);
    }, 700); // Match the animation duration
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-blue-900 h-auto w-full overflow-hidden">
      {!showPortfolio ? (
        <div
          className={`transition-opacity duration-700 ${
            startFade ? "opacity-0" : "opacity-100"
          }`}
        >
          <Start onViewPortfolio={handleViewPortfolio} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Project />
          <Footer />
        </>
      )}
    </div>
  );

  // return (
  //   <>
  //   <h1 className="text-3xl font-bold underline ">
  //     Hello world!
  //   </h1>
  //     {/* <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p> */}
  //   </>
  // )
}

export default App
