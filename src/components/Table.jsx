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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataset.length > 0 ? <TableSchema data={dataset[idx]} id={dataset[idx].id} name={dataset[idx].name} email={dataset[idx].email} phone={dataset[idx].phone} /> : 'No Data'}
                    </tbody>
                </table>
                {dataset.length > 0 ? <button onClick={() => setIdx(prevIdx => prevIdx === dataset.length - 1 ? 0 : idx + 1)}>Switch Data</button> : ''}
            </div>
            <br />
            <br />
            <br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataset.map(
                            (idx,idxx,ar) => <TableSchema data={ar[idxx]} id={idx.id} name={idx.name} email={idx.email} phone={idx.phone} />)}
                    </tbody>
                </table>
            </div>
        </>



    )
}

export default Table