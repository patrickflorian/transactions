import { combineReducers, Reducer } from "redux";
//cli_import_section
import TransactionReducer from './reducers/TransactionReducer';
import { ApplicationState } from "./types";

const rootReducer: Reducer<ApplicationState> =
  combineReducers<ApplicationState>({
    //cli_reducer_section
    transaction:  TransactionReducer,
  });

export default rootReducer;
