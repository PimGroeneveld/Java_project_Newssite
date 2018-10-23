import React from 'react';

const ViewCountBox = props => {
  return(
    <div className = "viewcount-box">
      <i class="fas fa-eye"></i>
      <p>  { props.count }</p>
    </div>
  )
}

export default ViewCountBox;