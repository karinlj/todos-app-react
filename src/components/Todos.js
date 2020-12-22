import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

//stateless component
const Todos = (props) => {
  //destructuring props
  const { todos, deleteTodo, toggleCompleate } = props;
  //console.log("todos_props", props);

  return (
    <div className="collection todos">
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleCompleate={toggleCompleate}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCompleate: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
export default Todos;

// import React from "react";
// //stateless UI component

// const Todos = (props) => {
//   const { myTodos, deleteMyTodo } = props;
//   //console.log("props", props);

//   let todoList = [];
//   //if any todos
//   todoList = myTodos.length ? (
//     myTodos.map((todo) => {
//       //console.log("todo.id", todo.id);
//       return (
//         <div className="collection-item todo_item" key={todo.id}>
//           <i className="material-icons grey-text done" onClick={() => deleteMyTodo(todo.id)}>
//             done_all
//           </i>

//           <span>{todo.content}</span>
//         </div>
//       );
//     })
//   ) : (
//     //if no todos
//     <p className="center">You have no todo's left, yay!</p>
//   );

//   return <div className="todos collection">{todoList}</div>;
// };
// export default Todos;
