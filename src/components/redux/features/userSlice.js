import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getData = createAsyncThunk("data/getData", async () => {
    return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
    );
});

const userSlice = createSlice({
    name: "data",
    initialState: {
        datas: [],
        loading: false,
    },
    reducers: {
        addUser: (state, action) => {
            state.datas.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.datas = state.datas.filter(
                (user) => user.id !== action.payload
            );
        },
        editUser: (state, action) => {
            state.datas = state.datas.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            });
        },
    },
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.loading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false;
            state.datas = action.payload;
        },
        [getData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default userSlice.reducer;
export const { addUser, deleteUser, editUser } = userSlice.actions;