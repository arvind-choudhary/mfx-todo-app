'use client';

import { ReactNode, createContext, useCallback, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { localStorageUtil } from '@/shared/utils/storage.util ';
import { ICONTEXT, ICONTEXT_TASK_FIELD, ICONTEXT_TODOS_HEADER_INFO } from './task.types';

export const TodosContext = createContext<ICONTEXT>({});

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const tasksListKey = 'todos-list';
  const tasksHeaderInfoKey = 'todos-header';
  const [todosHeaderInfo, setTodosHeaderInfo] = useState<ICONTEXT_TODOS_HEADER_INFO>({});
  const [todosList, setTodosList] = useState<ICONTEXT_TASK_FIELD[]>([]);

  // LOAD TASKS LIST FROM LOCALSTORAGE
  useEffect(() => {
    const data = localStorageUtil.getItemAsJson(tasksListKey);
    if (Array.isArray(data) && data.length) {
      setTodosList(data);
      let hours = 0;
      data.forEach((a) => hours += a.hours);
      updateHeaderInfo(data, hours);
    }
  }, []);

  const updateHeaderInfo = (tasksList: ICONTEXT_TASK_FIELD[], totalHours: number) => {
    const headerInfo = { 'totalTask': tasksList.length, 'totalDays': (totalHours / 8), 'totalHours': totalHours } as ICONTEXT_TODOS_HEADER_INFO;
    setTodosHeaderInfo(headerInfo);
    localStorageUtil.setJsonItem(tasksHeaderInfoKey, headerInfo);
  }

  const addTask = useCallback((taskTitle: string, taskHours: number, taskId: string) => {
    const storedData = localStorageUtil.getItemAsJson(tasksListKey) as ICONTEXT_TASK_FIELD[] || [];
    const isDuplicate = storedData?.find((value) => value.title === taskTitle.trim());
    if (isDuplicate) {throw new Error('Duplicate task found with given title.')}
    const tasksList = [...storedData, { title: taskTitle.trim(), hours: taskHours, id: taskId } as ICONTEXT_TASK_FIELD];
    const totalHours = parseInt(localStorageUtil.getItemAsJson(tasksHeaderInfoKey)?.totalHours ?? 0) + taskHours;
    setTodosList(tasksList);
    updateHeaderInfo(tasksList, totalHours);
    localStorageUtil.setJsonItem(tasksListKey, tasksList);
    toast.success('Task successfully added.')
  }, []);

  const removeTask = useCallback((taskHours: number, taskId: string) => {
    try {
      const data = localStorageUtil.getItemAsJson(tasksListKey) as ICONTEXT_TASK_FIELD[];
      const tasksList = data?.filter((value) => value.id !== taskId);
      const totalHours = parseInt(localStorageUtil.getItemAsJson(tasksHeaderInfoKey)?.totalHours ?? 0) - taskHours;
      setTodosList(tasksList);
      updateHeaderInfo(tasksList, totalHours);
      localStorageUtil.setJsonItem(tasksListKey, tasksList);
      toast.success('Task successfully removed.')
    } catch (error: any) {
      toast.error(error.message)
    }
  }, []);


  return (
    <TodosContext.Provider value={{ addTask, removeTask, todosList, todosHeaderInfo }}>
      {children}
    </TodosContext.Provider>
  )
}

