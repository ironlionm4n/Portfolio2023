import logo from './logo.svg';
import './App.css';
import './GlobalStyle.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//#region Pages
import { Contact } from './components/Pages/Contact';
import { GameDevPortfolio } from './components/Pages/GameDevPortfolio'
import { FrontEndPortfolio } from './components/Pages/FrontEndPortfolio';
import { Home } from './components/Pages/Home';
//#endregion

import { NavigateProvider } from './NavigateContext';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';

function App() {
  return (
    <BrowserRouter>
      <NavigateProvider>
        <ProfileHeader />
        <Routes>
          <Route path="/game-dev-portfolio" element={<GameDevPortfolio />} />
          <Route path="/front-end-portfolio" element={<FrontEndPortfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </NavigateProvider>
    </BrowserRouter>
  );
}

export default App;
