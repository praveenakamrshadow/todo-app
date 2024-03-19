import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './index.css';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', isfinished: false },
        { id: 2, text: 'Learn Vite', isfinished: true },
    ]);

    function addTodos(todoText) {
        let nextId = todos.length + 1;
        setTodos([...todos, { id: nextId, isfinished: false, text: todoText }]);
    }
    return (
        <>
            <AddTodo addTodos={addTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    );
};

export default App;
