import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterslice'
const store = configureStore({
    reducer: {
        counter:counterReducer
       
    },
});
//view->action->reducer->store
export default store;