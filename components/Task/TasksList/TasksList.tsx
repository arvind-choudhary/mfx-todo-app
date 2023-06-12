"use client";

import React, { useContext, useEffect, useState, useRef, useCallback } from "react";
import TaskContent from "./TaskContent";
import { RenderList } from "@/shared/_renderList/RenderList ";

import { TodosContext } from "../task.context";
import { ICONTEXT } from "../task.types";
import { ScrollTo } from "@/shared/_scrollToTop/ScrollToTop ";




const TodosList = () => {

  const context = useContext(TodosContext) as ICONTEXT;
  const listContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (listContainerRef.current) {
      listContainerRef.current.scrollTo({
        behavior: "smooth",
        top: listContainerRef.current.scrollHeight
      })
    }
  }, [context.todosList])

  return (
    <section className="todos-list-container">

      {
         context.todosList!.length ? (
          <>
            <h4>Todo List</h4>
      
            <div className="todos-list-container__items">
              <div className="todos-list-container__items-header">
                <RenderList
                  list={[{ title: 'Task Title' }, { title: 'Time Required(in Hrs)' }, { title: 'Action' }]}
                  renderItem={({ title }) => {
                    return (
                      <p>{title}</p>
                    )
                  }}
                />
              </div>
              <div className="todos-list-container__items-list" ref={listContainerRef}>
                <RenderList
                  list={context.todosList!}
                  renderItem={(param: { title: string; hours: number; id: string; }) => {
                    return (
                      <>
                        <div className="todos-list-container__items-list-item">
                          <TaskContent
                            key={param.id}
                            removeTask={context.removeTask!}
                            {...param}
                          />
                        </div>
                      </>             
                    )
                  }}
                />
              </div>

              <div className="todos-list-container__items-footer">
                <ScrollTo ref={listContainerRef} />
              </div>

            </div>
          </>
         ) : (
          <div className="todos-list-container-no-data-found">
            <h3> No Data Found!</h3>
          </div>
        )
      }
    </section>
  ) 
}

export default TodosList;