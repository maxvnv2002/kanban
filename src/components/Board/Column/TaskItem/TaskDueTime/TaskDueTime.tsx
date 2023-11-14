import classes from './TaskDueTime.module.scss'
import {Text} from "@mantine/core";
import {FC} from "react";
import {Statuses} from "../../../../../constants/Statuses";
import {getTaskStatus} from "./helpers/getTaskStatus";
import StatusIcon from "./StatusIcon/StatusIcon";

interface TaskDueTimeProps {
    dueTime: Date
}

const TaskDueTime: FC<TaskDueTimeProps> = ({dueTime}) => {
    const currentTime = new Date()
    const dueTimeDate = new Date(dueTime)


    const dueMonth = dueTimeDate.toLocaleString('en', { month: 'long' })
    const dueDateOutput = `${dueTimeDate.getDate()} ${dueMonth}`

    const taskStatus = getTaskStatus(currentTime, dueTimeDate)
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