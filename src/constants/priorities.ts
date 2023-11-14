import {IPriority} from "../types/types";

export const priorities: IPrioritiesList = {
    'extraLow': {
        color: '#8E8E93',
        content: 'Extra low'
    },
    'low': {
        color: '#5AC8FA',
        content: 'Low',
    },
    'medium': {
        color: '#FFCC00',
        content: 'Medium'
    },
    'hard': {
        color: '#FF3B30',
        content: 'Hard'
    }
}

export interface IPrioritiesList {
    extraLow: IPriority,
    low: IPriority,
    medium: IPriority,
    hard: IPriority
}