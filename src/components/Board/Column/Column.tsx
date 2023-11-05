import {FC} from "react";
import {Stack} from "@mantine/core";
import {TColumn} from "../../../types/types";
import TaskItem from "./TaskItem/TaskItem";

interface ColumnProps {
    row: TColumn
}


const Column: FC<ColumnProps> = ({row}) => {


    return (
        <Stack>
            {row.map((taskId) => (
                <TaskItem id={taskId} key={taskId}/>
            ))}
        </Stack>
    );
};

export default Column;