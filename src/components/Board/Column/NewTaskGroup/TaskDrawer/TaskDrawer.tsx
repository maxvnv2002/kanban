import {Button, Drawer, TextInput} from "@mantine/core";
import {FC} from "react";
import tablesStore from "../../../../../store/tablesStore";
import classes from './TaskDrawer.module.scss';
import {DateTimePicker} from "@mantine/dates";
import {useForm} from "@mantine/form";
import SegmentedPriorityControl from "./SegmentedPriorityControl/SegmentedPriorityControl";
import {priorities} from "../../../../../constants/priorities";
import {IPriority, ITask} from "../../../../../types/types";

interface TaskDrawerProps {
    columnIndex: number,
    isOpen: boolean,
    closeHandler: () => void
}

const TaskDrawer: FC<TaskDrawerProps> = ({isOpen, closeHandler, columnIndex}) => {
    const { addNewTask } = tablesStore

    const formValues = useForm({
        initialValues: {
            title: '',
            description: '',
            dueDate: new Date(),
            priority: JSON.stringify(priorities.extraLow)
        },
        validate: {
            title: (value: string) => (value.length ? null : 'Name can`t be empty'),
            description: (value: string) => (value.length ? null : 'Description can`t be empty'),
        }
    })


    async function formSubmitHandler(receivedTask: Omit<ITask, "id" | "priority"> & {priority: string}) {
        const parsed: IPriority = await JSON.parse({...receivedTask}.priority)

        addNewTask(columnIndex, {
            ...receivedTask,
            priority: parsed
        })
        closeHandler()
    }

    return (
        <Drawer
            className={classes.drawer}
            title={'Add new task'}
            opened={isOpen}
            onClose={closeHandler}>
            <form onSubmit={formValues.onSubmit(values => formSubmitHandler(values))}>
                <TextInput
                    className={classes.item}
                    placeholder='Task name'
                    label='Task name'
                    {...formValues.getInputProps('title')}
                />
                <TextInput
                    className={classes.item}
                    placeholder='Task description'
                    label='Task description'
                    {...formValues.getInputProps('description')}
                />
                <DateTimePicker
                    className={classes.item}
                    clearable
                    label="Pick due date and time"
                    placeholder="Pick date and time"
                    {...formValues.getInputProps("dueDate")}
                />
                <SegmentedPriorityControl {...formValues.getInputProps('priority')}/>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={'gradient'}

                >
                    Add new task
                </Button>
            </form>
        </Drawer>
    );
};

export default TaskDrawer;