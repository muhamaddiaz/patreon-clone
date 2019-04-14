import React from 'react'

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.status} alert-dismissible fade show`} role="alert">
        {props.children}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
  )
}