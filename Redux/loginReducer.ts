import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    payload: {
        username: '',
        token: '',
        isAuthentication: false,
        phone: '',
        address: '',
        firstname: '',
        lastname: ''
    }
}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.payload = action.payload
        },
    }
})
export const { setLogin } = LoginSlice.actions
export default LoginSlice.reducer