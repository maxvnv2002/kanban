import {Menu, MenuTarget} from "@mantine/core";
import TargetButton from "./TargetButton/TargetButton";
import TabMenuDropdown from "./TabMenuDropdown/TabMenuDropdown";
import {FC} from "react";

interface TabItemMenuProps {
    tableName: string
}

const TabItemMenu: FC<TabItemMenuProps> = ({tableName}) => {
    return (
        <Menu trigger="hover" openDelay={100} closeDelay={200}>
            <MenuTarget>
                <TargetButton/>
            </MenuTarget>
            <TabMenuDropdown tableName={tableName}/>
        </Menu>
    );
};

export default TabItemMenu;