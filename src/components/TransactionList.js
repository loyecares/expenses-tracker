import React, { useContext }  from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transactions} from './Transactions'

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul  className="list">
                {transactions.map(transaction => {
                   return(
                    <Transactions transaction={transaction } key={transaction.id} />
                   ) 
                    
                })}
                 
            </ul>
        </div>
    )
}
