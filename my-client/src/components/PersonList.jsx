import React, { useEffect, useState } from 'react'
import Card from './Card';
import apiCall from '../services/axios';

const PersonList = () => {

    const [users , setUsers] = useState([]);
    const [error, setError] = useState("");

    //Fetching the users from the Api
    useEffect(() => {
        const fetchUsers = async () => {
            await apiCall
                 .get('/userinfo')
                 .then(response => setUsers(response.data))
                 .catch(error => setError("We had an Error"))
        }
        fetchUsers();
    }, [])

    if(error !== ""){
        return (
        <div style={{
            width: "100%",
            height: "60vh",
            fontStyle : "italic",
            display: "flex",
            justifyContent : "center",
            alignItems : "center"
        }}>
            <h1>{error}</h1>
        </div>
        );
    }

  return (
    <>
    <div className='container-lg'>
        <div className="row ">
             {
                users.map((user) => {
                    return (
                        <div key={user.id} className='col-lg-3 col-md-6 my-4 '>
                            <Card name={user.name} email={user.email} 
                            course={user.course} cgpa={user.cgpa}/>
                        </div>
                    );
                })
             }
        </div>
    </div>
    </>
  )
}

export default PersonList;
