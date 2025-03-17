import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      setCurrencies(Object.keys(response.data.rates));
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      setExchangeRate(response.data.rates[targetCurrency]);
    };

    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  return (
    <CurrencyContext.Provider value={{ currencies, baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency, amount, setAmount, exchangeRate }}>
      {children}
    </CurrencyContext.Provider>
  );
};
