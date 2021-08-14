import {FC} from 'react';
import {ITransaction} from '../entities/ITransaction'
import {ITransactionReducer} from '../reducers/transactionReducer'
import {IState} from '../reducers'
import {useSelector} from 'react-redux'
import {IExchangeRateReducer} from '../reducers/exchangeRateReducer'

import {Transaction} from './transaction'

export const TransactionList:FC=()=>{
    const transactionList=useSelector<IState, ITransactionReducer>(globalState=>globalState.transactions)
    const exchangeRate=useSelector<IState, IExchangeRateReducer>(globalState=>globalState.exchangeRate)
    const transactionData=transactionList.transactionsList
    let transactionRecords=transactionData.map((record)=>(<li><Transaction title={record.title} valueEur={record.valueEur} exchangeRate={exchangeRate.currentRate.exchangeRate}/></li>))
    let transactionsTotal:number=0
    transactionData.map((record)=>(transactionsTotal+=Number(record.valueEur)))
    let transactionsTotalPLN=transactionsTotal*exchangeRate.currentRate.exchangeRate
    return(
    <div className="transactionListWrapper">
        <div className="topTransaction">
            <h4>Top transaction</h4>
        </div>
        <div className="transactionList">
            <h4>All transactions</h4>
            <ul>
                {transactionRecords}
            </ul>
        </div>
        <div className="transactionSummary">
            <h4>Summary</h4>
            <p>TOTAL:</p>
            <p>{transactionsTotal}</p>
            <p>{transactionsTotalPLN}</p>
        </div>
    </div>
    )
}