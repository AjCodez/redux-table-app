import React, { useState } from 'react'
import TableSchema from './TableSchema'
// import dataset from './data'
import { useSelector } from 'react-redux';

function Table() {
    const dataset = useSelector((state) => {
        return state.data;
    })
    const [idx, setIdx] = useState(0);
    return (
        <>
            <div>
                {dataset.length > 0 ? <TableSchema id={dataset[idx].id} name={dataset[idx].name} email={dataset[idx].email} phone={dataset[idx].phone} /> : 'No Data'}
                {dataset.length > 0 ? <button onClick={() => setIdx(prevIdx => prevIdx === dataset.length - 1 ? 0 : idx + 1)}>Switch Data</button> : ''}
            </div>
            <br />
            <br />
            <br />   
            <div>
                {dataset.map( 
                    idx=><TableSchema id={idx.id} name={idx.name} email={idx.email} phone={idx.phone} />)}
            </div>
        </>



    )
}

export default Table