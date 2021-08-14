import React,{useEffect} from 'react';
import './App.css';
import { TransactionMenu } from './_components/transactionMenu';
import { TransactionList } from './_components/transactionsList';

import { getCurrencies } from './actions/currencyActions';
import {useDispatch} from 'react-redux'

type GetCurrencies=ReturnType<typeof getCurrencies>

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch<GetCurrencies>(getCurrencies())
  })
  
  return (
    <div className="App">
      <TransactionMenu/>
      <TransactionList/>
    </div>
  );
}

export default App;
