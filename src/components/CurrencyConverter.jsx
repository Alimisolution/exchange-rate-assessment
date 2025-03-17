import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const CurrencyConverter = () => {
  const { currencies, baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency, exchangeRate } = useContext(CurrencyContext);

  return (
    <div className="p-4 ">
      <div className="flex flex-col items-center mx-auto">
        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} className="mb-4">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)} className="mb-4">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <h2 className="text-xl">Exchange Rate: {exchangeRate}</h2>
      </div>
    </div>
  );
};

export default CurrencyConverter;
