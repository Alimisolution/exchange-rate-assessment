import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const SearchBar = () => {
  const { currencies } = useContext(CurrencyContext);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCurrencies = currencies.filter(currency => currency.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search currencies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2"
      />
      <ul>
        {filteredCurrencies.map(currency => (
          <li key={currency}>{currency}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
