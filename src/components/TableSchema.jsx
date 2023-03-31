import React from "react";
import Delete from "./Delete";

function TableSchema(props) {
    return (
        <tr
            draggable={true}
            onDragStart={(e) => props.handleDragStart(e, props.index)}
            onDragOver={(e) => props.handleDragOver(e, props.index)}
            onDrop={(e) => props.handleDrop(e, props.index)}
        >
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>
                <button
                    onClick={() => {
                        props.handleEditClick(props.data);
                    }}
                >
                    edit
                </button>
            </td>
            <td>
                <Delete id={props.id} />
            </td>
        </tr>
    );
}

export default TableSchema;
