import {TTables, TTasksList} from "../types/types";

export function setStorage(key: string, value: TTables | TTasksList) {
    const sendingData = JSON.stringify(value)

    localStorage.setItem(key, sendingData)
}