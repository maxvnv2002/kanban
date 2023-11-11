import {FC} from "react";
import {MenuDivider, MenuDropdown, MenuItem, MenuLabel} from "@mantine/core";
import {IconSettings} from "@tabler/icons-react";
import classes from './TabMenuDropdown.module.scss';
import TabMenuDeleteButton from "./TabMenuDeleteButton/TabMenuDeleteButton";

interface TabMenuDropdownProps {
    tableName: string
}

const TabMenuDropdown: FC<TabMenuDropdownProps> = ({tableName}) => {
    return (
        <MenuDropdown className={classes.dropdown}>
            <MenuLabel>
                Table
            </MenuLabel>
            <MenuItem
                leftSection={<IconSettings className={classes.icon}/>}
                disabled
            >
                Settings
            </MenuItem>
            <MenuDivider/>
            <TabMenuDeleteButton tableName={tableName}/>
        </MenuDropdown>
    );
};

export default TabMenuDropdown;