import * as actionTypes from './actionTypes/IExchangeRateTypes'
import { IExchangeRate} from '../entities/IExchangeRate'

export const setExchangeRate=(newRate:IExchangeRate)=>{
    return{
        type: actionTypes.SET_EXCHANGE_RATE,
        newRate
    }
}