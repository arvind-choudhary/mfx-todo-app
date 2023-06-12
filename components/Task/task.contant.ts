import { ITASK_HEADER_CONSTANT, ITASKS_LIST_CONSTANT } from "./task.types";

export const TASK_HEADER_CONSTANT: ITASK_HEADER_CONSTANT[] = [
    {
        type: 'totalTask',
        title: 'Total Tasks',
        count: 0,
    },
    {
        type: 'totalDays',
        title: 'Total Days',
        count: 0
    },
    {
        type: 'totalHours',
        title: 'Total Hours',
        count: 0
    }
];

export const TASKS_LIST_CONSTANT: ITASKS_LIST_CONSTANT[] = [
    {
        title: 'Task Title',
        count: 0
    },
    {
        title: 'Time Required(in HRS)',
        count: 0
    },
    {
        title: 'Action',
        count: 0
    }
]