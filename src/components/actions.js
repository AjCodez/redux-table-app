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
            type: "REMOVE_DATA",
            payload: id,
        })
    }
}

export const editData = (data) => {
    return {
        type: "EDIT_DATA",
        payload: data,
    }
}