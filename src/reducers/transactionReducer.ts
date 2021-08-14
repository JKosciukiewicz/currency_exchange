import { ITransaction } from "../entities/ITransaction";
import * as actionTypes from '../actions/actionTypes/ITransactionTypes'

export interface ITransactionReducer{
    transactionsList:ITransaction[];
}

const defaultState=():ITransactionReducer=>({
    transactionsList:[]
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState(),action:any)=>{
    switch(action.type){
        case actionTypes.ADD_TRANSACTION:{
            const payload:actionTypes.ITrasactionTypes['ADD_TRANSACTION']=action.newTransaction
            return {
                ...state,
                transactionsList:[...state.transactionsList, payload]
            }
        }
        case actionTypes.REMOVE_TRANSACTION:{
            const payload:actionTypes.ITrasactionTypes['REMOVE_TRANSACTION']=action
            const objToRemove=action.transaction.id
            const currentTransactions=state.transactionsList
            const filteredTransaction=currentTransactions.filter(element=>element.id!==objToRemove)
            debugger
            return{
                ...state,
                transactionsList: filteredTransaction
            }
        }
        default:{
            return state;
        }
    }
}