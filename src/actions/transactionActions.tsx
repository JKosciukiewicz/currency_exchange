import * as actionTypes from './actionTypes/ITransactionTypes'
import {ITransaction} from '../entities/ITransaction'

export const addTransaction=(newTransaction:ITransaction)=>{
    return {
        type:actionTypes.ADD_TRANSACTION,
        newTransaction
    }
}
export const removeTransaction=(transaction:ITransaction)=>{
    return {
        type:actionTypes.REMOVE_TRANSACTION,
        transaction
    }
}