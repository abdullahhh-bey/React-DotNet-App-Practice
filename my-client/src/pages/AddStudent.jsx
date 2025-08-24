import React, { useState } from 'react'
import Button from '../components/Button'
import apiCall from '../services/axios'
import Loading from '../components/Loading'

const AddStudent = () => {

    const [success, setSuccess] = useState(false)
    const [response, setResponse] = useState('')
    const [errorValue, setErrorValue] = useState('')
    const [error, setError] = useState(false)
    const [loading , setLoading] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        course: "",
        cgpa: null
    })

    //it will reset all inputs
    const handleReset = () => {
        setError(false)
        setSuccess(false)
        setUser({
            name: "",
            email: "",
            course: "",
            cgpa: null
        })
    }

    //it will handle change
    const handleOnChange = (e) => {
        setUser({
            ...user,
             [e.target.name]: e.target.name === "cgpa"
            ? e.target.value === "" ? null : parseFloat(e.target.value) // handle number
            : e.target.value, // handle text/email
        })
    }


    //it will call the api with the useEffect and user
    const handleSubmit = async () => {
        setLoading(true);
        await apiCall.post('/userinfo' , user)
        .then(res => {
            
                setResponse(res.statusText)
                setSuccess(true);
                console.log(res)})
        .catch(error => 
            {
                setErrorValue(error.message)
                setError(true)
            })
         setLoading(false)
         setUser({
            name: "",
            email: "",
            course: "",
            cgpa: null
        })
    }


    //It shares the functio to fo back to form


    //When the button triggers
    if(loading){
        return (
            <Loading />
        )        
    }

   
    return (
        <>
            <div className="container-fluid">
                <div style={{
                    paddingTop: "50px",
                    width: "100%",
                    height: "80vh",
                    display : "flex",
                    flexDirection: "column",
                    justifyContent : "center",
                    alignItems : "center",
                }}>
                    {error || success ? (
                        <div
                            className={`alert alert-${error ? 'danger': 'success'} alert-dismissible fade show`}
                            style={{ width: '100%' }}
                            role="alert">
                            <strong>{error ? `Error: ${errorValue}` : `${response} User Successfully`}</strong>
                            <button
                            type="button"
                            className="btn-close"
                            onClick={handleReset}
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            ></button>
                        </div>
                        ) : ('')}
                    <h1 className="my-5">Add a Student</h1>

                        <div className="col-lg-4">
                            <form className="p-3 border rounded shadow-lg bg-light">
                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingName"
                                name="name"
                                value={user.name}
                                onChange={handleOnChange}
                                placeholder="Enter name"
                                required
                            />
                            <label htmlFor="floatingName">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingCourse"
                                name="course"
                                value={user.course}
                                onChange={handleOnChange}
                                placeholder="Enter course"
                                required
                                
                            />
                            <label htmlFor="floatingCourse">Course</label>
                            </div>

                            <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                name="email"
                                value={user.email}
                                onChange={handleOnChange}
                                placeholder="Enter email"
                                required
                            />
                            <label htmlFor="floatingEmail">Email</label>
                            </div>

                            <div className="form-floating mb-4">
                            <input
                                type="number"
                                step="0.01"
                                className="mb-2 form-control"
                                id="floatingCgpa"
                                name="cgpa"
                                value={user.cgpa ?? ""}
                                onChange={handleOnChange}
                                placeholder="Enter CGPA"
                                required
                            />
                            <label htmlFor="floatingCgpa">CGPA</label>
                            {/* <small className='mb-2'>Enter 0 for New Admission</small> */}
                            </div>

                            <div className="d-flex justify-content-between">
                                <Button onClick={handleReset} value="Reset Changes" />
                                <Button onClick={handleSubmit} value="Create User" />
                            </div>
                                </form>
                                </div>
                        </div>
                    </div> 
                    </>
                )
    }

export default AddStudent
