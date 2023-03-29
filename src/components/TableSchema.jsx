import React from 'react';
import Delete from './Delete';
import Edit from './Edit';

function TableSchema(props) {
    var row;
    const start = (e) => {
        row=e.target
    }
    const dragover = (e) => {
        e.preventDefault();
        let children = Array.from(e.target.parentNode.parentNode.children);
        if(children.indexOf(e.target.parentNode) > children.indexOf(row)){
            e.target.parentNode.after(row);
        }
        else {
            e.target.parentNode.before(row);
        }
    }
    return (
        <div>
            <table>
                    <tr draggable={true} onDragStart={start} onDragOver={dragover}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                    <tr draggable={true} onDragStart={start} onDragOver={dragover}>
                        <td>{props.id}</td>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.phone}</td>
                        <td><Edit id={props.id} /></td>
                        <td><Delete id={props.id} /></td>
                    </tr>
            </table>
        </div>
    )
}

export default TableSchema