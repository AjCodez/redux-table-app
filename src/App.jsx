import React from "react";
import Table from "./components/Table";
import { Provider } from "react-redux";
import store from "./components/store";

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Table />
            </Provider>
        </React.StrictMode>
    );
}

export default App;
