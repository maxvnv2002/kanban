import {FC} from 'react';
import {IconCirclePlus} from "@tabler/icons-react";
import NewTabDialog from "./NewTabDialog/NewTabDialog";
import {Tabs} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import classNames from "classnames";
import classes from "./NewTab.module.scss";
import {ADD_NEW} from "../../../../../constants/constants.ts";

const NewTab: FC = () => {
    const [isDialogOpen, {
        toggle: toggleDialog,
        close: closeDialog
    }] = useDisclosure(false)

    const tabIconClasses = classNames({
        [classes.newTab]: true,
        [classes.focused]: isDialogOpen
    })


    return (
        <Tabs.Tab
            value={ADD_NEW}
            className={tabIconClasses}
            onClick={toggleDialog}
        >
            <IconCirclePlus/>
            <NewTabDialog
                isOpened={isDialogOpen}
                closeHandler={closeDialog}
            />
        </Tabs.Tab>
    );
};

export default NewTab;