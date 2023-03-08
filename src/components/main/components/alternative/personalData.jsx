import React from "react";

export default class PersonalData extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name : 'Jan Kowalski',
      position : "IT specialist",
      email : 'example@example.com'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAvatar = this.handleAvatar.bind(this)
  }
  handleChange(event){
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  handleAvatar(event){
    event.stopPropagation()
    const avatarURL = URL.createObjectURL(event.target.files[0])
    this.setState({
      avatar : avatarURL
    })
    console.log(this.state)
  }
  render(){

    return(
      <>
      <div className="personal-input" onChange={this.handleChange}>
        <input type="text" placeholder="Your name" value={this.state.name} id="name" />
        <input type="text" placeholder="Look out position" value={this.state.position} id="position" />
        <input type="text" placeholder="Email address" value={this.state.email} id="email" />
        <label htmlFor="avatar">Avatar: </label>
        <input type="file" id="avatar" accept="image/png*" onChange={this.handleAvatar}></input>
      </div>
      <div className="personal-view">
      <h3>{this.state.name}</h3>
      <h4>{this.state.position}</h4>
      <h5>{this.state.email}</h5>
      <img src={this.state.avatar} alt="your avatar" style={{height : "200px", width : "200px"}} />
      </div>
      </>
    )
  }
}