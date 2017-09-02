import React, { Component } from 'react'
import axios from 'axios'
import Plan from './Plan'
import PlanForm from './PlanForm'
import update from 'immutability-helper'

class PlansContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: [],
      editingPlanId: null,
      notification: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/plans.json')
    .then(response => {
      this.setState({plans: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewPlan = () => {
    axios.post('http://localhost:3001/api/v1/plans', {plan: {title: '', body: ''}})
    .then(response => {
      const plans = update(this.state.plans, { $splice: [[0, 0, response.data]]})
      this.setState({plans: plans, editingPlanId: response.data.id})
    })
    .catch(error => console.log(error))
  }

  updatePlan = (plan) => {
    const planIndex = this.state.plans.findIndex(x => x.id === plan.id)
    const plans = update(this.state.plans, {[planIndex]: { $set: plan }})
    this.setState({plans: plans, notification: 'All changes saved'})
  }

   deletePlan = (id) => {
    axios.delete(`http://localhost:3001/api/v1/plans/${id}`)
    .then(response => {
      const planIndex = this.state.plans.findIndex(x => x.id === id)
      const plans = update(this.state.plans, { $splice: [[planIndex, 1]]})
      this.setState({plans: plans})
    })
    .catch(error => console.log(error))
  }

  resetNotification = () => {this.setState({notification: ''})}

  enableEditing = (id) => {
    this.setState({editingPlanId: id}, () => { this.title.focus() })
  }

  render() {
    return (
      <div>
        <div>
          <button className="newPlanButton" onClick={this.addNewPlan} >
            New Plan
          </button>
          <span className="notification">
           {this.state.notification} 
          </span>
        </div>
        {this.state.plans.map((plan) => {
          if(this.state.editingPlanId === plan.id) {
            return(<PlanForm plan={plan} key={plan.id} updatePlan={this.updatePlan}
                    titleRef= {input => this.title = input}
                    resetNotification={this.resetNotification} />)
          } else {
            return (<Plan plan={plan} key={plan.id} onClick={this.enableEditing}
                    onDelete={this.deletePlan} />)
          }
        })}
      </div>
    );
  }
}

export default PlansContainer