import React from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";

export default React.createClass({
  render: function(){
    return (
      <section className="todoapp">
        <AppHeader
          addTodoList={this.props.addTodoList}/>
        <AppMain
          todoLists={this.props.todoLists}
          stateChange={this.props.stateChange}
          textChange={this.props.textChange}
          itemDelete={this.props.itemDelete}
          toggleAllHandler={this.props.toggleAllHandler}
          toggleAll={this.props.toggleAll}
          type={this.props.type} />
        <AppFooter
          total={this.props.total}
          taskHandler={this.props.taskHandler}
          type={this.props.type} />
      </section>

    )
  }
})
