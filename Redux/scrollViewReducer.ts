import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    render: ""
}

const scrollViewSlice = createSlice({
    name: 'Render',
    initialState,
    reducers: {
        setRender: (state, action) => {
            state.render = action.payload.toString()
        },
    }
})
export const { setRender } = scrollViewSlice.actions
export default scrollViewSlice.reducer