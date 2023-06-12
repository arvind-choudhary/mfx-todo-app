import { TASK_INPUT_VALIDATION_ERROR } from "./task.types";

const validateTitle = function (taskTitle = ''): TASK_INPUT_VALIDATION_ERROR | null {
    try {
        // task title must not be empty
        if (!taskTitle.trim()) {
            throw new Error('Title field is required!')
        }
        return null;
    } catch (error: any) {
        return { error: true, message: error.message, type: 'title' };
    }
}

const validateHours = function (hours: number): TASK_INPUT_VALIDATION_ERROR | null {
    try {
        // task title must not be empty
        if (isNaN(hours)) {
            throw new Error('Hour field is required!');
        }
        else if (hours === 0) {
            throw new Error('Hours value cannot be zero.');
        }
        if (hours > 24) {
            throw new Error('You can assign hours between 0-24 to any task.');
        }
        return null
    } catch (error: any) {
        return { error: true, message: error.message, type: 'hours' };
    }
}

export const validateErrors = (taskTitle: string, taskHours: number) => {
    const titleError = validateTitle(taskTitle);
    const hourError = validateHours(taskHours);
    const errors = [];
    // title error
    if (titleError?.error) {
        errors.push(titleError);
    }
    // hours error
    if (hourError?.error) {
        errors.push(hourError);
    }
    return errors;
}