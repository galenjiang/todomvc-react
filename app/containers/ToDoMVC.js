import React from 'react';
import Footer from "../components/Footer";
import TodoApp from "../components/TodoApp";

export default React.createClass({
  getInitialState: function(){
    return {
      todoLists: [
        {key: 1,text: "hello, world"},
        {key: 2,text: "hello, galen"}
      ],
    }
  },
  render: function(){
    return (
      <div>
        <TodoApp />
        <Footer />
      </div>
    )
  }
})
