import {FC} from 'react';
import {ITransactionRecord} from './ITransactionRecord'
import {ITransaction} from '../entities/ITransaction'
import {removeTransaction} from '../actions/transactionActions'
import {useDispatch} from 'react-redux';

export const Transaction:FC<ITransactionRecord>=({title, valueEur,exchangeRate,id}:ITransactionRecord)=>{
    type RemoveTransaction=ReturnType<typeof removeTransaction>
    const dispatch=useDispatch()
    let priceInPLN=valueEur*exchangeRate;

    const deleteTransaction=()=>{
        const transactionToRemove:ITransaction={
            id:id,
            title:'',
            valueEur:0,
        }
        dispatch<RemoveTransaction>(removeTransaction(transactionToRemove))
    } 
    return(
        <div className="transactionWrapper">
            <p>{id}</p>
            <p>{title}</p>
            <p>{valueEur}</p>
            <p>{priceInPLN}</p>
            <button onClick={deleteTransaction}>REMOVE</button>
        </div>
    )
}