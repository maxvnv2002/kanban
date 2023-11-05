import {Route, Routes} from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import BoardPage from "../pages/BoardPage/BoardPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path='' element={<BoardPage/>}>

                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;