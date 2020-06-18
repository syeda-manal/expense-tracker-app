import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalData';
import Transaction from './Transaction';

function TransactionList() {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3 className = "h3">
                Statement
            </h3>
            <ul className = "list">
                {transactions.map(transaction => (<Transaction key = {transaction.id} transaction = {transaction}/>))}
                
            </ul>
            
        </>
    )
}

export default TransactionList
