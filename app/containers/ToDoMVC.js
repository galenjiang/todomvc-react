import React from 'react';
import Footer from "../components/Footer";
import TodoApp from "../components/TodoApp";

export default React.createClass({
  getInitialState: function(){
    return {
      todoLists: [
        {key: 1,text: "hello, world", state: "done"},
        {key: 2,text: "hello, galen", state: "unfinished"}
      ],
      key: 2
    }
  },
  stateChange: function(itemKey) {
    console.log(itemKey)
  },
  textChange: function(itemKey, newText) {
    console.log(itemKey, newText)
  },
  render: function(){
    return (
      <div>
        <TodoApp
          todoLists={this.state.todoLists}
          total={this.state.todoLists.length}
          stateChange={this.stateChange}
          textChange={this.textChange} />
        <Footer />
      </div>
    )
  }
})
