// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isDisplay: true}
  onShowFirstName=()=>(prevState=>{
    {isDisplay:!prevState.isDisplay}
  })
  onShowLastName=()=>(prevState=>{
    {isDisplay:!prevState.isDisplay}
  })

  

  render() {
    const {isDisplay} = this.state;
    

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="new-container">
          <button className="button" onClick={this.onShowFirstName}>Show/Hide FirstName</button>
          <button className="button" onClick={this.onShowLastName}>Show/Hide LastName</button>
        </div>
      </div>
    )
  }
}
export default ShowHide