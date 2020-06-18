import React, { useContext} from 'react'
import {GlobalContext} from '../context/GlobalData';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const balance = amount.reduce((accumulator, nextValue)=> (accumulator+= nextValue),0);

        return (
        <div>
            <h2> Your Current Balance is: </h2>
            <h1>Rs. {balance}</h1>
            
        </div>
    )
}
export default Balance;