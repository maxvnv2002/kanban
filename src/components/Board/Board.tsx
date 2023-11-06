import classes from './Board.module.scss';
import {Container, Loader, SimpleGrid} from "@mantine/core";
import Column from "./Column/Column";
import {ITable} from "../../types/types";
import {FC} from "react";


interface BoardProps {
    table: ITable | undefined
}


const Board: FC<BoardProps> = ({table}) => {
    if (!table) {
        return <Loader size={100}/>
    }
    return (
        <div className={classes.board}>
            <Container size='xl'>
                <SimpleGrid cols={4} spacing={10}>
                    {table.tasks.map((itemsRow, index) => (
                        <Column key={index} row={itemsRow}/>
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
};

export default Board;