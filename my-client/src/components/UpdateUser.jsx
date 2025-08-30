import React, { useState } from 'react'
import apiCall from '../services/axios'

const UpdateUser = ({student, onSave , onCancel}) => {
  const secret = student.email;
  const [updateUser , setUser] = useState({...student})  
  const [response , setResponse] = useState('initial')
  const [error , setError] = useState('')

  const handleChange = (e) => {
    setUser({
      ...updateUser,
      [e.target.name] : e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse('loading')
    const {id , ...body} = updateUser
     // remove undefined/null keys so backend doesn't break
    const cleanedBody = Object.fromEntries(
      Object.entries(body).filter(([_, v]) => v !== undefined && v !== null)
    );
    await apiCall.put(`/userinfo/update/${encodeURIComponent(secret)}`, cleanedBody)
    .then(res => {
      setResponse('success')
      onSave(res.data)
      window.location.reload();

    })
    .catch(err => {
      setError(err.message)
      setResponse('error')
    })

  }

   var initial = (response === 'initial')
   var err = (response === 'error')
   var loading = (response === 'loading')
   var success = (response === 'success')

  return (
    <>
     <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)", // dim background
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
       <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "400px",
        maxWidth: "90%",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.3)"
      }}> 
        {success && 
        <> 
        <h1>Student Updated Successfully!</h1>
        <p className="lead">Thank You!</p>
        </>
        }
        {loading && <h6>Loading...</h6>}
        {err && <h1>Error: {error}</h1>}
        { initial && <div>
        <h4 className="mb-3">Edit Student Info</h4>
        <form>
          <input
            className="form-control mb-2"
            type="text"
            name="id"
            value={updateUser.id}
            disabled
          />

          <input
            className="form-control mb-2"
            type="text"
            name="name"
            value={updateUser.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            type="email"
            name="email"
            value={updateUser.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-2"
            type="text"
            name="course"
            value={updateUser.course}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            type="number"
            step="0.1"
            name="cgpa"
            value={updateUser.cgpa}
            onChange={handleChange}
          />
          </form>
            </div> }
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-outline-success me-2" onClick={onCancel}>
              {success ? "Go Back" : "Cancel"}
            </button>
           { initial && <button onClick={handleSubmit} className="btn btn-outline-success">
              Save Changes
            </button> }
          </div>
      </div> 
    </div>
    </>
  );
}

export default UpdateUser
