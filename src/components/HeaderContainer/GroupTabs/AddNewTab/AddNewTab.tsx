import {IconCirclePlus} from "@tabler/icons-react";
import {FC, useEffect, useState} from "react";
import {Button, TextInput} from "@mantine/core";
import classes from './AddNewTab.module.scss';
import * as classNames from "classnames";
import {observer} from "mobx-react-lite";
import tablesStore from "../../../../store/tablesStore";
import {ADD_NEW} from "../../../../constants/constants";
interface AddNewTabProps {

}

const AddNewTab: FC<AddNewTabProps> = () => {
    const { activeTableName, setActiveTableName } = tablesStore
    const [isTabActive, setIsTabActive] = useState<boolean>(false)

    const wrapClasses = classNames({
        [classes.tabWrap]: true,
        [classes.closed]: !isTabActive
    })

    useEffect(() => {
        if (activeTableName === ADD_NEW) {
            setIsTabActive(true)
        }
    }, [activeTableName])

    const closeButtonHandler = () => {
        if (isTabActive) {
            setIsTabActive(false)
            setActiveTableName('Project sample!')
        }
    }



    return (
        <div className={wrapClasses}>
            <TextInput className={classes.input}/>
            {/*<Button className={classes.button}>Add</Button>*/}
            <IconCirclePlus
                className={classes.icon}
                onClick={closeButtonHandler}/>
        </div>
    );
};

export default observer(AddNewTab);