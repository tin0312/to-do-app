import './index.css';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const exampleTasks = [
    {
      id: nanoid(),
      content: 'Jog around the park 3x',
      completed: true
    },
    {
      id: nanoid(),
      content: '10 minutes meditation',
      completed: false
    },
    {
      id: nanoid(),
      content: 'Read for 1 hour',
      completed: false
    },
    {
      id: nanoid(),
      content: 'Pick up groceries',
      completed: false
    },
    {
      id: nanoid(),
      content: 'Complete Todo App on Frotend Mentor',
      completed: false
    }
  ];
  const [tasks, setTasks] = useState(exampleTasks);
  return (
    <Container fluid className="position-relative d-flex flex-column align-items-center">
      <Row>
        <Col md={12} className="app-background">
          <Row>
            <Col md={4}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <ToDoForm tasks={tasks} setTasks={setTasks} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <ToDoList tasks={tasks} setTasks={setTasks} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
