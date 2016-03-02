import React from 'react';
import _ from "lodash";
import Footer from "../components/Footer";
import TodoApp from "../components/TodoApp";

export default React.createClass({
  getInitialState: function(){
    return {
      todoLists: [
        {key: 1,text: "hello, world", state: "done"},
        {key: 2,text: "hello, galen", state: "unfinished"}
      ],
      key: 2,
      toggleAll: true,
      type: "all",
    }
  },
  componentWillMount: function() {
    this.checkState();
  },
  componentWillUpdate: function() {

  },
  stateChange: function(itemKey) {
    let index = _.findIndex(this.state.todoLists, function(item) {
      return item.key === itemKey;
    })
    let newTodoLists = _.extend([], this.state.todoLists);
    newTodoLists[index].state === "done" ? newTodoLists[index].state = "unfinished" : newTodoLists[index].state = "done";
    this.setState({
      todoLists: newTodoLists,
    }, function() {
      this.checkState();
    })
  },
  textChange: function(itemKey, newText) {
    let index = _.findIndex(this.state.todoLists, function(item) {
      return item.key === itemKey;
    })
    let newTodoLists = _.extend([], this.state.todoLists);
    newTodoLists[index].text = newText;
    this.setState({
      todoLists: newTodoLists,
    })
  },
  itemDelete: function(itemKey) {
    let index = _.find(this.state.todoLists, function(item) {
      return item.key === itemKey;
    })
    let newTodoLists = _.extend([], this.state.todoLists);
    newTodoLists = _.without(newTodoLists, index);
    this.setState({
      todoLists: newTodoLists,
    }, function() {
      this.checkState();
    })
  },
  addTodoList: function(newText) {
    let newTodoList = {
      key: this.state.key + 1,
      text: newText,
      state: "unfinished",
    }
    let newTodoLists = _.extend([], this.state.todoLists);
    newTodoLists = newTodoLists.concat(newTodoList);
    this.setState(
      {
      todoLists: newTodoLists,
      key: this.state.key + 1,
    }, function() {
      this.checkState();
    })
  },
  toggleAllHandler: function() {
    if(this.state.toggleAll === true){
      let newTodoLists = _.extend([], this.state.todoLists)
      newTodoLists = _.each(newTodoLists, function(item, index) {
        newTodoLists[index].state = "unfinished";
      })
      this.setState({
        todoLists: newTodoLists,
        toggleAll: false,
      })
    }else{
      let newTodoLists = _.extend([], this.state.todoLists)
      newTodoLists = _.each(newTodoLists, function(item, index) {
        newTodoLists[index].state = "done";
      })
      this.setState({
        todoLists: newTodoLists,
        toggleAll: true,
      })
    }
  },
  checkState: function() {
    let state = _.every(this.state.todoLists, function(item) {
      return item.state === "done"
    })
    this.setState({
      toggleAll: state,
    })
  },
  taskHandler: function(type) {
    this.setState({
      type: type,
    })
  },
  render: function(){
    return (
      <div>
        <TodoApp
          todoLists={this.state.todoLists}
          total={this.state.todoLists.length}
          stateChange={this.stateChange}
          textChange={this.textChange}
          itemDelete={this.itemDelete}
          addTodoList={this.addTodoList}
          toggleAllHandler={this.toggleAllHandler}
          toggleAll={this.state.toggleAll}
          type={this.state.type}
          taskHandler={this.taskHandler} />
        <Footer />
      </div>
    )
  }
})
