import {FC} from 'react';
import {useSelector} from 'react-redux';
import {IState} from '../reducers';
import {ICurrencyReducer} from '../reducers/currencyReducer';
import {ITransaction} from '../entities/ITransaction'
import { ITransactionReducer } from '../reducers/transactionReducer';
import { addTransaction } from '../actions/transactionActions';
import {useDispatch} from 'react-redux';

export const TransactionMenu:FC=()=>{
    const currencyList=useSelector<IState, ICurrencyReducer>(globalState=>globalState.rates)
    const exchangeRates=currencyList.currencyList.rates
    type AddTransaction=ReturnType<typeof addTransaction>
    const dispatch=useDispatch()

    const newTransaction=()=>{
        const sampleTransaction:ITransaction={
            title:'test',
            valueEur:50
        };
        dispatch<AddTransaction>(addTransaction(sampleTransaction))
    }

    const transactionList=useSelector<IState, ITransactionReducer>(globalState=>globalState.transactions)
    console.log(transactionList)   
    console.log(exchangeRates)
    return(
        <div className="transactionInput">
            <div className="exchangeRateWrapper">
                <h2>EXCHANGE RATE</h2>
                <div className="exchangeRateInput">
                    <p>1€=</p>
                    <input type="number"/>
                    <p>PLN</p>
                </div>
                <button>AUTO</button>
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