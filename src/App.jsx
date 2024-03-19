import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import './index.css';
import TodoContext from './context/TodoContext';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', isfinished: false },
        { id: 2, text: 'Learn Vite', isfinished: true },
    ]);

    return (
        <>
            <TodoContext.Provider value={{ todos, setTodos }}>
                <AddTodo />
                <TodoList />
            </TodoContext.Provider>
        </>
    );
};

export default App;
