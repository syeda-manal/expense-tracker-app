import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalData';


function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const { addTransaction}  = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        console.log(newTransaction);
    }
    

    return (
        <div>
            <h3 className= "h3"> Add new Transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className = "form-control">
                    <label htmlFor= "text">Text</label><br />
                    <input type = "text" required value = {text} onChange = {(e)=>setText(e.target.value)} placeholder= "Enter Text...." />
                </div>
                <div className = "form-control">
                    <label htmlFor= "amount">Amount (negative-expense, positive-income)</label>
                    <input type = "float" required value = {amount} onChange = {(e)=> setAmount(e.target.value)} placeholder= "Enter Amount...." />
                </div>
                
                <button className = "btn"> Add Transaction </button>
                
            </form>
        </div>
    )
}

export default AddTransaction
