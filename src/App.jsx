import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <CurrencyProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Router>
        </CurrencyProvider>
    );
};

export default App;
