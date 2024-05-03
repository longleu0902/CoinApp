import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';

const store = configureStore({
    reducer: {
        login: loginReducer,
        sigup: signUpReducer
    }

})

export default store;