import {FC} from "react";
import classes from './GroupTabs.module.scss'
import {Container, Loader, Tabs} from "@mantine/core";
import '@mantine/core/styles.css';
import {observer} from "mobx-react-lite";
import tablesStore from "../../../store/tablesStore";


const GroupTabs: FC = () => {
    const { tables, activeTableName, setActiveTableName } = tablesStore

    const items = tables.map((tab) => (
        <Tabs.Tab
            value={tab.name}
            key={tab.name}
            onClick={() => setActiveTableName(tab.name)}
        >
            {tab.name}
        </Tabs.Tab>
    ));

    if (!tables.length) {
        return (
            <Container size='md'>
                <Tabs>
                    <Loader size={43}/>
                </Tabs>
            </Container>
        )
    }

    return (
        <div className={classes.groupTabs}>
            <Container size='md'>
                <Tabs
                    defaultValue={activeTableName}
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab
                    }}
                >
                    <Tabs.List>{
                        tables.length ? items : '123'
                    }</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
};

export default observer(GroupTabs);