import React from 'react'

const Error = (props) => {
  return (
    <>
        <div style={{
                width: "100%",
                height: "80vh",
                display : "flex",
                flexDirection: "column",
                justifyContent : "center",
                alignItems : "center",
                 }}>
                    <h1>{props.error}</h1>
                    <div className="d-flex justify-content-between">
                        <button onClick={props.handlePrevious} className="my-2 btn btn-success py-2 px-4">
                            {props.value}
                        </button>
                    </div>
        </div>
    </>
  )
}

export default Error
