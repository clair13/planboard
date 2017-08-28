import React, { Component } from 'react';
import axios from 'axios';

class PlansContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001.api/v1/plans.json')
    .then(response => {
      console.log(response)
      this.setState({plans: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="">
        Plans
      </div>
    );
  }
}

export default PlansContainer
