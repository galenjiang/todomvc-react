import React from "react";

export default React.createClass({
  render: function(){
    let total = this.props.total;
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{total}</strong> item left</span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
})
