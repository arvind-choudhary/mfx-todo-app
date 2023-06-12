'use client';

import React, { useCallback, useContext, useState } from 'react'
import { validateErrors } from '../task.validation.util';
import { ModalContext } from '@/shared/_modal/ModalContextApi ';
import { ICONTEXT } from '@/shared/_modal/modal.type ';
import { TASK_INPUT_VALIDATION_ERROR } from '../task.types';

import Form from './Form';
import ErrorModal from './ErrorModal';

const TaskForm = () => {

    const modalContext = useContext(ModalContext) as ICONTEXT;
    const [validationErrors, setValidationError] = useState<TASK_INPUT_VALIDATION_ERROR[]>([]);

    const onSubmit = useCallback((errors: TASK_INPUT_VALIDATION_ERROR[]) => {
        if (errors.length) {
            setValidationError(errors);
            modalContext.setModalVisibleState();
        }
    }, []);

    return (
        <section className={'task-input-container'}>
            <Form onSubmit={onSubmit} />
            <ErrorModal validationErrors={validationErrors} />
        </section>
    )
}

export default TaskForm