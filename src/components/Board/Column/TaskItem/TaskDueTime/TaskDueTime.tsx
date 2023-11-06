import classes from './TaskDueTime.module.scss'
import {Text} from "@mantine/core";
import {FC} from "react";
import StatusIcon from "./StatusIcon/StatusIcon";
import {Statuses} from "../../../../../constants/Statuses";
import {getTaskStatus} from "./helpers/getTaskStatus";
import * as classNames from "classnames";

interface TaskDueTimeProps {
    dueTime: Date
}

const TaskDueTime: FC<TaskDueTimeProps> = ({dueTime}) => {
    const currentTime = new Date()

    const dueMonth = dueTime.toLocaleString('en', { month: 'long' })
    const dueDateOutput = `${dueTime.getDate()} ${dueMonth}`

    const taskStatus = getTaskStatus(currentTime, dueTime)
    const statusClasses = classes[Statuses[taskStatus]]

    return (
        <div className={classes.timeDue}>
            <StatusIcon
                status={taskStatus}
                className={statusClasses}
            />
            <Text ml={'xs'}
                  className={statusClasses}
            >
                Due: {dueDateOutput}
            </Text>
        </div>
    );
};

export default TaskDueTime;