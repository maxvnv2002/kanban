import {FC} from "react";
import {Card, Text} from "@mantine/core";
import * as React from "react";

interface TitleProps {
    value: React.ReactNode,
    className: string
}

const TaskTitle: FC<TitleProps> = ({value, className}) => {
    return (
        <Text
            className={className}
            fz={'lg'}
            fw={500}
            mb={"sm"}
        >
            {value}
        </Text>
    );
};

export default TaskTitle;