import react from "react";
import Form from 'react-bootstrap/Form';

export default function ToDoItem( {task}){
    return (
        <Form.Check
        type= "radio"
        label= {task}
        id={task}
        name="task"
      />
    )
}