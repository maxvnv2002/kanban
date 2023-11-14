import {ITask} from "../../../../types/types";
import {FC} from "react";
import {Card, Loader} from "@mantine/core";
import tablesStore from "../../../../store/tablesStore";
import {observer} from "mobx-react-lite";
import classes from './TaskItem.module.scss';
import PriorityBadge from "./PriorityBadge/PriorityBadge";
import TaskTitle from "./TaskTitle/TaskTitle";
import TaskText from "./TaskText/TaskText";
import TaskDueTime from "./TaskDueTime/TaskDueTime";


type TaskItemProps = Pick<ITask, 'id'>


const TaskItem: FC<TaskItemProps> = ({id}) => {
    const { tasks } = tablesStore
    const currTask = tasks.find(task => task.id === id)

    if (currTask) {
        return (
            <Card withBorder radius="md" className={classes.taskItem} pl={"lg"}>
                <TaskTitle value={currTask.title} className={classes.title}/>
                <TaskText value={currTask.description} className={classes.text}/>
                <PriorityBadge priority={currTask.priority}/>
                <TaskDueTime dueTime={currTask.dueDate}/>
            </Card>
        );
    }

    return <Loader/>
};

export default observer(TaskItem);