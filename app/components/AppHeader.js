import React from "react";

export default React.createClass({
  inputKeyDownHandler: function(e) {
    if(e.keyCode === 13){
      this.props.addTodoList(this.refs.addText.value);
      this.refs.addText.value = "";
    }
  },
  render: function(){
    return (
      <header className="header">
        <h1>todos</h1>
        <input onKeyDown={this.inputKeyDownHandler} ref="addText" className="new-todo" placeholder="What needs to be done?" autofocus />
      </header>
    )
  }
})
