import React from "react";

export default React.createClass({
  render: function() {
    return (
      <li className={(this.props.state === "done") ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={(this.props.state === "done") ? true : false} />
          <label>{this.props.text}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template" />
      </li>
    )
  }
})
