import React, {Component} from 'react'

import './Bottom.css'
import data from '../data'

class Bottom extends Component {  
    submitChange = (_firstName, _lastName, _from, _title, _employer, _movie) => {
        this.props.submitChange()
        data[this.props.index].name.firstName = _firstName
        data[this.props.index].name.lastName = _lastName
        data[this.props.index].city = _from
        data[this.props.index].title = _title
        data[this.props.index].employer = _employer
        data[this.props.index].favoriteMovies.push(_movie)
    }
    render(){
        return (
            <div className="bottomList">
                {
                    this.props.approveEdit ? (
                        <div>
                            <button onClick={this.submitChange}>Submit</button>
                        </div>
                    ) : (
                        <div className="line-up">
                            <a className="next-previous" onClick={this.props.previous}>&laquo; Previous</a>
                            <div>
                                <button onClick={this.props.editData}>Edit</button>
                                <button>Delete</button>
                                <button>New</button>
                            </div>
                            <a className="next-previous" onClick={this.props.next}>Next &raquo;</a>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Bottom