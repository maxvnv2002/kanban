export type TTables = ITable[]

export interface ITable {
    name: string,
    tasks: TTableTasks
}

export type TTableTasks = TColumn[]

export type TColumn = Array<number>


// -- Tasks --
export type TTasksList = ITask[]

export interface ITask {
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    priority: IPriority
}


export interface IPriority {
    color: string,
    content: string
}