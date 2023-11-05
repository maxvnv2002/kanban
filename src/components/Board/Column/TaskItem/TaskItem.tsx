import {ITask} from "../../../../types/types";
import {FC} from "react";
import {Card} from "@mantine/core";
import tablesStore from "../../../../store/tablesStore";
import {observer} from "mobx-react-lite";
import classes from './TaskItem.module.scss';
import PriorityBadge from "./PriorityBadge/PriorityBadge";
import {priorities} from "../../../../constants/priorities";
import TaskTitle from "./TaskTitle/TaskTitle";
import TaskText from "./TaskText/TaskText";
import TaskDueTime from "./TaskDueTime/TaskDueTime";


type TaskItemProps = Pick<ITask, 'id'>


const TaskItem: FC<TaskItemProps> = ({id}) => {
    const { tasks } = tablesStore
    const currTask = tasks.find(task => task.id === id)

    const date = new Date()

    return (
        <Card withBorder radius="md" className={classes.taskItem} pl={"lg"}>
            <TaskTitle value={currTask?.title} className={classes.title}/>
            <TaskText value={currTask?.text} className={classes.text}/>
            <PriorityBadge priority={priorities.extraLow}/>
            <TaskDueTime dueTime={date}/>
        </Card>
    );
};

export default observer(TaskItem);