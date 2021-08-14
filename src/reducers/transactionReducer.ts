import { ITransaction } from "../entities/ITransaction";
import * as actionTypes from '../actions/actionTypes/ITransactionTypes'
//import * as actionTypes from "../actions/actionTypes/ICurrencyTypes";

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
        default:{
            return state;
        }
    }
}