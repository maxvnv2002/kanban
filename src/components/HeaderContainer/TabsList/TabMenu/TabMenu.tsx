import {Menu, MenuTarget} from "@mantine/core";
import TargetButton from "./TargetButton/TargetButton";
import TabMenuDropdown from "./TabMenuDropdown/TabMenuDropdown";
import {FC} from "react";

interface TabMenuProps {
    tableName: string
}

const TabMenu: FC<TabMenuProps> = ({tableName}) => {


    return (
        <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <MenuTarget>
                <TargetButton/>
            </MenuTarget>
            <TabMenuDropdown tableName={tableName}/>
        </Menu>
    );
};

export default TabMenu;