import { ICurrency } from "../../entities/ICurrency";

export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';

export interface ICommentTypes {
    GET_EXCHANGE_RATES: {
        commentsList: ICurrency[];
    }