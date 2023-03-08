import React from "react";
import { Component } from "react";
import Input from "../../../lowLevelComponents/input";
import { v4 } from "uuid";

export default class PersonalItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: v4(),
      name : '',
      email : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
  // It sets the state for variable, and later updates global state of cvInformation
    console.log(e.target)
    const id = this.state.id
    const inputAttribute = e.target.id
    console.log(`this is attribute of input: ${inputAttribute}`)
    this.setState({
      [inputAttribute] : e.target.value
    })
    const indexOfItem = this.findItemIndex(this.props.storage.personal.items, id)
    //console.log(indexOfItem)
    if (indexOfItem === -1){
      //console.log('triggered for index -1')
      this.props.storage.personal.items = this.props.storage.personal.items.concat(this.state)
    } else {
      //console.log('triggered for index other than -1')
      this.props.storage.personal.items[indexOfItem] = this.state
    }
    console.log(this.props.storage.personal.items)
  }
  findItemIndex(list = [], itemID){
    return list.findIndex(item => item.id === itemID)
  }

  render(){ 
    return(
      <div className="personal-item">
        <h1>Inside Personal Item</h1>
        <Input id="name" label="Name" value={this.state.name} onChange={this.handleChange}/>
        <Input id="email" label='Email' value={this.state.email} onChange={this.handleChange}/>
        <Input id="position" label='Position' value={this.state.position} onChange={this.handleChange}/>
      </div>
    )
  }
}


// create function to add item to a itemlist if the ID in storage does not exist
// if it does not exist, modify the list with index of found object 