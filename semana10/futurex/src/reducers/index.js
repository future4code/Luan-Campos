import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import data from "./data"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    data
    // Outros reducers aqui
  });
