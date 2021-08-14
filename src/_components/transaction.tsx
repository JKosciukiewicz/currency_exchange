import {FC} from 'react';
import {ITransactionRecord} from './ITransactionRecord'


export const Transaction:FC<ITransactionRecord>=({title, valueEur,exchangeRate,id}:ITransactionRecord)=>{
    let priceInPLN=valueEur*exchangeRate;
    return(
        <div className="transactionWrapper">
            <p>{id}</p>
            <p>{title}</p>
            <p>{valueEur}</p>
            <p>{priceInPLN}</p>
            <button>REMOVE</button>
        </div>
    )
}