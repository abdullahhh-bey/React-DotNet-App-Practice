import {React, useState, useEffect } from 'react'
import apiCall from '../services/axios';
import Loading from '../components/Loading';


const DeleteUser = () => {

    const [alert, setAlert] = useState(true)
    const [success, setSuccess] = useState(false)
    const [errorValue, setErrorValue] = useState('')
    const [error, setError] = useState(false)
    const [loading , setLoading] = useState(false)
    const [email , setEmail] = useState('');



    const handleSubmit = async () => {
        setAlert(true)
        setLoading(true)
        await apiCall.delete(`/userinfo/${email}`)
        .then((res) => {
            setSuccess(true)
        })
        .catch((error) => {
            setErrorValue(error.message)
            setError(true)
        })
        setLoading(false)
        setEmail('')
    }


    const handleReset = () => { 
        setAlert(false)
        setEmail("")
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }


    useEffect(() => {
            if(alert){
                setTimeout(() => {
                    setAlert(false)
                }, 4000)
            }
        },[alert])



    if(loading){
        return(
            <Loading />
        );
    }

  return (
    <>
            { alert && (error || success) ? (
                        <div
                            className={`alert alert-${error ? 'danger': 'success'} alert-dismissible fade show`}
                            style={{ width: '100%' }}
                            role="alert">
                            <strong>{error ? `Error: ${errorValue}` : `User Deleted Successfully!`}</strong>
                            <button
                            type="button"
                            className="btn-close"
                            onClick={handleReset}
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            ></button>
                        </div>
                        ) : ('')}   
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-3" style={{ width: "400px" }}>
        <h2 className="text-center text-success mb-3">Delete Student</h2>
        <p className="text-muted text-center mb-4">
          Enter the student's email address to remove their record.
        </p>

        <form>
          <div className="form-floating mb-4">
            <input
              type="email"
              value={email}
              className="form-control border-1 shadow"
              id="deleteEmail"
              onChange={handleChange}
              placeholder="student@example.com"
              required
            />
            <label htmlFor="deleteEmail">Student Email</label>
          </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-success w-100 py-2 rounded-pill fw-semibold"
                >
                    Delete Student
                </button>
        </form>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-outline-secondary rounded-pill px-4"
          >
            Back
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DeleteUser
