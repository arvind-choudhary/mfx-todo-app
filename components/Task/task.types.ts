export type TASK_INPUT_VALIDATION_ERROR = { error: boolean, message?: string, type: 'title' | 'hours' }


//   Context api file types

export interface ICONTEXT_TASK_FIELD {
    title: string;
    hours: number;
    id: string;
}
  
export interface ICONTEXT_TODOS_HEADER_INFO {
    totalTask?: number;
    totalDays?: number;
    totalHours?: number;
}

export interface ICONTEXT {
    addTask?: (taskTitle: string, taskHours: number, taskId: string) => void;
    removeTask?: (taskHours: number, taskId: string) => void;
    todosList?: ICONTEXT_TASK_FIELD[];
    todosHeaderInfo?: ICONTEXT_TODOS_HEADER_INFO
}


//    Constant file types

export interface ITASK_HEADER_CONSTANT {
    type: 'totalTask' | 'totalDays' | 'totalHours';
    title: string;
    count: number;
}

export interface ITASKS_LIST_CONSTANT {
    title: string;
    count: number;
}