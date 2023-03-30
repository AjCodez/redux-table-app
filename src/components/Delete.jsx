import React from 'react'
import { useDispatch } from "react-redux";
import { actions } from "./index";
// import { bindActionCreators } from "@reduxjs/toolkit";

function Delete(props) {

  const handleDelete = () => {
    dispatch(actions.removeData(props.id));
  }
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Delete