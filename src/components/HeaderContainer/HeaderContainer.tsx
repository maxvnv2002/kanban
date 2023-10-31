import GroupTabs from "./GroupTabs/GroupTabs";
import HeaderBar from "./HeaderBar/HeaderBar";
import classes from './HeaderContainer.module.scss'


const HeaderContainer = () => {
    return (
        <div className={classes.header}>
            <HeaderBar/>
            <GroupTabs/>
        </div>
    );
};

export default HeaderContainer;