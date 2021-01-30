import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer";

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware());
  return store;
}
