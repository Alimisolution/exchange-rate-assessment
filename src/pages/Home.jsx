import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const { currencies, baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency, amount, setAmount, exchangeRate } = useContext(CurrencyContext);

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Currency Exchange</h1>
      <SearchBar/>
      <div className="flex flex-col md:flex-row mb-4 justify-center">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="border p-2 mr-2"
          placeholder="Amount"
        />
        <select value={baseCurrency} onChange={handleBaseCurrencyChange} className="border p-2 mr-2">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <span className="self-center">to</span>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange} className="border p-2 ml-2">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <h2 className="text-xl text-center">Converted Amount: {convertedAmount} {targetCurrency}</h2>
    </div>
  );
};

export default Home;
