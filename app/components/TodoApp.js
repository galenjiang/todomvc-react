import React from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";

export default React.createClass({
  render: function(){
    return (
      <section className="todoapp">
        <AppHeader />
        <AppMain todoLists={this.props.todoLists} />
        <AppFooter />
      </section>

    )
  }
})
