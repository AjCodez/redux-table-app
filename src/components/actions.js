export const addData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_DATA",
            payload: data,
        })
    }
}

export const removeData = (id) => {
    return (dispatch) => {
        dispatch({
            type: "DELETE_DATA",
            payload: id,
        })
    }
}

export const editData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "EDIT_DATA",
            payload: data,
        })
    }
}