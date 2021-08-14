import { ICurrency } from "../../entities/ICurrency";

export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export interface ICurrencyTypes {
    GET_EXCHANGE_RATES: {
        currencyList: ICurrency;
    }
}