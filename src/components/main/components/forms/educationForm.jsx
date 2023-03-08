import React from "react";
import { Component } from "react";

export default class EducationForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      mode : 'input'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){  
    event.preventDefault()
    console.log(event.target.elements)
    this.setState({
      university : event.target.elements.university.value,
      title : event.target.elements.title.value,
      location : event.target.elements.location.value,
      startDate : event.target.elements.startDate.value,
      endDate : event.target.elements.endDate.value,
      details: event.target.elements.details.value
    })
    console.log(this.state)
    if (this.state.mode === 'input') this.setState({mode : 'view'})
    else this.setState({mode : 'input'})
  }
  render(){
      if(this.state.mode === "input"){
      return(
        <form onSubmit={this.handleSubmit}>
        <section name="University">
          <input type='text' name="university" placeholder="University name" id="university"/>
          <input type='text' name="title" placeholder="Title" id="title"/>
          <input type='text' name="location" placeholder="Location" id="location"/>
          <input type="date" name="startDate" id="startDate" />
          <input type="date" name="endDate" id="endDate" />
          <label htmlFor="startDate">Start date:</label>
          <label htmlFor="endDate">End date :</label>
          <textarea name="details" id="details" placeholder="Provide additional details about education programme e.g: Extra activities, awards"/>
        </section>
        <button type="submit">Save</button>
      </form>
    )
    } else {
      return(
        <div className="Edu container">
        <h1>{this.state.university}</h1>
        <h1>{this.state.title}</h1>
        </div>
      )
    }
  }
}