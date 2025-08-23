import React from 'react'
import PersonList from '../components/PersonList'

const Service = () => {
  return (
    <div className='container-fluid mt-5 text-center'>
        <h1>Students List</h1>
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
