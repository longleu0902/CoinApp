import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address : '',
        date: '',
        img: '',

    }
}

const SignUpSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setSignUp: (state, action) => {
            state.data = action.payload
        },
    }
})
export const { setSignUp } = SignUpSlice.actions
export default SignUpSlice.reducer