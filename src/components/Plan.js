import React, { Component } from 'react'

class Plan extends Component {
	handleClick = () => { this.props.onClick(this.props.plan.id) }

	handleDelete = () => { this.props.onDelete(this.props.plan.id) }

	render () {
		return(
		  <div className="tile">
		  	  <span className="deleteButton" onClick={this.handleDelete}>x</span>
		    <h4 onClick={this.handleClick}>{this.props.plan.title}</h4>
		    <p onClick={this.handleClick}>{this.props.plan.body}</p>
		  </div>
		)
	}
}

export default Plan