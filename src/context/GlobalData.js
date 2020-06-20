//This is the Store of aour APP
import React, { useReducer, createContext} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}
//Create Context
export const GlobalContext = createContext(initialState);

//Create Provider Wrapper Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Delete Action
  function deleteTransaction(id){
      dispatch({ 
          type: 'DELETE_TRANSACTION',
          payload: id
        });
  }

  function addTransaction(transaction){
      dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
      });
  }

  return (
      <GlobalContext.Provider value = {
          {
          transactions: state.transactions,
          deleteTransaction: deleteTransaction,
          addTransaction: addTransaction
          }
        }>
          {children}

      </GlobalContext.Provider>
  );
}

//const globalData = createContext(initialState);

// export default GlobalProvider;

