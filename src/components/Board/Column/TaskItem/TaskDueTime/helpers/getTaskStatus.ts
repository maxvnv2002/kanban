import {Statuses} from "../../../../../../constants/Statuses";

export function getTaskStatus (currentTime: Date, dueTime: Date) {
    const msInSec = 1000;
    const secInMin = 60;
    const minInHour = 60;
    const hoursInDay = 24;

    if (currentTime > dueTime) return Statuses.overdue

    const remainingMs: number = dueTime.getTime() - currentTime.getTime();
    const remainingDays: number = remainingMs / (msInSec * secInMin * minInHour * hoursInDay)


    if (remainingDays <= Statuses.warning) return Statuses.warning
    if (remainingDays <= Statuses.average) return Statuses.average

    return Statuses.calm
}