import { updateTransactionSuccess } from "./actions/TransactionsActions";
import { AddTransactionAction, DeleteTransactionAction, FetchTransactionRequest, GetUniqueTransactionAction, TransactionState, UpdateTransactionSuccess } from "./types/TransactionTypes";

export interface ApplicationState {
	transaction : TransactionState,
}

export * from './types/TransactionTypes';

export type ApplicationAction =
    AddTransactionAction
    |UpdateTransactionSuccess
    |DeleteTransactionAction
    |GetUniqueTransactionAction
    |FetchTransactionRequest