"use client";

import React from 'react'
import classNames from 'classnames'
import { SSRProvider } from '@react-aria/ssr'; 
import TaskHeaderContent from './TasksHeader/TaskHeaderContent'
import { ModalContextProvider } from '@/shared/_modal/ModalContextApi ';

import styles from './task.module.scss'
import TaskForm from './TaskForm/TaskForm'
import TaskList from './TasksList/TasksList';
import { TodosProvider } from './task.context';

const TodoTasks = () => {
  return (
    <SSRProvider>
      <TodosProvider>
        <ModalContextProvider>

            <section className={classNames(styles['todo-container'])}>

              <div className='todo-container__content'>

                <header className='todo-container__content-header'>
                  <h2 className='todo-container__content-header-title'>Task Management App</h2>

                  <div className='todo-container__content-header-menu'>
                    {/* TASK HEADER COMPONENT */}
                    <div className='todo-container__content-header-menu-task'>
                      <TaskHeaderContent/>
                    </div>

                    {/* TASK FORM COMPONENT */}
                    <div className='todo-container__content-header-menu-form'>
                      <TaskForm />
                    </div>

                  </div>
                </header>

                {/* TASK LIST COMPONENT */}
                <TaskList />
              </div>

            </section>
        </ModalContextProvider>
      </TodosProvider>
    </SSRProvider>
  )
}

export default TodoTasks