import React , { useContext } from 'react';
import {GlobalContext} from '../context/GlobalData';

function Transaction({transaction}) {
   
const { deleteTransaction } = useContext( GlobalContext );

    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <li className ={sign === '-' ? "minus": "plus"}>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)} PKR </span>
            <button onClick = {()=> deleteTransaction(transaction.id)} className = "delete-btn">x</button>
        </li>
    )
}

export default Transaction
