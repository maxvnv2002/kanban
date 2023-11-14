import {makeAutoObservable} from "mobx";
import {ITable, ITask, TTables, TTasksList} from "../types/types";
import {getStorageByKey} from "../helpers/getStorageByKey";
import {storageKeys} from "../constants/storageKeys";
import {setStorage} from "../helpers/setStorage";
import {getMaxTaskIndex} from "../helpers/getMaxTaskIndex";


class TablesStore {
    isFirstLaunch: boolean = true
    tables: TTables = []
    tasks: TTasksList = []
    activeTableName: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    autoRun = () => {
        if (this.isFirstLaunch) {
            this.tables = getStorageByKey(storageKeys.tables)
            this.tasks = getStorageByKey(storageKeys.tasks)
            //
            if (!this.tables.length) {
                return
            }
            this.activeTableName = this.tables[0].name

            // this.tables = initialItems
            // this.tasks = initialTasks
            // setStorage(storageKeys.tasks, this.tasks)
            // setStorage(storageKeys.tables, this.tables)

            this.isFirstLaunch = false
        }
    }
    setActiveTableName = (name: string) => {
        if (this.activeTableName !== name) {
            this.activeTableName = name
        }
    }
    createNewTable = (tableName: string) => {
        const newTable: ITable = {
            name: tableName,
            tasks: [
                [],
                [],
                [],
                []
            ]
        }
        this.tables.push(newTable)
        this.activeTableName = tableName

        setStorage(storageKeys.tables, this.tables)
    }

    deleteTable = (tableName: string) => {
        const editedTablesList = this.tables.filter(table => table.name !== tableName)
        this.tables = editedTablesList

        if (this.tables.length) {
            this.activeTableName = this.tables[0].name
        }

        setStorage(storageKeys.tables, this.tables)
    }

    addNewTask = (columnIndex: number, receivedTask: Omit<ITask, "id">) => {
        const activeTableIndex: number = this.tables.findIndex(
            table => table.name === this.activeTableName
        )
        const newTask: ITask = {
            id: getMaxTaskIndex(),
            ...receivedTask
        }

        this.tasks.push(newTask)

        this.tables = this.tables.slice()


        const activeTable = this.tables[activeTableIndex]
        const currentColumn = activeTable.tasks[columnIndex]
        currentColumn.push(newTask.id)

        setStorage(storageKeys.tables, this.tables)
        setStorage(storageKeys.tasks, this.tasks)
    }

}

export default new TablesStore();