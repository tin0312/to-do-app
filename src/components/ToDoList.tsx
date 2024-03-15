import React, { useState, useEffect } from 'react';
import ToDoTask from './ToDoTask';
import FilterTask from './FilterTask';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface ToDoListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  filterStatus: string;
  setFilterStatus: React.Dispatch<React.SetStateAction<string>>;
  filterTasks: Task[];
  appMode: string
}

const ToDoList: React.FC<ToDoListProps> = ({
  tasks,
  setTasks,
  filterStatus,
  setFilterStatus,
  filterTasks,
  appMode
}) => {
  const [taskLeft, setTaskLeft] = useState(0);

  useEffect(() => {
    const taskLeft = tasks.filter((task) => !task.completed).length;
    setTaskLeft(taskLeft);
  }, [tasks]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    const [reorderedTask] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, reorderedTask);

    setTasks(newTasks);
  };
  function clearCompletedTask() {
    const incompletedTask = tasks.filter((task) => !task.completed);
    setTasks(incompletedTask);
  }

  return (
    <div className={`task-list ${appMode}-list position-relative fs-6 pt-4`}>
      {filterTasks.length === 0 ? (
        <p className="text-center">No tasks available</p>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                {filterTasks.map((task, index) => (
                  <ToDoTask
                    key={task.id}
                    task={task}
                    index={index}
                    tasks={tasks}
                    setTasks={setTasks}
                    appMode={appMode}
                  />
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}

      <section className="filter-container d-flex justify-content-between align-items-center p-4">
        <p className="pb-0 mb-0">
          <span className="fw-bold">{taskLeft}</span> tasks left
        </p>
        <section className="filter-desktop">
          <FilterTask setFilterStatus={setFilterStatus} filterStatus={filterStatus} appMode={appMode}/>
        </section>
        <a className="clear-btn" onClick={clearCompletedTask}>
          Clear completed
        </a>
      </section>
      <section className={`${appMode}-filter-mobile filter-mobile mt-5`}>
        <FilterTask setFilterStatus={setFilterStatus} filterStatus={filterStatus} appMode={appMode}/>
      </section>
    </div>
  );
};

export default ToDoList;
