import React from 'react'

export default function Profiles() {
  return (
    <div id="profile">
      {Item()}
    </div>
  )
}

function Item() {
  return (
  <div>
    <div>
      {/* <img></img> */}
      <div>
        <h3 className='info'>Name</h3>
        <span>Location</span>
      </div>
    </div>
    <div className='item'>Score</div>
  </div>
  )
}
