import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);

  function saveTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTask = e.currentTarget.value;
      if (newTask !== '') {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        e.currentTarget.value = '';
      }
    }
  }
  const taskList = tasks.map((task, index) => <ToDoItem key={index} task={task} />);
  return (
    <Container fluid>
      <Row className=" d-flex position-relative justify-content-center align-items-center input-form pt-5">
        <Col md={4} className="d-flex form-column p-0 flex-column align-items-center">
          <Form className="w-100 p-0">
            <Form.Group>
              <Form.Label className="todo-label text-light fw-bolder mb-5">TO DO</Form.Label>
              <Form.Control type="text" onKeyDown={saveTask} placeholder="Create a new todo..." />
            </Form.Group>
          </Form>
        </Col>
        {/* This row position relativeky to the the input fornm row */}
        {tasks .length > 0 && (
          <Row>
            <Col md={4} className="task-list position-absolute top-100 start-50 translate-middle">
              <ul>{taskList}</ul>
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  );
}
