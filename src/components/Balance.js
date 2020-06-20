import React, { useContext} from 'react'
import {GlobalContext} from '../context/GlobalData';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const balance = amount.reduce((accumulator, nextValue)=> (accumulator+= nextValue),0);
    let formatted_balance = balance.toFixed(2);
    formatted_balance=  parseFloat(formatted_balance).toLocaleString();        
    return (
        <div>
            <h2> <center>Your Current Balance is: </center> </h2>
            <h2 className = "balance">{formatted_balance}PKR </h2>
            
        </div>
    )
}
export default Balance;