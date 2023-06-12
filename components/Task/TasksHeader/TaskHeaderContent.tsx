"use client";

import React, { useContext } from 'react'
import * as Card from "@/shared/_card/Card ";
import { RenderList } from '@/shared/_renderList/RenderList ';

import { TodosContext } from '../task.context';
import { TASK_HEADER_CONSTANT } from '../task.contant';
import { ICONTEXT } from '../task.types';

const TaskHeaderContent = () => {
    const context = useContext(TodosContext) as ICONTEXT;    
    const headersList = TASK_HEADER_CONSTANT.map((value) => {
        let count = context.todosHeaderInfo!?.[value.type] as any;
        count = value.type === 'totalDays' ? count?.toPrecision(3) : count;
        return { ...value, count: count > 0 ? count?.toString().padStart(3, '0') : '000' }
    })
    
    return (
        <>
            <RenderList
                list={headersList}
                renderItem={({ title, count }) => {
                    return (
                        <Card.Base classname='task-card' key={title}>
                            <Card.Title>
                                <h4 className='task-card__title'>{title}</h4>
                            </Card.Title>
                            <Card.Body>
                                <h4 className='task-card__count'>{count ?? '000'}</h4>
                            </Card.Body>
                        </Card.Base>
                    )
                }}
            />
        </>
    )
}

export default TaskHeaderContent