import React, { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const SearchBar = () => {
  const { currencies } = useContext(CurrencyContext);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCurrencies = currencies.filter(currency => currency.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search currencies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mb-3"
      />
      <ul className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-6'>
        {filteredCurrencies.map(currency => (
          <li key={currency}>{currency}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
