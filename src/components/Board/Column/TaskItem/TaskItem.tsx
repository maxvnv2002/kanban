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
import {Draggable} from "@hello-pangea/dnd";
import classNames from "classnames";


interface TaskItemProps {
    taskId: Pick<ITask, 'id'>
    listIndex: number
}


const TaskItem: FC<TaskItemProps> = observer(({taskId, listIndex}) => {
    const { tasks } = tablesStore
    const currTask = tasks.find(task => task.id === taskId)

    if (currTask) {
        return (
            <Draggable draggableId={currTask.title + taskId} index={listIndex}>
                {(provided, snapshot) => (
                    <Card
                        className={classNames({
                            [classes.taskItem]: true,
                            [classes.dragging]: snapshot.isDragging
                        })}
                        withBorder
                        radius="md"
                        pl={"lg"}
                        mb={"md"}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <TaskTitle value={currTask.title} className={classes.title}/>
                        <TaskText
                            className={classes.text}
                            value={currTask.description}
                        />
                        <PriorityBadge
                            priority={currTask.priority}
                        />
                        <TaskDueTime dueTime={currTask.dueDate}/>

                    </Card>
                )}
            </Draggable>
        );
    }

    return <Loader/>
});

export default TaskItem;