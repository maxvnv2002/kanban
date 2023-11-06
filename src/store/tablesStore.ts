import {makeObservable, observable} from "mobx";
import {ITable, TTables, TTasksList} from "../types/types";
import {getStorageByKey} from "../helpers/getStorageByKey";
import {storageKeys} from "../constants/storageKeys";
import {setStorage} from "../helpers/setStorage";


class TablesStore {
    isFirstLaunch: boolean = true
    tables: TTables = []
    tasks: TTasksList = []
    activeTableName: string = ''
    constructor() {
        makeObservable(this, {
            tables: observable,
            tasks: observable,
            activeTableName: observable,
        })
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
        this.activeTableName = name
    }
    createNewTable = (name: string) => {
        const newTable: ITable = {
            name: name,
            tasks: []
        }
        this.tables.push(newTable)
        setStorage(storageKeys.tables, this.tables)
    }
}

export default new TablesStore();