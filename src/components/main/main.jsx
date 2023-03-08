import React from "react";
import { Component } from "react";
import DisplayView from "./views/displayView";
import InputView from "./views/inputView";

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      view : 'InputView',
      cvInformation : {
        personal : {
          items: [{
            name: 'jan has been found',
            email: 'jan@jan.com'
          }]
        },
        education : {
          items: [{
            universityName: 'Harward'
          },
          {
            universityName: 'Hogwart'
          }]
        },
        professional : {
          items: [{
            organization: 'Nordea',
            country: 'Denmark'
          },{
            organization: 'Google',
            country: 'Poland'
          }]
        } 
      }
    }
    this.changeView = this.changeView.bind(this)
  }
  changeView(){
    this.state.view === 'DisplayView' ? this.setState({view : 'InputView'}) : this.setState({view : 'DisplayView'})
  }


  render(){
    const storage = this.state.cvInformation
    const viewMode = this.state.view
    const content = (viewMode === 'DisplayView') ? <DisplayView storage={storage} text="texting" /> : <InputView storage={storage} />
    return(
      <div className="main">
      <h1>{this.state.mode}</h1>
      {content}
      <button onClick={this.changeView} />
      </div>

    )
  }
}