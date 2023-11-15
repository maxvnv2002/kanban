import {FC} from 'react';
import {Tabs} from "@mantine/core";
import {observer} from "mobx-react-lite";
import TabItemMenu from "./TabItemMenu/TabItemMenu";
import tablesStore from "../../../../../store/tablesStore.ts";
import {MAX_LETTERS_COUNT} from "../../../../../constants/constants.ts";

interface TabItemProps {
    tabName: string
}

const TabItem: FC<TabItemProps> = observer(({tabName}) => {
    const { setActiveTableName } = tablesStore;

    const slicedTabName = (tabName.length > MAX_LETTERS_COUNT) ?
        tabName.slice(0, MAX_LETTERS_COUNT) + '...' :
        tabName

    return (
        <Tabs.Tab
            value={tabName}
            onClick={() => setActiveTableName(tabName)}
        >
            <span>{slicedTabName}</span>
            <TabItemMenu tableName={tabName}/>
        </Tabs.Tab>
    );
});

export default TabItem;