import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../reducers';
import { ICurrencyReducer } from '../reducers/currencyReducer';
import { ITransaction } from '../entities/ITransaction'
import { addTransaction } from '../actions/transactionActions';
import { setExchangeRate } from '../actions/exchangeRateActions';
import { useDispatch } from 'react-redux';
import { IExchangeRateReducer } from '../reducers/exchangeRateReducer';
import { IExchangeRate } from '../entities/IExchangeRate';
import { ITransactionReducer } from '../reducers/transactionReducer'

export const TransactionMenu: FC = () => {
    type AddTransaction = ReturnType<typeof addTransaction>
    type SetExchangeRate = ReturnType<typeof setExchangeRate>
    const dispatch = useDispatch()
    const [rate, setRate] = useState(0)
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)

    const currencyList = useSelector<IState, ICurrencyReducer>(globalState => globalState.rates)
    const exchangeRateList = useSelector<IState, IExchangeRateReducer>(globalState => globalState.exchangeRate)
    const transactionList = useSelector<IState, ITransactionReducer>(globalState => globalState.transactions)
    const exchangeRates = currencyList.currencyList.rates
    let lastId:number
    if (transactionList.transactionsList.length > 0) {
        lastId=transactionList.transactionsList[transactionList.transactionsList.length-1].id+1
    }
    else {
        lastId=0
    }
    debugger
    let transactionsCount = transactionList.transactionsList.length

    const handleRateChange = (event: any) => {
        setRate(event.target.value)
    }
    const handleTitleChange = (event: any) => {
        setTitle(event.target.value)
    }
    const handleValueChange = (event: any) => {
        setValue(event.target.value)
    }

    const newTransaction = () => {
        const addedTransaction: ITransaction = {
            id: lastId,
            title: title,
            valueEur: value
        };
        dispatch<AddTransaction>(addTransaction(addedTransaction))
    }

    const setCustomExchangeRate = () => {
        const newExchangeRate: IExchangeRate = {
            exchangeRate: rate
        }
        dispatch<SetExchangeRate>(setExchangeRate(newExchangeRate))
    }

    return (
        <div className="transactionInput">
            <div className="exchangeRateWrapper">
                <h2>EXCHANGE RATE</h2>
                <div className="exchangeRateInput">
                    <p>1€=</p>
                    <input type="number" onChange={handleRateChange} />
                    <p>PLN</p>
                </div>
                <button>DEFAULT</button>
                <button onClick={setCustomExchangeRate}>CHANGE</button>
            </div>
            <div className="transactionWrapper">
                <h2>ADD TRANSACTION</h2>
                <div className="transactionInput">
                    <p>Title</p>
                    <input type="text" onChange={handleTitleChange} />
                    <p>Value</p>
                    <input type="number" onChange={handleValueChange} />
                    <p>€</p>
                    <button onClick={newTransaction}>ADD</button>
                </div>
            </div>
        </div>
    )
}