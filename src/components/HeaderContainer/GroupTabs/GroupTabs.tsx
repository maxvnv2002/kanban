import {FC} from "react";
import classes from './GroupTabs.module.scss'
import {Container, Tabs} from "@mantine/core";
import '@mantine/core/styles.css';
const tabs = [
    'Home',
    'Orders',
    'Education',
    'Community',
    'Forums',
    'Support',
    'Account',
    'Helpdesk',
];

const GroupTabs: FC = () => {
    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));

    return (
        <div className={classes.groupTabs}>
            <Container size='md'>
                <Tabs
                    defaultValue={''}
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
};

export default GroupTabs;