import appReducer from "./appReducer";
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStote } from "redux";
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    main: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStote(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;