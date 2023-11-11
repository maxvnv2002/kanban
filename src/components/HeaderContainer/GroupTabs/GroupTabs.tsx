import {FC} from "react";
import classes from './GroupTabs.module.scss'
import {Container, Loader, Tabs} from "@mantine/core";
import '@mantine/core/styles.css';
import {observer} from "mobx-react-lite";
import tablesStore from "../../../store/tablesStore";
import {ADD_NEW} from "../../../constants/constants";

import {IconCirclePlus} from "@tabler/icons-react";
import {useDisclosure} from "@mantine/hooks";
import NewTabDialog from "./NewTabDialog/NewTabDialog";
import classNames from "classnames";
import TabMenu from "./TabMenu/TabMenu";


const GroupTabs: FC = () => {
    const { tables, activeTableName, setActiveTableName } = tablesStore
    const [isDialogOpen, {
        toggle: toggleDialog,
        close: closeDialog
    }] = useDisclosure(false)

    function tabClickHandler(name: string) {
        setActiveTableName(name)
    }

    const items = tables.map((tab) => (
        <Tabs.Tab
            value={tab.name}
            key={tab.name}
            onClick={() => tabClickHandler(tab.name)}
        >
            <span>{tab.name}</span>
            <TabMenu tableName={tab.name}/>
        </Tabs.Tab>
    ));


    const tabIconClasses = classNames({
        [classes.addNew]: true,
        [classes.focused]: isDialogOpen
    })

     items.push(
        <Tabs.Tab
            value={ADD_NEW}
            key={ADD_NEW}
            className={tabIconClasses}
            onClick={toggleDialog}
        >
            <IconCirclePlus/>
            <NewTabDialog
                isOpened={isDialogOpen}
                closeHandler={closeDialog}
            />
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
                    variant={'outline'}
                    defaultValue={activeTableName}
                    value={activeTableName}
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