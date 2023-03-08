import React from "react";
import { Component } from "react";

export default class PhotoInput extends Component {

  render(){

    return (
      <>
      <input type="file" accept="image/*" onChange={this.props.onChange} value={this.props.photo}/>
      </>
    )
  }
}