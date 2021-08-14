import {FC} from 'react';
import {useSelector} from 'react-redux';
import {IState} from '../reducers';
import {ICurrencyReducer} from '../reducers/currencyReducer';
import {ITransaction} from '../entities/ITransaction'
import { ITransactionReducer } from '../reducers/transactionReducer';
import { addTransaction } from '../actions/transactionActions';
import {setExchangeRate} from '../actions/exchangeRateActions';
import {useDispatch} from 'react-redux';
import {IExchangeRateReducer} from '../reducers/exchangeRateReducer';
import {IExchangeRate} from '../entities/IExchangeRate';

export const TransactionMenu:FC=()=>{
    type AddTransaction=ReturnType<typeof addTransaction>
    type SetExchangeRate=ReturnType<typeof setExchangeRate>
    const dispatch=useDispatch()

    const newTransaction=()=>{
        const sampleTransaction:ITransaction={
            title:'test',
            valueEur:50
        };
        dispatch<AddTransaction>(addTransaction(sampleTransaction))
    }

    const setCustomExchangeRate=()=>{
        const newExchangeRate:IExchangeRate={
            exchangeRate:5
        }
        dispatch<SetExchangeRate>(setExchangeRate(newExchangeRate))
    }

    const transactionList=useSelector<IState, ITransactionReducer>(globalState=>globalState.transactions)
    const currencyList=useSelector<IState, ICurrencyReducer>(globalState=>globalState.rates)
    const exchangeRateList=useSelector<IState,IExchangeRateReducer>(globalState=>globalState.exchangeRate)
    const exchangeRates=currencyList.currencyList.rates
    console.log(transactionList)   
    console.log(exchangeRates)
    console.log(exchangeRateList)
    return(
        <div className="transactionInput">
            <div className="exchangeRateWrapper">
                <h2>EXCHANGE RATE</h2>
                <div className="exchangeRateInput">
                    <p>1€=</p>
                    <input type="number"/>
                    <p>PLN</p>
                </div>
                <button onClick={setCustomExchangeRate}>AUTO</button>
            </div>
            <div className="transactionWrapper">
                <h2>ADD TRANSACTION</h2>
                <div className="transactionInput">
                    <p>Title</p>
                    <input type="text"/>
                    <p>Value</p>
                    <input type="number"/>
                    <p>€</p>
                    <button onClick={newTransaction}>ADD</button>
                </div>
            </div>
        </div>
    )
}