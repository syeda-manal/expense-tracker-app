
const AppReducer = (state, actions)=>{
    switch(actions.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                //overriding transactions with new transactions without deleted item
                transactions : state.transactions.filter(transaction => transaction.id !==
                actions.payload)
                }
        case 'ADD_TRANSACTION':
           {console.log(actions.payload);
                return{
                ...state,
                transactions: [actions.payload, ...state.transactions]
            }}
        default:
            return state;
    }
}

export default AppReducer;