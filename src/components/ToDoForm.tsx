import { useState } from 'react';
import { nanoid } from 'nanoid';
import ToDoTask from "./ToDoTask"
import FilterTask from "./FilterTask"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

interface Task{
  id: string,
  content: string,
  completed: boolean
}

interface ToDoListProps {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function ToDoList({tasks, setTasks} : ToDoListProps) {
  const [taskInput, setTaskInput] = useState("");

  function handleChange(e: React.KeyboardEvent<HTMLInputElement>) {
    setTaskInput(e.currentTarget.value);
  }
  function createTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (taskInput) {
        const newTask = {
          id: nanoid(),
          content: taskInput,
          completed: false
        };
        setTasks([...tasks, newTask]);
        setTaskInput("");
      }
    }
  }
  
  return (
    <Container fluid>
      <Row className=" d-flex position-relative justify-content-center align-items-center input-form pt-5">
        <Col md={4} className="d-flex form-column p-0 flex-column align-items-center">
          <Form className="w-100 p-0">
            <Form.Group>
              {/* <Form.Label className="todo-label text-light fw-bolder mb-5">TO DO</Form.Label> */}
              <Form.Control
                type="text"
                onChange={handleChange}
                onKeyDown={createTask}
                placeholder="Create a new todo..."
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
