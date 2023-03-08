import React from "react";
import { Component } from "react";

export default class DisplayView extends Component{
  render(){
    const educationData = this.props.storage.education
    const personalData = this.props.storage.personal
    const professionalData = this.props.storage.professional
    return(
      <div className="display-view">
      <h1>I am a DisplayView</h1>
      <h2>{this.props.text}</h2>
      </div>
    )
  }
}