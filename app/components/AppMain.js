import React from "react";
import _ from "lodash";
import TodoListsItem from "./TodoListsItem";

export default React.createClass({
  componentWillUpdate: function() {
    console.log(this.props.todoLists)
  },
  toggleAllHandler: function() {
    this.props.toggleAllHandler()
  },
  render: function(){
    let mapTodoLists = _.map(this.props.todoLists, item => {
      return (
        <TodoListsItem
          stateChange={this.props.stateChange}
          textChange={this.props.textChange}
          key={item.key}
          itemKey={item.key}
          text={item.text}
          state={item.state}
          itemDelete={this.props.itemDelete} />
      )
    })
    return (
      <section className="main">
        <input onChange={this.toggleAllHandler} checked={this.props.toggleAll} className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {mapTodoLists}
        </ul>
      </section>
    )
  }
})
