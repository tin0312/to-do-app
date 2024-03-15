import './index.css';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
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
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTasks, setFilterTasks] = useState(tasks);
  const [appMode, setAppMode] = useState('light');

  function toggleTheme() {
    setAppMode(appMode === 'light' ? 'dark' : 'light');
    console.log(appMode);
  }

  useEffect(() => {
    switch (filterStatus) {
      case 'active':
        setFilterTasks(tasks.filter((task) => !task.completed));
        break;
      case 'completed':
        setFilterTasks(tasks.filter((task) => task.completed));
        break;
      default:
        setFilterTasks(tasks);
        break;
    }
  }, [tasks, filterStatus]);

  return (
    <Container fluid className={`${appMode}-wrapper position-relative p-0 vh-100`}>
      <Row
        className={`d-flex flex-column align-items-center ${appMode}-header-background header-background pt-5`}
      >
        <Col xs={10} md={12}>
          <Row className="d-flex justify-content-center">
            <Col sm={4}>
              <Header toggleTheme={toggleTheme} appMode={appMode} />
            </Col>
          </Row>
          <Row className="form-input d-flex justify-content-center pt-5">
            <Col sm={4} className="p-0">
              <ToDoForm appMode={appMode} tasks={tasks} setTasks={setTasks} />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* The list of task*/}
      <Row className="list-row position-relative d-flex justify-content-center">
        <Col xs={10} md={12} className="d-flex justify-content-center p-0">
          <Row className="w-100 d-flex justify-content-center">
            <Col sm={4} className="p-0">
              <ToDoList
                setTasks={setTasks}
                tasks={tasks}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                filterTasks={filterTasks}
                appMode={appMode}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="w-100 position-absolute bottom-0 d-flex justify-content-center mx-0">
        <Col md={4} className="d-flex d-flex justify-content-center">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
