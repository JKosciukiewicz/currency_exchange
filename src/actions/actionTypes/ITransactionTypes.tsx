import {ITransaction} from '../../entities/ITransaction'

export const ADD_TRANSACTION='ADD_TRANSACTION'
export const REMOVE_TRANSACTION='REMOVE_TRANSACTION'

export interface ITrasactionTypes{
    ADD_TRANSACTION:{
        transaction:ITransaction[];
    }
    REMOVE_TRANSACTION:{
        transaction:ITransaction[];
    }
}