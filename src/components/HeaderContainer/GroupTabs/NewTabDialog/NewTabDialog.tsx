import {Button, Group, Modal, TextInput} from "@mantine/core";
import {FC, useState} from "react";
import tablesStore from "../../../../store/tablesStore";

interface NewTabDialogProps {
    isOpened: boolean
    closeHandler: () => void
}

const NewTabDialog: FC<NewTabDialogProps> = ({isOpened, closeHandler }) => {
    const {createNewTable} = tablesStore
    const [inputValue, setInputValue] = useState<string>('')

    function buttonClickHandler() {
        if (!inputValue) return

        createNewTable(inputValue)
        setInputValue('')
        closeHandler()
    }

    return (
        <Modal
            title={'Enter table name'}
            size={'xs'}
            radius={'md'}
            centered
            opened={isOpened}
            withCloseButton
            onClose={closeHandler}
            onClick={event => event.stopPropagation()}
        >
            <Group align={'flex-end'}>
                <TextInput
                    placeholder='To do'
                    style={{ flex: 1 }}
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                <Button onClick={buttonClickHandler}>Add</Button>
            </Group>
        </Modal>
    );
};

export default NewTabDialog;