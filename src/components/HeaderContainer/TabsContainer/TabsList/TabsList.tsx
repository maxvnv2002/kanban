import {FC} from "react";
import {Tabs} from "@mantine/core";
import '@mantine/core/styles.css';
import {observer} from "mobx-react-lite";
import TabItem from "./TabItem/TabItem.tsx";
import NewTab from "./NewTab/NewTab.tsx";
import tablesStore from "../../../../store/tablesStore.ts";
import {ADD_NEW} from "../../../../constants/constants.ts";


const TabsList: FC = observer(() => {
    const { tables} = tablesStore

    return (
        <Tabs.List>
            {tables.map((tab) => (
                <TabItem tabName={tab.name} key={tab.name}/>
            ))}
            <NewTab key={ADD_NEW}/>
        </Tabs.List>
    );
});


export default TabsList;