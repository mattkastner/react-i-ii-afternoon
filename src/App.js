import React, {Component} from 'react';
import './App.css';

import Top from './Top/Top'
import Middle from './Middle/Middle'
import Bottom from './Bottom/Bottom'
import data from './data'


class App extends Component {
  constructor(){
    super()

    this.state = {
      index: 0,

      approveEdit: false,
  }

  }

  editData = () => {
    this.setState({
      approveEdit: !this.state.approveEdit
    })  
    console.log("clicked edit")
    console.dir(this.state.approveEdit)
  }

  submitChange = () => {
    this.setState({
      approvedEdit: !this.state.approveEdit
    })
    console.dir(this.state.approveEdit)
  }

  
  returnToHome = () => {
    this.setState({
        index: 0
    })
  }
  
  next = () => {
    if(this.state.index < data.length -1){
      this.setState({
          index: this.state.index +1
      })
      console.log(this.state.index)
    } else {
      alert("You have run out of people")
    }
  }
  
  previous = () => {
    if(this.state.index > 0){
      this.setState({
        index: this.state.index -1
        
    })
    console.log(this.state.index)
    } else {
      alert("You have run out of people")
    }
  }

  render(){
    return (
      <div className="App">
        <Top returnToHome={this.returnToHome}/>
        <Middle index={this.state.index} approveEdit={this.state.approveEdit}/>
        <Bottom index={this.state.index} next={this.next} previous={this.previous} approveEdit={this.state.approveEdit} editData={this.editData} submitChange={this.submitChange}/>
      </div>
    )
  }
  
}

export default App;
