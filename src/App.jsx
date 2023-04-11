import "./style/main.scss";
import AuthorizationPage from "./Pages/AuthorizationPage/AuthorizationPage";
import MainPage from "./Pages/MainPage/MainPage";
import {Routes, Route} from "react-router";
import Layout from "./component/Layout/Layout";
import Development from "./Pages/Development/Development";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/auth" element={<AuthorizationPage />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="rating" element={<Development />} />
                    <Route path="active_players" element={<Development />} />
                    <Route path="game_history" element={<Development />} />
                    <Route path="list_of_players" element={<Development />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
