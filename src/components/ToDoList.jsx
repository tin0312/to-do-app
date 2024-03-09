import React from 'react';
import ToDoTask from './ToDoTask';
import FilterTask from './FilterTask';

function ToDoList: React.FC(){
    return(
        <div>
            <ToDoTask />
            <FilterTask />
        </div>
    )
}