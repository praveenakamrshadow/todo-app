import { useState } from 'react';

const AddTodo = ({ addTodos }) => {
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
                    addTodos(todoText);
                    setTodoText('');
                }}
            >
                Submit
            </button>
        </>
    );
};

export default AddTodo;
