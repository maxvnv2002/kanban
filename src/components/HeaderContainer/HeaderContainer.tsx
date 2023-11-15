import HeaderBar from "./HeaderBar/HeaderBar";
import classes from './HeaderContainer.module.scss'
import TabsContainer from "./TabsContainer/TabsContainer.tsx";


const HeaderContainer = () => {
    return (
        <header className={classes.header}>
            <HeaderBar/>
            <TabsContainer/>
        </header>
    );
};

export default HeaderContainer;