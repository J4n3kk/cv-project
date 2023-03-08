import React from "react";
import { Component } from "react";

export default class TextArea extends Component {

  render(){
    return(
      <label>{this.props.for}
        <textarea name={this.props.name} value={this.props.value}/>
      </label>
    )
  }
}