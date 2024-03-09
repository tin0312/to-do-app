import './index.css';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const exampleTasks = [
    {
      id: nanoid(),
      content: "Jog around the park 3x",
      completed: true
    },
    {
      id: nanoid(),
      content: "10 minutes meditation",
      completed: false
    },
    {
      id: nanoid(),
      content: "Read for 1 hour",
      completed: false
    },
    {
      id: nanoid(),
      content: "Pick up groceries",
      completed: false
    },
    {
      id: nanoid(),
      content: "Complete Todo App on Frotend Mentor",
      completed: false
    }
  ] 
  const [tasks, setTasks] = useState(exampleTasks)
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <ToDoForm tasks= {tasks} setTasks = {setTasks}/> 
        <ToDoList tasks={tasks} setTasks={setTasks} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
