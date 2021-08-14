import React,{useEffect, useState} from 'react';
import './App.css';
import { TransactionMenu } from './_components/transactionMenu';
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
    </div>
  );
}

export default App;
