import React from "react";
import classNames from "classnames";

export default React.createClass({
  allHandler: function() {
    this.props.taskHandler("all")
  },
  unfinishedHandler: function() {
    this.props.taskHandler("unfinished")
  },
  doneHandler: function() {
    this.props.taskHandler("done")
  },
  render: function(){
    let total = this.props.total;
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{total}</strong> item left</span>
        <ul className="filters">
          <li>
            <a onClick={this.allHandler} className={classNames({selected: this.props.type === "all"})} href="#/">All</a>
          </li>
          <li>
            <a onClick={this.unfinishedHandler} className={classNames({selected: this.props.type === "unfinished"})} href="#/active">Active</a>
          </li>
          <li>
            <a onClick={this.doneHandler} className={classNames({selected: this.props.type === "done"})} href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
})
