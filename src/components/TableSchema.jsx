import React from 'react';
import Delete from './Delete';
import Edit from './Edit';

function TableSchema(props) {
    var row;
    const start = (e) => {
        row = e.target
    }
    const dragover = (e) => {
        e.preventDefault();
        let children = Array.from(e.target.parentNode.parentNode.children);
        if (children.indexOf(e.target.parentNode) > children.indexOf(row)) {
            e.target.parentNode.after(row);
        }
        else {
            e.target.parentNode.before(row);
        }
    }
    return (
        <tr draggable={true} onDragStart={start} onDragOver={dragover}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td><Edit data={props.data} /></td>
            <td><Delete id={props.id} /></td>
        </tr>
    )
}

export default TableSchema