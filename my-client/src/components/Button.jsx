import React from 'react'

const Button = (props) => {
  return (
    <button onClick={() => props.onClick()} className="my-2 btn btn-success py-2 px-4">
        {props.value}
    </button>
  )
}

export default Button
