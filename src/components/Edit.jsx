import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./index";

function Edit(props) {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
    });
    const handleEditClick = () => {
        setData({
            id: props.data.id,
            name: props.data.name,
            email: props.data.email,
            phone: props.data.phone,
        });
        console.log(data);
    };
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(actions.editData(data));
    };
    return (
        <div>
            {/* <button  >edit</button> */}
            <button
                onClick={handleEditClick}
                data-bs-toggle="modal"
                data-bs-target="#editModal"
            >
                {" "}
                edit
            </button>
            <div
                className="modal fade"
                id="editModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Edit details
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        onChange={handleChange}
                                        value={data.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={data.email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="phone"
                                        className="form-label"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        onChange={handleChange}
                                        value={data.phone}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
