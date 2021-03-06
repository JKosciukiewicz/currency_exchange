import { ICurrency } from "../entities/ICurrency";
import * as actionTypes from "../actions/actionTypes/ICurrencyTypes";

export interface ICurrencyReducer{
    currencyList:ICurrency;
}

const defaultState=():ICurrencyReducer=>({
    currencyList:{
        success:false,
        timestamp:0,
        base:'',
        date:'',
        rates:{}
    }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState(),action:any)=>{
    switch(action.type){
        case actionTypes.GET_EXCHANGE_RATES:{
            const payload:actionTypes.ICurrencyTypes['GET_EXCHANGE_RATES']=action
            return {
                ...state,
                currencyList:payload.currencyList
            }
        }
        default:{
            return state;
        }
    }
}