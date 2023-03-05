/* eslint react/prop-types: 0 */

import React from 'react';
import './App.css';

const BASE_URL = 'https://api.exchangerate.host/latest';

function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}{' '}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow;
