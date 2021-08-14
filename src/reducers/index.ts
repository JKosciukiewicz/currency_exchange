import { combineReducers } from "redux";
import rates, {ICurrencyReducer} from "./currencyReducer";

export default combineReducers({
    rates,
})

export interface IState{
    rates:ICurrencyReducer;
}