import Todo from '../Todo/Todo';

const TodoList = ({ todos, setTodos }) => {
    function onDeleteTodo(id) {
        const newTodoList = todos.filter((todo) => todo.id != id);
        setTodos(newTodoList);
    }
    return (
        <>
            {todos &&
                todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        isfinished={todo.isfinished}
                        deleteTodo={() => onDeleteTodo(todo.id)}
                    />
                ))}
        </>
    );
};

export default TodoList;
