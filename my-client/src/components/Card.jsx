import React, { useState } from 'react'
import './Card.css'
import UpdateUser from './UpdateUser';

const Card = ({ name, email, course, cgpa, id, onStudentUpdated}) => {

    const titleName = name.substr(0,2).toUpperCase();
    const [edit, setEdit] = useState(false);


    const handleSave = (updatedStudent) => {
    onStudentUpdated(updatedStudent); // send data up (to parent list or state)
    setEdit(false); // close edit form
  };


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
                {titleName}
            </h1>

        {cgpa >= 3.5 && <p style={{
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
            </p>}

        </div>
        <div className="card-body">
            <h5 className="card-title my-3 name">{name} </h5> 
            <p className=" email">Email: {email}</p>
            <p className=" course">Courses Enrolled: <b>{course}</b></p>
            <h6 className="my-4 cgpa">{cgpa > 0 ? `CGPA:  ${cgpa}` : 'New Admission'}</h6>
            <p className="card-text mb-2 cgpa"><small className="text-body-secondary fw-bold">
                {cgpa > 0 ? 'Sernior' : 'Junior' }
                </small></p>
        </div>
        <button style={{
                textAlign: "center",
                width: "100%",
                fontSize: "20px"  
            }} className='mt-2 py-2 btn btn-success' onClick={() => setEdit(true)}>Edit</button>
    </div>

            {edit && <UpdateUser student={{
                id : id,
                name : name,
                email : email,
                course : course,
                cgpa : cgpa
            }} onSave={handleSave} onCancel={() => setEdit(false)}/>}
    </>
  )
}

export default Card
