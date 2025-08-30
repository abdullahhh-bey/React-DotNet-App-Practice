import React, { useState } from 'react'
import Loading from './Loading'
import apiCall from '../services/axios'
import Card from './Card'

const InputFilter = () => {

  const [option, setOption] = useState("courses"); // default option
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentResponse, setStudentResponse] = useState(null);
  const [coursesResponse, setCoursesResponse] = useState([]);
  const [error, setError] = useState("");

  const handleClick = async () => {
    setError("");
    setStudentResponse(null);
    setCoursesResponse([]);
    setLoading(true);

    try {
      if (option === "student") {
        setCoursesResponse([])
        const res = await apiCall.get(`/userinfo/by-email/${encodeURIComponent(input)}`);
        setStudentResponse(res.data);
      } else if (option === "courses") {
        setStudentResponse(null)
        const res = await apiCall.get(`/userinfo/courses`);
        console.log(res.data)
        setCoursesResponse(res.data); // assuming it's an array
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };
    
    if(loading){
        return <Loading />
    }

  return (
    <>
    <div className="container my-4">
      <div className=" card shadow border-0 p-4">
        <h4 className="mb-3">Find Anything.</h4>

        {/* Select Option */}
        <div className="mb-3">
          <select
            className="form-select"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="courses">Get All Courses</option>
            <option value="student">Search Student by Email</option>
          </select>
        </div>

        {/* Conditional Input */}
        {(option === "student") && (
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={"Enter student email"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="d-flex justify-content-end">
          <button type="button" onClick={handleClick} className="btn btn-success">
            Search
          </button>
        </div>
      </div>

       {studentResponse && (
        <Card
          name={studentResponse.name}
          course={studentResponse.course}
          email={studentResponse.email}
          cgpa={studentResponse.cgpa}
        />
      )}
        {coursesResponse.length > 0 && (
            <div className="mt-4">
                <h2>All Courses</h2>
                <ul className="list-group text-start">
                {coursesResponse.map((course, idx) => (
                    <li key={idx} className=" h5 py-2 ">
                    {course}           
                    </li>
                ))}
                </ul>
            </div>
            )}

      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
    </>
  )
}

export default InputFilter
