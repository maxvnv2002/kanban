import {Route, Routes} from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import BoardPage from "../pages/BoardPage/BoardPage";
import {routes} from "./contants/routes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route path={routes.root} element={<BoardPage/>}>

                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;