import React, {Component} from 'react'

import './Top.css'

class Top extends Component {
    

    render(){
        return (
            <div className="top" onClick={this.props.returnToHome}>
                <h2>Home</h2>
            </div>
        )
    }
}

export default Top