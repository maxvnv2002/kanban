import HeaderBar from "./HeaderBar/HeaderBar";
import classes from './HeaderContainer.module.scss'
import TabsList from "./TabsList/TabsList";


const HeaderContainer = () => {
    return (
        <div className={classes.header}>
            <HeaderBar/>
            <TabsList/>
        </div>
    );
};

export default HeaderContainer;