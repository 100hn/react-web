import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Career from './components/Career';
import Home from './components/Home';
import Pitch from './components/Pitch';
import { Suspense } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={
            <Suspense fallback={<div>Components are loading please wait....</div>}
            >
              <Home/>
            </Suspense>
          }
          />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/pitch" element={<Pitch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
