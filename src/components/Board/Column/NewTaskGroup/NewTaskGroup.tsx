import {Button} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {FC} from "react";
import classes from './NewTaskGroup.module.scss'
import TaskDrawer from "./TaskDrawer/TaskDrawer";

interface NewTaskButtonProps {
    colIndex: number
}

const NewTaskGroup: FC<NewTaskButtonProps> = ({colIndex}) => {
    const [isDrawerOpen, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <div className={classes.group}>
            <TaskDrawer
                columnIndex={colIndex}
                isOpen={isDrawerOpen}
                closeHandler={closeDrawer}
            />
            <Button
                variant={'light'}
                className={classes.button}
                onClick={openDrawer}
            >
                +
            </Button>
        </div>
    );
};

export default NewTaskGroup;