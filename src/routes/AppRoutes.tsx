import {Route, Routes} from "react-router-dom";
import BoardPage from "../pages/BoardPage/BoardPage";
import MainLayout from "../pages/MainLayout/MainLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path='board' element={<BoardPage/>}>

                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;