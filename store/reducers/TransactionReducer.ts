import {
    ADD_TRANSACTION_ACTION,
    ApplicationAction,
    DELETE_TRANSACTION_ACTION,
    FETCH_TRANSACTION_REQUEST,
    UPDATE_TRANSACTION_SUCCESS,
    Transaction,
    TransactionState ,
    GET_UNIQUE_TRANSACTION
  } from "../types";
  import produce from "immer";
  
  const initialState: TransactionState = {
   
    list: {
        totalItems:0,
        totalPages: 1,
        currentPage: 1,
        items:[]
    },
  };
  
  const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
      case FETCH_TRANSACTION_REQUEST:
        return produce(state, (draft) => {
          draft.list= action;
        });
      case ADD_TRANSACTION_ACTION:
        return produce(state, (draft) => {
          const transactions: Transaction[] = [...state.list.items];
          transactions.push(action.item);
          draft.list.items = transactions;
        });
      case UPDATE_TRANSACTION_SUCCESS:
        return produce(state, (draft) => {
          draft.list.items = [...state.list.items].map((item) => {
            if (item.id == action.item.id) {
              return action.item;
            } else {
              return item;
            }
          });
        });
      case DELETE_TRANSACTION_ACTION:
        return produce(state, (draft) => {
          let transactions: Transaction[] = [...state.list.items];
          transactions = transactions.filter((item) => {
            return item.id != action.id;
          });
          draft.list.items = transactions;
        });
      case GET_UNIQUE_TRANSACTION:
        return produce(state, (draft) => {
          draft.active_transaction = action.data;
        });
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
  