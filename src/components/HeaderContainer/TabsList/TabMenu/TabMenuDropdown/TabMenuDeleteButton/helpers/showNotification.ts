import {notifications} from "@mantine/notifications";

export const showNotification = (title: string, message: string, color: string) =>
    notifications.show({
        withCloseButton: true,
        autoClose: 5000,
        title: title,
        message: message,
        color: color,
})