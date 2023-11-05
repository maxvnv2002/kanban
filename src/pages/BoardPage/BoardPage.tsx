import {FC} from "react";
import Board from "../../components/Board/Board";
import tablesStore from "../../store/tablesStore";
import {observer} from "mobx-react-lite";

const BoardPage: FC = () => {
    const {tables, activeTableName} = tablesStore
    const activeTable = tables.find(table => table.name === activeTableName)

    console.log(activeTableName)

    return (
        <Board table={activeTable}/>
    );
};

export default observer(BoardPage);