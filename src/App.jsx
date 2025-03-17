import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <CurrencyProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Router>
        </CurrencyProvider>
    );
};

export default App;
