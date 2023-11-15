import {FC} from "react";
import {Stack} from "@mantine/core";
import {TColumn} from "../../../types/types";
import TaskItem from "./TaskItem/TaskItem";
import NewTaskGroup from "./NewTaskGroup/NewTaskGroup";
import {Droppable} from "@hello-pangea/dnd";

interface ColumnProps {
    column: TColumn,
    colIndex: number
}


const Column: FC<ColumnProps> = ({column, colIndex}) => {


    return (
        <Droppable droppableId={`${colIndex}`}>
            {(provided) => (
                <Stack
                    {...provided.droppableProps} ref={provided.innerRef}
                    gap={0}
                    style={{height: '100vh'}}
                >
                    {column.map((taskId, index) => (
                        <TaskItem taskId={taskId} key={taskId} listIndex={index}/>
                    ))}
                    {/*<NewTaskGroup colIndex={colIndex}/>*/}
                    {/*{provided.placeholder}*/}
                </Stack>
            )}
        </Droppable>
    );
};

export default Column;