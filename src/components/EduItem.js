import React from "react";

const EduItem = (props) => {
  return(
    <div>
      <h2>{props.data.name}</h2>
      <h3>Major {props.data.major}</h3>
    </div>
  )
}

export default EduItem