//import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

//stateless component
const TodoItem = (props) => {
  //destructuring props
  const { id, content, compleated } = props.todo;
  const { toggleCompleate, deleteTodo } = props;
  //console.log("TodoItem_props", props);

  const btnStyle = {
    color: "#fff",
    background: "#f44336",
    borderRadius: "3px",
    border: "none",
    padding: "5px 9px",
    cursor: "pointer",
    lineHeight: "1",
    fontSize: "17px",
    position: "relative",
    zIndex: "1000",
  };

  return (
    <div
      className="collection-item"
      style={{ textDecoration: compleated ? "line-through" : "none" }}
    >
      <div className="item">
        <input type="checkbox" onChange={() => toggleCompleate(id)} />
        <p className="todoItem_content">{content}</p>
        <button style={btnStyle} onClick={() => deleteTodo(id)}>
          x
        </button>
      </div>
    </div>
  );
};

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleCompleate: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
