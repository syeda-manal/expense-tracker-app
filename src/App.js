import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalData';
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <GlobalProvider>
      <div className = "container"> 
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
