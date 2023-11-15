import {FC} from "react";
import {IconTrash} from "@tabler/icons-react";
import classes from "../TabMenuDropdown.module.scss";
import {MenuItem, Text} from "@mantine/core";
import {modals} from "@mantine/modals";
import {showNotification} from "./helpers/showNotification";
import tablesStore from "../../../../../../../../store/tablesStore.ts";


interface TabMenuDeleteButtonProps {
    tableName: string
}

const TabMenuDeleteButton: FC<TabMenuDeleteButtonProps> = ({tableName}) => {
    const { deleteTable } = tablesStore

    const notificationTitle: string = 'We notify you that';

    const confirmModalHandler = () => {
        deleteTable(tableName)
        showNotification(
            notificationTitle,
            'Your table has been successfully deleted',
            'red'
        )
    }
    const cancelModalHandler = () => showNotification(
        notificationTitle,
        'You canceled the deletion of the table',
        'blue'
    )

    const openDeleteModal = () =>
        modals.openConfirmModal({
            title: 'Delete your table',
            centered: true,
            children: (
                <Text size="sm">
                    Are you sure you want to delete this table?
                    This action is destructive and you will not be able to restore your data.
                </Text>
            ),
            labels: { confirm: 'Delete table', cancel: "No don't delete it" },
            confirmProps: { color: 'red' },
            onCancel: () => cancelModalHandler(),
            onConfirm: () => confirmModalHandler(),
    });

    return (
        <MenuItem
            leftSection={<IconTrash className={classes.icon}/>}
            className={classes.delete}
            onClick={openDeleteModal}
        >
            <Text>Delete this table</Text>
        </MenuItem>
    );
};

export default TabMenuDeleteButton;