import React from "react";
import _ from "lodash";
import TodoListsItem from "./TodoListsItem";

export default React.createClass({
  componentWillMount: function() {

  },
  render: function(){
    let mapTodoLists = _.map(this.props.todoLists, function(item) {
      return (
        <TodoListsItem key={item.key} itemKey={item.key} text={item.text} state={item.state} />
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
