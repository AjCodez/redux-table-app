import React from "react";
import Table2 from "./components/Table2";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App2() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Table2 />
            </Provider>
        </React.StrictMode>
    );
}

export default App2;
