import {Action} from "redux";

export const FETCH_TRANSACTION_REQUEST = "FETCH_TRANSACTION_REQUEST";
export const ADD_TRANSACTION_ACTION = "ADD_TRANSACTION_ACTION";
export const UPDATE_TRANSACTION_SUCCESS = "UPDATE_TRANSACTION_SUCCESS";
export const DELETE_TRANSACTION_ACTION = "DELETE_TRANSACTION_ACTION";
export const GET_UNIQUE_TRANSACTION = "GET_UNIQUE_TRANSACTION";

export interface TransactionState {
    list: TransactionListResponse;
    active_transaction?: Transaction;
}

export interface TransactionListResponse {
    items: Transaction[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}

export interface Transaction{
    id: string;
    value: number;
    receiver:  number;
    timestamp: number;
    sender: number;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateTransaction{
    id?: string;
    value?: number;
    receiver?:  number;
    timestamp?: number;
    sender?: number;
}
export interface FetchTransactionRequest extends Action {
    type: typeof FETCH_TRANSACTION_REQUEST;
    items: Transaction[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
  }

export interface AddTransactionAction extends Action {
    type: typeof ADD_TRANSACTION_ACTION;
    item: Transaction;
  }
  
  export interface UpdateTransactionSuccess extends Action {
    type: typeof UPDATE_TRANSACTION_SUCCESS;
    item: Transaction;
  }
  
  export interface DeleteTransactionAction extends Action {
    type: typeof DELETE_TRANSACTION_ACTION;
    id: String;
  }
  
  
  export interface GetUniqueTransactionAction extends Action {
    type: typeof GET_UNIQUE_TRANSACTION;
    data: Transaction;
  }
  