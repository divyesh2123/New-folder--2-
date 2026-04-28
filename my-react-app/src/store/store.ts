import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/counterslice'
import userReducer from '../slice/userslice'
const store = configureStore<{
    counter: ReturnType<typeof counterReducer>;
    userInfo: ReturnType<typeof userReducer>;
}>({
    reducer: {
        counter:counterReducer,
        userInfo:userReducer
       
    },
});
//view->action->reducer->store
export default store;