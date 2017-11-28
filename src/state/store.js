import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import { routerReducer as router, routerMiddleware } from "react-router-redux";
import companiesReducer from "./companies";
import sessionReducer from "./session";

const history = createHistory();
const Router = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({ companiesReducer, sessionReducer });
  router

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(Router))
  );
}
