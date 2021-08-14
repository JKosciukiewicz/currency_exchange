import {FC} from 'react';

export const TransactionList:FC=()=>{
    return(
    <div className="transactionListWrapper">
        <div className="topTransaction">
            <h4>Top transaction</h4>
        </div>
        <div className="transactionList">
            <h4>All transactions</h4>
        </div>
        <div className="transactionSummary">
            <h4>Summary</h4>
            <p>TOTAL:</p>
        </div>
    </div>
    )
}