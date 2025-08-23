import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
    <div style={{
        boxShadow : "3px 2px 25px grey",
        overflow : "hidden",
        }} className="card cardHover">
        <div style={{
            display : "flex",
            justifyContent : "center",
            alignItems : "center",
            fontWeight : "lighter",
            width: "100%",
            height : "100%",
            padding : "50px 0px",
            backgroundColor: "GrayText",
            color : "white"
           }}>
            <h1 className="display-5">
                HA
            </h1>


            <p style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            backgroundColor: "green",
            color: "white",
            padding: "7px 13px",
            borderRadius: "6px",
            fontSize: "0.9rem",
            fontWeight: "medium",
            }}>
                Topper
            </p>


        </div>
        <div className="card-body">
            <h5 className="card-title my-3 name">John Abdullah </h5> 
            <p className=" email">Email: a@example.com</p>
            <p className=" email">Course Enrolled: Course.</p>
            <p className=" email">CGPA: </p>
            <p className="card-text mb-2 cgpa"><small className="text-body-secondary fw-bold">Senior</small></p>
        </div>
    </div>
    </>
  )
}

export default Card
