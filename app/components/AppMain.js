import React from "react";
import _ from "lodash";
import TodoListsItem from "./TodoListsItem";

export default React.createClass({
  componentWillMount: function() {

  },
  render: function(){
    console.log(this.props)
    let mapTodoLists = _.map(this.props.todoLists, item => {
      return (
        <TodoListsItem
          stateChange={this.props.stateChange}
          textChange={this.props.textChange}
          key={item.key}
          itemKey={item.key}
          text={item.text}
          state={item.state} />
      )
    })
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {mapTodoLists}
        </ul>
      </section>
    )
  }
})
