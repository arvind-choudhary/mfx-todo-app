'use client';

import React, { memo, useContext } from 'react'
import { Button, Heading } from 'react-aria-components';
import classNames from 'classnames';
import ModalComponent from '@/shared/_modal ';
import { RenderList } from '@/shared/_renderList/RenderList ';

import { ModalContext } from '@/shared/_modal/ModalContextApi ';
import { TASK_INPUT_VALIDATION_ERROR } from '../task.types';
import { ICONTEXT } from '@/shared/_modal/modal.type ';

import styles from './errorModal.module.scss'

const ErrorModal = ({ validationErrors }: { validationErrors: TASK_INPUT_VALIDATION_ERROR[] }) => {

    const modalContext = useContext(ModalContext) as ICONTEXT;

    return (
        <ModalComponent className={classNames(styles['task-input-container__modal'], 'task-input-container__modal')}>
            <Heading className='task-input-container__modal-heading'>
                Errors!
            </Heading>
            <ul className='task-input-container__modal-error-list'>
                <RenderList
                    list={validationErrors}
                    renderItem={({ message }: TASK_INPUT_VALIDATION_ERROR) => <p>{message}</p>}
                />
            </ul>
            <Button className='task-input-container__modal-btn' onPress={modalContext.setModalVisibleState}>Close</Button>
        </ModalComponent>
    )
}

export default memo(ErrorModal)