import React from 'react'
import PersonList from '../components/PersonList'
import InputFilter from '../components/InputFilter'

const Service = () => {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column mt-5 text-center'>
      <div className="col-lg-6 ">
        <InputFilter />
      </div>
        <h1>All Students</h1>
            <div style={{
                margin: "40px 0px",
                width : "100%",
                height : "80vh",
            }}>
                    <PersonList />
            </div>
    </div>
  )
}

export default Service
