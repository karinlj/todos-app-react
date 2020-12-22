import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    //  console.log("e", e.target.value);
    this.setState(
      {
        //if more than one property in state [e.target.id]
        [e.target.id]: e.target.value,
      },
      () => console.log("change_state", this.state.content)
    );
  };

  handleSubmit = (e) => {
    // console.log("props", this.props);
    //console.log("submit_state", this.state);
    e.preventDefault();
    //passing content + value
    this.props.addTodo(this.state.content);
    //reset
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Add new Todo</label>
          <input
            type="text"
            id="content"
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="...add Todo"
          />
        </form>
      </div>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
