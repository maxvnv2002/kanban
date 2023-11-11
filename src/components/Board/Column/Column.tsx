import {FC} from "react";
import {Stack} from "@mantine/core";
import {TColumn} from "../../../types/types";
import TaskItem from "./TaskItem/TaskItem";
import NewTaskGroup from "./NewTaskGroup/NewTaskGroup";

interface ColumnProps {
    column: TColumn,
    colIndex: number
}


const Column: FC<ColumnProps> = ({column, colIndex}) => {


    return (
        <Stack>
            {column.map((taskId) => (
                <TaskItem id={taskId} key={taskId}/>
            ))}
            <NewTaskGroup colIndex={colIndex}/>
        </Stack>
    );
};

export default Column;