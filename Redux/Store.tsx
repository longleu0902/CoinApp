import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import scrollViewReducer from './scrollViewReducer';

const store = configureStore({
    reducer: {
        login: loginReducer,
        sigup: signUpReducer,
        scrollView : scrollViewReducer,
    }

})

export default store;