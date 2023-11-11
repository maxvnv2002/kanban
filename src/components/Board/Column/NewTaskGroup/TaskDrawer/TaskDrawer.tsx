import {Button, Drawer, TextInput} from "@mantine/core";
import {ChangeEvent, FC, useState} from "react";
import tablesStore from "../../../../../store/tablesStore";
import {getMaxTaskIndex} from "../../../../../helpers/getMaxTaskIndex";
import {ITask} from "../../../../../types/types";

interface TaskDrawerProps {
    columnIndex: number,
    isOpen: boolean,
    closeHandler: () => void
}

const TaskDrawer: FC<TaskDrawerProps> = ({isOpen, closeHandler, columnIndex}) => {
    const { addNewTask } = tablesStore

    const [titleValue, setTitleValue] = useState('')
    const [textValue, setTextValue] = useState('')

    function buttonClickHandler() {
        const newTask: ITask = {
            id: getMaxTaskIndex(),
            title: titleValue,
            text: textValue
        }
        addNewTask(columnIndex, newTask)

        setTitleValue('')
        setTextValue('')

        closeHandler()
    }

    return (
        <Drawer opened={isOpen} onClose={closeHandler} title={'Add new table'}>
            <TextInput
                value={titleValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setTitleValue(event.target.value)}
            />
            <TextInput
                value={textValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setTextValue(event.target.value)}
            />
            <Button onClick={buttonClickHandler}>Add new task</Button>
        </Drawer>
    );
};

export default TaskDrawer;