'use client';

import React, { useCallback, useContext, useRef } from 'react';
import { Button, Input, Label, TextField } from 'react-aria-components';
import { toast } from 'react-toastify';

import { validateErrors } from '../task.validation.util';
import { TASK_INPUT_VALIDATION_ERROR } from '../task.types';
import { TodosContext } from '../task.context';


interface IPROPS {
    onSubmit: (errors: TASK_INPUT_VALIDATION_ERROR[]) => any
}

const Form = ({ onSubmit }: IPROPS) => {

    const taskTitleInputRef = useRef<HTMLInputElement | null>(null);
    const taskHoursInputRef = useRef<HTMLInputElement | null>(null);
    const { addTask } = useContext(TodosContext);

    // ONLY NUMERIC DIGITS ARE ALLOWED WHILE TYPING HOURS
    const onKeyDownHrsField = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Backspace' && isNaN(parseInt(e.key))) {
            e.preventDefault();
        }
    }, []);

    const onSubmitForm = useCallback(() => {
        try {
            const title = taskTitleInputRef.current!.value;
            const hours = parseInt(taskHoursInputRef.current!.value);
            const errors = validateErrors(title, hours) as TASK_INPUT_VALIDATION_ERROR[];
            const id = Date.now().toString();
            typeof onSubmit === 'function' && onSubmit(errors);
            if (!errors.length && addTask) {
                addTask(title, hours, id); // add task in local storage
                taskTitleInputRef.current!.value = '';
                taskHoursInputRef.current!.value = '';
            }
        } catch (error: any) {
            toast.error(error.message)
        }
    }, []);

    return (
        <form className='task-input-container__form' >
            <TextField autoFocus>
                <Label htmlFor='task-title'>Task title: <span className='task-input-container__form-required'>*</span></Label>
                <Input name='task-title' className='task-input-container__form-input' type='text' ref={taskTitleInputRef} maxLength={128} required aria-required="true"/>
            </TextField>
            <TextField>
                <Label htmlFor='task-time'>Time Required(in Hrs): <span className='task-input-container__form-required'>*</span></Label>
                <Input name='task-time' className='task-input-container__form-input' type='text' ref={taskHoursInputRef} onKeyDown={onKeyDownHrsField} maxLength={2} aria-required="true" />
            </TextField>
            <Button type='button' className='task-input-container__form-button' onPress={onSubmitForm} >Add</Button>
        </form>
    )
}

export default React.memo(Form)