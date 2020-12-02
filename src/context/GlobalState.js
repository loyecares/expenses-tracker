import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

//Initial state
const initialState ={
    transactions: [
       
        {id:1, text: 'Salary', amount: 300000},
        {id:2, text: 'Book', amount: -10000},
        {id:3, text: 'Camera', amount: -150000}
    ]
}
//Create context
 export const GlobalContext = createContext(initialState);

 //provider component
 export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer, initialState);
    //Actions
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
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
 }
