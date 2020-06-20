import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalData';


const IncomeExpenses = () => { 
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item >0).reduce((accumulator, nextValue)=> (accumulator+= nextValue),0).toFixed(2);
    const expense = (amount.filter(item => item<0).reduce((accumulator, nextValue) => (accumulator += nextValue), 0)*-1).toFixed(2);
 
    return (
        <div className = "inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className = "money plus">{income} PKR </p>            
            </div>
            <div>
                <h4>Expense</h4>
                <p className = "money minus">{expense} PKR </p>            
            </div>
        </div>
    )
}
export default IncomeExpenses;
