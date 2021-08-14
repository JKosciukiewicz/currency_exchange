import {FC} from 'react';
import {ITransactionRecord} from './ITransactionRecord'


export const Transaction:FC<ITransactionRecord>=({title, valueEur,exchangeRate}:ITransactionRecord)=>{
    let priceInPLN=valueEur*exchangeRate;
    return(
        <div className="transactionWrapper">
            <p>{title}</p>
            <p>{valueEur}</p>
            <p>{priceInPLN}</p>
        </div>
    )
}