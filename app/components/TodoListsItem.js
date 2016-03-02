import React from "react";
import classNames from "classnames";

export default React.createClass({
  getInitialState: function() {
    return {
      stateEditing: false,
    }
  },
  checkBoxClickHandler: function() {
    this.props.stateChange(this.props.itemKey)
  },
  labelClickHandler: function(e) {
    // e.stopPropagation();
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
  buttonClickHandler: function() {
    this.props.itemDelete(this.props.itemKey);
  },
  componentDidUpdate: function() {
    this.state.stateEditing && this.refs.inputEdit.focus();
    console.log("update")
  },
  render: function() {
    let classes = classNames({
      "completed": (this.props.state === "done"),
      "editing": this.state.stateEditing,
    })
    return (
      <li key={this.props.key} className={classes}>
        <div className="view">
          <input onChange={this.checkBoxClickHandler} className="toggle" type="checkbox" checked={(this.props.state === "done") ? true : false} />
          <label onClick={this.labelClickHandler} onDoubleClick={this.labelDbclickHandler} >{this.props.text}</label>
          <button onClick={this.buttonClickHandler} className="destroy"></button>
        </div>
        <input onKeyDown={this.inputEditKeyDownHandler} onBlur={this.inputEditBlurHandler} ref="inputEdit" className="edit" defaultValue={this.props.text} />
      </li>
    )
  }
})
