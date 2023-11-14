import {FC} from "react";
import classes from './TabsList.module.scss'
import {Container, Tabs} from "@mantine/core";
import '@mantine/core/styles.css';
import {observer} from "mobx-react-lite";
import tablesStore from "../../../store/tablesStore";
import TabItem from "./TabItem/TabItem";
import NewTab from "./NewTab/NewTab";
import {ADD_NEW} from "../../../constants/constants";


const TabsList: FC = () => {
    const { tables, activeTableName } = tablesStore

    const GroupTabsList = tables.map((tab) => (
        <TabItem tabName={tab.name} key={tab.name}/>
    ));

    GroupTabsList.push(
        <NewTab key={ADD_NEW}/>
    )

    return (
        <div className={classes.groupTabs}>
            <Container size='md'>
                <Tabs
                    variant={'outline'}
                    defaultValue={activeTableName}
                    value={activeTableName}
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab
                    }}
                >
                    <Tabs.List>{GroupTabsList}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
};

export default observer(TabsList);