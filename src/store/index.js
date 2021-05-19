import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import historyReducer from "./modules/Search/reducers";

// const Reactotron = require("reactotron-react-native").default;
// const Enhancers = compose(Reactotron.createEnhancer());

const store = createStore(combineReducers({ historyReducer }));

export default store;
