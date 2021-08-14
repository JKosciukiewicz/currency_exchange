import {IExchangeRate} from '../../entities/IExchangeRate'

export const SET_EXCHANGE_RATE='SET_EXCHANGE_RATE'

export interface IExchangeRateTypes{
    SET_EXCHANGE_RATE:{
        exchangeRate:IExchangeRate[];
    }
}