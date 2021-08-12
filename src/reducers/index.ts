import { combineReducers } from "redux";
import currencies, {ICurrencyReducer} from "./currencyReducer";

export default combineReducers({
    currencies
})

export interface IState{
    currencies:ICurrencyReducer;
}