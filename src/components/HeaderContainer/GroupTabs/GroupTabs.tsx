import {FC} from "react";
import classes from './GroupTabs.module.scss'
import {Container, Loader, Tabs} from "@mantine/core";
import '@mantine/core/styles.css';
import {observer} from "mobx-react-lite";
import tablesStore from "../../../store/tablesStore";
import {ADD_NEW} from "../../../constants/constants";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../routes/contants/routes";
import AddNewTab from "./AddNewTab/AddNewTab";


const GroupTabs: FC = () => {
    const { tables, activeTableName, setActiveTableName } = tablesStore
    const navigate = useNavigate()

    function tabClickHandler(name: string) {
        setActiveTableName(name)
        navigate(routes.root)
    }

    const items = tables.map((tab) => (
        <Tabs.Tab
            value={tab.name}
            key={tab.name}
            onClick={() => tabClickHandler(tab.name)}
        >
            {tab.name}
        </Tabs.Tab>
    ));

    function addNewTable(name: string) {
        setActiveTableName(name)
        navigate(routes.newTable)
    }

    items.push(
        <Tabs.Tab
            value={ADD_NEW}
            key={ADD_NEW}
            onClick={() => addNewTable(ADD_NEW)}
        >
            <AddNewTab/>
        </Tabs.Tab>
    )

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