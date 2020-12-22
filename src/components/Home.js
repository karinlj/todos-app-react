import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Header from "./Header";

class Home extends Component {
  state = {
    todos: [
      { content: "Cuddle with cats", id: 0, compleated: false },
      { content: "Walk with cats", id: 1, compleated: false },
      { content: "Feed cats", id: 2, compleated: false },
    ],
  };

  toggleCompleate = (id) => {
    //toggle
    // console.log("id", id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        //kolla om id lika
        if (todo.id === id) {
          todo.compleated = !todo.compleated;
        }
        //return
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    console.log("id", id);
    let todosAfterDel = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todosAfterDel,
    });
  };
  //pass in content + value
  addTodo = (content) => {
    //make newTodo object
    const newTodo = {
      //add id and compleated
      id: Math.random(),
      content: content,
      compleated: false,
    };

    let todosAfterAdd = [...this.state.todos, newTodo];
    //console.log("todosAfterAdd", todosAfterAdd);
    this.setState({
      todos: todosAfterAdd,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <Header />
        <Todos
          todos={this.state.todos}
          toggleCompleate={this.toggleCompleate}
          deleteTodo={this.deleteTodo}
        />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
