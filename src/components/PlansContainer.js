import React, { Component } from 'react'
import axios from 'axios'

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
      console.log(response)
      this.setState({plans: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        {this.state.plans.map((plan) => {
          return (
            <div className="title" key={plan.id}>
              <h4>{plan.title}</h4>
              <p>{plan.body}</p>
            </div>
          )
          
        })}
      </div>
    );
  }
}

export default PlansContainer
