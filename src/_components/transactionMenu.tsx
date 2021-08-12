import React,{FC} from 'react';
import {useSelector} from 'react-redux';
import {IState} from '../reducers';
import {ICurrencyReducer} from '../reducers/currencyReducer';

export const TransactionMenu:FC=()=>{
    const currencyList=useSelector<IState, ICurrencyReducer>(globalState=>globalState.currencies)
    return(
        <p>test</p>
    )
}