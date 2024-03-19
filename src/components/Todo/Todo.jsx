const Todo = ({ deleteTodo, text, ifFinished }) => {
    return (
        <>
            <input type="checkbox" checked={ifFinished} />
            <span>{text}</span>
            <button>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </>
    );
};

export default Todo;
