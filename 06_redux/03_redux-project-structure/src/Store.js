
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly";
import { combineReducers, createStore } from "redux";
import ReduxThunk from "react-redux";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
