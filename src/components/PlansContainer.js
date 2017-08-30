import React, { Component } from 'react'
import axios from 'axios'
import Plan from './Plan'

class PlansContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/plans.json')
    .then(response => {
      this.setState({plans: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <div>
          <button className="newPlanButton">
            New Plan
          </button>
        </div>
        {this.state.plans.map((plan) => {
          return (
            <Plan plan={plan} key={plan.id} />
          )
        })}
      </div>
    );
  }
}

export default PlansContainer
