import tablesStore from "../../../store/tablesStore.ts";
import {FC} from "react";
import {observer} from "mobx-react-lite";
import classes from "./TabsContainer.module.scss"
import {Container, Tabs} from "@mantine/core";
import TabsList from "./TabsList/TabsList.tsx";

const TabsContainer: FC = observer(() => {
    const { activeTableName } = tablesStore

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
                    <TabsList/>
                </Tabs>
            </Container>
        </div>
    );

});

export default TabsContainer;