import React from "react";
import { Component } from "react";
import PersonalItem from "./personalItem";

export default class Personal extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    const storage = this.props.storage
    return(
      <section className="personal">
        <h1>Inside Personal Component</h1>
        <PersonalItem storage={storage}/>
      </section>
    )
  }
}