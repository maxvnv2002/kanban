import {Badge} from "@mantine/core";
import {FC} from "react";
import {IPriority} from "../../../../../constants/priorities";
import classes from './PriorityBadge.module.scss';
interface PriorityBadgeProps {
    priority: IPriority
}

const PriorityBadge: FC<PriorityBadgeProps> = ({priority}) => {
    return (
        <Badge color={priority.color} className={classes.badge} radius={'xs'} size={'xs'}>
            {/*{priority.content}*/}
        </Badge>
    );
};

export default PriorityBadge;