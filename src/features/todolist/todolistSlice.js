import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    entities: [],
    loading: false
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((data) => data.json())
        return res
    })

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.entities = payload
        },
        [getPosts.rejected]: (state) => {
            state.loading = false
        }
    }
})


export const postReducer = postSlice.reducer