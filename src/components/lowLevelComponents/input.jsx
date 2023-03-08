import React from "react";
import { Component } from "react";

export default class Input extends Component {

  render(){
    return(
      <label>{this.props.label}
      <input type="text" value={this.props.value} onChange={this.props.onChange} id={this.props.id}></input>
      </label>
    )
  }
}