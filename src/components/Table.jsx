import React, { useState, useRef } from 'react'
import TableSchema from './TableSchema'
// import dataset from './data'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './index';

function Table() {
    const ref = useRef(null);
    const dataset = useSelector((state) => {
        return state.data;
    })
    const [idx, setIdx] = useState(0);
    const [data, setData] = useState({ id: "", name: "", email: "", phone: "" });
    const dispatch = useDispatch();
    const handleEditClick = (currData) => {
        setData({ id: currData.id, name: currData.name, email: currData.email, phone: currData.phone });
        console.log(data);
        ref.current.click();
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(actions.editData(data));
        alert("Data edited successfully");
    }
    const handleCancel = (e) => {
        e.preventDefault();
        alert("failed");
    }
    const handleAddClick = () => {
        setData({ id: dataset.length+1, name: "", email: "", phone: "" });
    }
    const handleAddSubmit = (e) => {
        e.preventDefault();
        console.log(dataset.length);
        setData({id: dataset.length+1 , name: data.name, email: data.email, phone: data.phone });
        dispatch(actions.addData(data));
        alert("Data added successfully");
    }
    return (
        <>
        <br />
        <button data-bs-toggle="modal" data-bs-target="#addModal" onClick={handleAddClick}> Add Data</button>
            <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
                        </div>
                        <div className="modal-body">
                            <form onAbort={handleCancel}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={data.name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={data.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} value={data.phone} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        {/* Edit Modal */}
            <button ref={ref} className='btn d-hide' data-bs-toggle="modal" data-bs-target="#editModal"></button>
            <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
                        </div>
                        <div className="modal-body">
                            <form onAbort={handleCancel}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={data.name} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={data.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange} value={data.phone} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
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
                        {dataset.length > 0 ? <TableSchema handleEditClick={handleEditClick} data={dataset[idx]} id={dataset[idx].id} name={dataset[idx].name} email={dataset[idx].email} phone={dataset[idx].phone} /> : 'No Data'}
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
                            (idx, idxx, ar) => <TableSchema handleEditClick={handleEditClick} data={ar[idxx]} id={idx.id} name={idx.name} email={idx.email} phone={idx.phone} />)}
                    </tbody>
                </table>
            </div>
        </>



    )
}

export default Table