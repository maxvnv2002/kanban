import classes from './TaskDueTime.module.scss'
import {Text} from "@mantine/core";
import {FC} from "react";
import StatusIcon from "./StatusIcon/StatusIcon";
import {Statuses} from "../../../../../constants/statuses";

interface TaskDueTimeProps {
    startTime?: Date
    dueTime: Date
}

const TaskDueTime: FC<TaskDueTimeProps> = ({startTime, dueTime}) => {
    const dueMonth = dueTime.toLocaleString('en', { month: 'long' })
    const dueDateOutput = `${dueTime.getDate()} ${dueMonth}`



    return (
        <div className={classes.timeDue}>
            <StatusIcon status={Statuses.average}/>
            <Text ml={'xs'}>Due: {dueDateOutput}</Text>
        </div>
    );
};

export default TaskDueTime;