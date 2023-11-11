import {FC} from "react";
import {Text} from "@mantine/core";
import * as React from "react";

interface TaskTextProps {
    value: React.ReactNode,
    className: string
}

const TaskText: FC<TaskTextProps> = ({value, className}) => {
    return (
        <Text
            className={className}
            fz={'sm'}
            fw={500}
        >
            {value}
        </Text>
    );
};

export default TaskText;