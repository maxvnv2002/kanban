import {FC} from 'react';
import TabMenu from "../TabMenu/TabMenu";
import {Tabs} from "@mantine/core";
import tablesStore from "../../../../store/tablesStore";
import {observer} from "mobx-react-lite";

interface TabItemProps {
    tabName: string
}

const TabItem: FC<TabItemProps> = ({tabName}) => {
    const { setActiveTableName } = tablesStore;

    return (
        <Tabs.Tab
            value={tabName}
            onClick={() => setActiveTableName(tabName)}
        >
            <span>{tabName}</span>
            <TabMenu tableName={tabName}/>
        </Tabs.Tab>
    );
};

export default observer(TabItem);