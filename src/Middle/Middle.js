import React, {Component} from 'react'

import data from '../data.js'

import './Middle.css'

class Middle extends Component {

    render(){
        return (
            <div className="data">
                <h1>{this.props.index +1}/{data.length}</h1>
                {
                    <div className="user-info">
                        <h2>{data[this.props.index].name.first} {data[this.props.index].name.last}</h2><br/>
                        {!this.props.approveEdit
                            ? (
                                <div>
                                    <span><b>From:</b> {data[this.props.index].city}, {data[this.props.index].country}</span><br/><br/>
                                    <span><b>Job Title:</b> {data[this.props.index].title}</span><br/><br/>
                                    <span><b>Employer:</b> {data[this.props.index].employer}</span><br/><br/>
                                    <span><b>Favorite Movies:</b> </span>
                                    <ol>
                                        {data[this.props.index].favoriteMovies.map((movie, i, arr) => {
                                            return (<li>{movie}</li>)
                                        })}
                                    </ol>
                                </div>
                            ) 
                            : (
                                <div>
                                    <span><b>From:</b> </span><input /><br/><br/>
                                    <span><b>Job Title:</b> </span><input /><br/><br/>
                                    <span><b>Employer:</b> </span><input /><br/><br/>
                                    <span><b>Favorite Movies:</b> </span><input placeholder="Add a movie"/><br/>
                                </div>
                            )}
                    </div>
                }
            </div>
        )
    }
}

export default Middle