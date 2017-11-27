import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import companiesReducer from "./companies"
import sessionReducer from "./session";

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers(companiesReducer, sessionReducer);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
