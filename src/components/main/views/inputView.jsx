import React from "react";
import { Component } from "react";
import Personal from "../components/personal/personal";
import EducationForm from "../components/forms/educationForm";

export default class InputView extends Component {
  render(){
    const storage = this.props.storage
    return(
      <div className="input-view">
      <h1>I am an Input View Component</h1>
      <EducationForm/>
      </div>
    )
  }
}