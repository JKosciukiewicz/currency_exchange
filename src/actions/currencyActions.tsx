import { Dispatch } from 'redux';
import * as actionTypes from './actionTypes/ICurrencyTypes'
import { ICurrency } from '../entities/ICurrency'

export const getComments = (): Promise<ICurrency[]> => ((dispatch: Dispatch) => {

    return fetch('http://api.exchangeratesapi.io/v1/latest?access_key=53e38cc414faac1b67117c7648c8ebd1')
        .then(response => response.json())
        .then((commentsList: ICurrency[]) => {
            dispatch({
                type: actionTypes.GET_EXCHANGE_RATES,
                commentsList
            });
        });
}) as any;