import { combineReducers } from "redux";
import rates, {ICurrencyReducer} from "./currencyReducer";
import transactions,{ITransactionReducer} from "./transactionReducer"

export default combineReducers({
    rates,
    transactions,
})

export interface IState{
    rates:ICurrencyReducer;
    transactions:ITransactionReducer;
}