import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {actions} from "./index";
// import { bindActionCreators } from "@reduxjs/toolkit";

function Delete(props) {
    const dataset = useSelector(state => state.data);
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=>{dispatch(actions.removeData(props.id))}}>delete</button>
    </div>
  )
}

export default Delete