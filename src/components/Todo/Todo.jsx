import { useState } from 'react';
const Todo = ({ finishTodo, editTodo, deleteTodo, text, isFinished }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(text);

    return (
        <>
            <input
                type="checkbox"
                checked={isFinished}
                onChange={() => finishTodo(!isFinished)}
            />
            {isEditing ? (
                <input
                    value={todoText || ''}
                    onChange={(e) => setTodoText(e.target.value)}
                />
            ) : (
                <span>{todoText}</span>
            )}
            <button
                onClick={() => {
                    setIsEditing(!isEditing);
                    editTodo(todoText);
                }}
            >
                {isEditing ? 'save' : 'Edit'}
            </button>
            <button onClick={deleteTodo}>Delete</button>
        </>
    );
};

export default Todo;
