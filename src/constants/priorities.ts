export const priorities = {
    'extraLow': {
        color: 'gray',
        content: 'extra low'
    },
    'low': {
        color: 'blue',
        content: 'low',
    },
    'medium': {
        color: 'yellow',
        content: 'medium'
    },
    'hard': {
        color: 'red',
        content: 'hard'
    }
}

export interface IPrioritiesList {
    extraLow: IPriority,
    low: IPriority,
    medium: IPriority,
    hard: IPriority
}
export interface IPriority {
    color: string,
    content: string
}