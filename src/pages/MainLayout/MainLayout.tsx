import {FC, useEffect} from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import {Outlet} from "react-router-dom";
import tablesStore from "../../store/tablesStore";

const MainLayout: FC = () => {
    const { autoRun } = tablesStore

    useEffect(() => {
        autoRun()
    }, [])


    return (
        <>
            <HeaderContainer/>
            <Outlet/>
        </>
    );
};

export default MainLayout;