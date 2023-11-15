import classes from './Board.module.scss';
import {Container, Loader, SimpleGrid} from "@mantine/core";
import Column from "./Column/Column";
import {ITable} from "../../types/types";
import {FC} from "react";
import {DragDropContext} from "@hello-pangea/dnd";
import tablesStore from "../../store/tablesStore.ts";
import {observer} from "mobx-react-lite";


interface BoardProps {
    table: ITable | undefined
}


const Board: FC<BoardProps> = observer(({table}) => {
    const { setTableReorder } = tablesStore


    if (!table) {
        return <Loader size={100}/>
    }
    return (
        <div className={classes.board}>
            <Container size='xl'>
                <DragDropContext onDragEnd={({destination, source}) => {
                    setTableReorder(source, destination)
                }}>
                    <SimpleGrid cols={4} spacing={10}>
                        {table.tasks.map((itemsRow, index) => (
                            <Column key={index} colIndex={index} column={itemsRow}/>
                        ))}
                    </SimpleGrid>
                </DragDropContext>
            </Container>
        </div>
    );
});

export default Board;