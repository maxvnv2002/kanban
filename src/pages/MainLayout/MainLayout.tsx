import {FC, useEffect} from "react";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import {Outlet} from "react-router-dom";
import tablesStore from "../../store/tablesStore";
import {Notifications} from "@mantine/notifications";

const MainLayout: FC = () => {
    const { autoRun } = tablesStore

    useEffect(() => {
        autoRun()
    }, [])


    return (
        <>
            <HeaderContainer/>
            <Notifications zIndex={1000}/>
            <Outlet/>
        </>
    );
};

export default MainLayout;