import { combineReducers } from "@reduxjs/toolkit";

const initialState = [
    {
        "id": 1,
        "name": "Ajit Singhal",
        "email": "ajitsinghal@gmail.com",
        "phone": "1234567890",
    },
    {
        "id": 2,
        "name": "Nitin Singh",
        "email": "nitinsingh@gmail.com",
        "phone": "9876543210",
    },
    {
        "id": 3,
        "name": "Ajit Singhal",
        "email": "ajitsinghal@gmail.com",
        "phone": "1234567890",
    },
    {
        "id": 4,
        "name": "Nitin Singh",
        "email": "nitinsingh@gmail.com",
        "phone": "9876543210",
    },
]

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_DATA') {
        return [...state, action.payload];
    }
    else if ('DELETE_DATA') {
        console.log("here");
        return state.filter((item) => item.id !== action.payload);
    }
    else if ('EDIT_DATA') {
        return state.map((item) => {
            if (item.id === action.payload.id) {
                return action.payload;
            }
            return item;
        });
    }
    else {
        return state;
    }
}

const reducers = combineReducers({
    data: reducer,
});

export default reducers;