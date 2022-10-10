// import { Provider } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";

// import { getStore } from "./redux";
import { Home } from "./Pages/Home/Home";

// const store = getStore();
function App() {
    return (
        // <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </HashRouter>
        // </Provider>
    );
}

export default App;
