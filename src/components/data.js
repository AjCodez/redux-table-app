import { combineReducers } from "@reduxjs/toolkit";

const initialState = [
    {
        "id": 1,
        "name": "Ajit 1",
        "email": "ajitsinghal@gmail.com",
        "phone": "1234567890",
    },
    {
        "id": 2,
        "name": "Nitin 1",
        "email": "nitinsingh@gmail.com",
        "phone": "9876543210",
    },
    {
        "id": 3,
        "name": "Ajit 3",
        "email": "ajitsinghal@gmail.com",
        "phone": "1234567890",
    },
    {
        "id": 4,
        "name": "Nitin 2",
        "email": "nitinsingh@gmail.com",
        "phone": "9876543210",
    },
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('ADD_DATA'): {
            console.log("here0");
            return [...state, action.payload];
        }
        case ('DELETE_DATA'): {
            console.log("here1");
            return state.filter((item) => item.id !== action.payload);
        }
        case ('EDIT_DATA'): {
            console.log("here2");
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        }
        default: {
            return state;
        }
    }
}

const reducers = combineReducers({
    data: reducer,
});

export default reducers;