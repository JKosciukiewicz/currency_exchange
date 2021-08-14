import { combineReducers } from "redux";
import rates, {ICurrencyReducer} from "./currencyReducer";
import transactions,{ITransactionReducer} from "./transactionReducer" 
import exchangeRate,{IExchangeRateReducer} from "./exchangeRateReducer";

export default combineReducers({
    rates,
    transactions,
    exchangeRate,
})

export interface IState{
    rates:ICurrencyReducer;
    transactions:ITransactionReducer;
    exchangeRate:IExchangeRateReducer;
}