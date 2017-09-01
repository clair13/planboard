import React, { Component } from 'react'

class PlanForm extends Component {
	constructor(props) {
	  super(props)
	  this.state = {

	  }
	}

	render() {
		return (
			<div className="tile">
			  <form>
			    <input className='input' type="text" name="title" placeholder='Enter a Title' />
			    <textarea className='input' name="body" placeholder='Describe your plan'></textarea>
			  </form>
			</div>
		);

	}
}

export default PlanForm