import React from "react";
import classNames from "classnames";

export default React.createClass({
  getInitialState: function() {
    return {
      stateEditing: false,
    }
  },
  radioClickHandler: function() {
    this.props.stateChange(this.props.itemKey)
  },
  labelClickHandler: function(e) {
    e.stopPropagation();
    e.preventDefault();
  },
  labelDbclickHandler: function(e) {
    this.setState({
      stateEditing: true,
    })
  },
  inputEditBlurHandler: function() {
    this.setState({
      stateEditing: false,
    })
    this.props.textChange(this.props.itemKey, this.refs.inputEdit.value);
  },
  inputEditKeyDownHandler: function(e) {
    if(e.keyCode === 13) this.inputEditBlurHandler()
  },
  componentDidUpdate: function() {
    this.state.stateEditing && this.refs.inputEdit.focus();
  },
  render: function() {
    let classes = classNames({
      "completed": (this.props.state === "done"),
      "editing": this.state.stateEditing,
    })
    console.log(this.props.itemKey,classes);
    return (
      <li onClick={this.radioClickHandler} key={this.props.key} className={classes}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={(this.props.state === "done") ? true : false} />
          <label onClick={this.labelClickHandler} onDoubleClick={this.labelDbclickHandler} >{this.props.text}</label>
          <button className="destroy"></button>
        </div>
        <input onKeyDown={this.inputEditKeyDownHandler} onBlur={this.inputEditBlurHandler} ref="inputEdit" className="edit" defaultValue={this.props.text} />
      </li>
    )
  }
})
