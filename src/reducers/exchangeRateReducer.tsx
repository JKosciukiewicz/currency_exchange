import { IExchangeRate } from "../entities/IExchangeRate";
import * as actionTypes from '../actions/actionTypes/IExchangeRateTypes';

export interface IExchangeRateReducer{
    currentRate: IExchangeRate;
}
const defaultState=():IExchangeRateReducer=>({
    currentRate:{
        exchangeRate:0
    }
})
// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState(),action:any)=>{
    switch(action.type){
        case actionTypes.SET_EXCHANGE_RATE:{
            const payload:actionTypes.IExchangeRateTypes['SET_EXCHANGE_RATE']=action.newRate
            return {
                ...state,
                currentRate:payload
            }
        }
        default:{
            return state;
        }
    }
}