import {GET_UNIQUE_TRANSACTION, GetUniqueTransactionAction, Transaction, FETCH_TRANSACTION_REQUEST, FetchTransactionRequest, AddTransactionAction, ADD_TRANSACTION_ACTION, DeleteTransactionAction, DELETE_TRANSACTION_ACTION, UpdateTransactionSuccess, UPDATE_TRANSACTION_SUCCESS} from "../types";

export const fetchTransactionRequest = (items: Transaction[], totalPages: number, totalItems: number, currentPage: number): FetchTransactionRequest => ({
  type: FETCH_TRANSACTION_REQUEST,
  items,
  totalPages,
  totalItems,
  currentPage
})
export const addTransactionAction = (item: Transaction): AddTransactionAction => ({
  type: ADD_TRANSACTION_ACTION,
  item,
})
export const updateTransactionSuccess = (item: Transaction): UpdateTransactionSuccess => ({
  type: UPDATE_TRANSACTION_SUCCESS,
  item,
})
export const deleteTransactionAction = (id: string): DeleteTransactionAction => ({
  type: DELETE_TRANSACTION_ACTION,
  id,
})

export const getRecentTransactionAction = (data: Transaction): GetUniqueTransactionAction => ({
  type: GET_UNIQUE_TRANSACTION,
  data
})

