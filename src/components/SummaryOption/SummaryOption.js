import React from 'react';
import './SummaryOption.css';
import USCurrencyFormat from '../../USCurrencyFormat';

const SummaryOption = props => (
  <div className="summary__option">
    <div className="summary__option__label">{props.featureName} </div>
    <div className="summary__option__value">{props.optionName}</div>
    <div className="summary__option__cost">
      {USCurrencyFormat.format(props.optionCost)}
    </div>
  </div>
);

export default SummaryOption;
