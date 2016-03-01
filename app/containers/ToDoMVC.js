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
  render: function(){
    return (
      <div>
        <TodoApp todoLists={this.state.todoLists} />
        <Footer />
      </div>
    )
  }
})
