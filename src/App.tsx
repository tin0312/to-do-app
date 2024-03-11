import './index.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
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
    <Container fluid>
      <Row className="app-background pt-5">
        <Col>
          <Row className="d-flex justify-content-center">
            <Col md={4}>
              <Header />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center pt-5">
            <Col md={4}>
              <ToDoForm tasks={tasks} setTasks={setTasks} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="w-100 mx-0 d-flex justify-content-center list position-absolute top-20 start-50 translate-middle">
        <Col md={4}>
          <ToDoList tasks={tasks} />
        </Col>
      </Row>
      <Row className="w-100 d-flex justify-content-center position-absolute bottom-0">
        <Col md={4} className="list d-flex d-flex justify-content-center">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
