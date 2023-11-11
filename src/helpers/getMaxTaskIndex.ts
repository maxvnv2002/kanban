import tablesStore from "../store/tablesStore";

export const getMaxTaskIndex = () => {
    const { tasks } = tablesStore
    const maxId = tasks[tasks.length - 1].id + 1

    return maxId
}