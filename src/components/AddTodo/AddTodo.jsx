import { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';

const AddTodo = () => {
    const todoContext = useContext(TodoContext);
    const { todos, setTodos } = todoContext;
    const [todoText, setTodoText] = useState('');

    return (
        <>
            <input
                placeholder="Add your Todo here"
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <button
                onClick={() => {
                    let nextId = todos.length + 1;
                    setTodos([
                        ...todos,
                        { id: nextId, text: todoText, isfinished: false },
                    ]);
                    setTodoText('');
                }}
            >
                Submit
            </button>
        </>
    );
};

export default AddTodo;
