import {FC} from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <>
            <HeaderContainer/>
            <Outlet/>
        </>
    );
};

export default MainLayout;