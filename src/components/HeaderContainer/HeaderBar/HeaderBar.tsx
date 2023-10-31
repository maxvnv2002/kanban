import {FC} from "react";
import classes from './HeaderBar.module.scss';
import {Container, Text} from "@mantine/core";

const HeaderBar: FC = () => {
    return (
        <div className={classes.bar}>
            <Container size='md'>
                <Text className={classes.logo}>Kanban</Text>
            </Container>
        </div>
    );
};

export default HeaderBar;