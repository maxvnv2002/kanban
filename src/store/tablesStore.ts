import {action, makeAutoObservable, makeObservable, observable} from "mobx";
import {ITable, TTables, TTasksList} from "../types/types";
import {getStorageByKey} from "../helpers/getStorageByKey";
import {storageKeys} from "../constants/storageKeys";
import {setStorage} from "../helpers/setStorage";
import {initialItems, initialTasks} from "../helpers/initialItems";


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
        setStorage(storageKeys.tables, this.tables)
    }

    deleteTable = (tableName: string) => {
        const editedTablesList = this.tables.filter(table => table.name !== tableName)
        this.tables = editedTablesList

        this.activeTableName = this.tables[0].name

        setStorage(storageKeys.tables, this.tables)
    }

    addNewTask = (columnIndex: number, newTaskObj: ITask) => {
        const activeTableIndex: number = this.tables.findIndex(
            table => table.name === this.activeTableName
        )
        this.tasks.push(newTaskObj)

        this.tables = this.tables.slice()


        const activeTable = this.tables[activeTableIndex]
        const currentColumn = activeTable.tasks[columnIndex]
        currentColumn.push(newTaskObj.id)
    // .tasks[columnIndex].push(newTaskObj.id)
    }

}

export default new TablesStore();