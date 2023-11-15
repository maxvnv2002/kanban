import {Button, Modal, Stack, TextInput} from "@mantine/core";
import {FC, useState} from "react";
import tablesStore from "../../../../../../store/tablesStore.ts";
import {observer} from "mobx-react-lite";

interface NewTabDialogProps {
    isOpened: boolean
    closeHandler: () => void
}

const NewTabDialog: FC<NewTabDialogProps> = observer(({isOpened, closeHandler }) => {
    const {createNewTable, isTableExist} = tablesStore

    const [inputValue, setInputValue] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function buttonClickHandler() {
        if (!inputValue) {
            const errorEmpty = 'The input field cannot be empty'
            setErrorMessage(errorEmpty)
            return;
        }
        if (isTableExist(inputValue)) {
            const errorExists = 'A table with this name already exists'
            setErrorMessage(errorExists)
            return;
        }

        createNewTable(inputValue)

        setErrorMessage('')
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
            <Stack align={'stretch'}>
                <TextInput
                    label='Table name'
                    placeholder='To do'

                    value={inputValue}
                    error={errorMessage}
                    onChange={event => setInputValue(event.target.value)}
                />
                <Button onClick={buttonClickHandler}>Add</Button>
            </Stack>
        </Modal>
    );
});

export default NewTabDialog;