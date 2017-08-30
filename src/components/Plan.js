import React from 'react'

const Plan = ({plan}) =>
  <div className="tile">
    <h4>{plan.title}</h4>
    <p>{plan.body}</p>
  </div>

export default Plan