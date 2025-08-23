import React from 'react'
import Card from './Card';
const PersonList = () => {
  return (
    <>
    <div className='container-lg'>
        <div className="row ">
            <div className='col-lg-3 col-md-6 my-4 '>
                <Card />
            </div>
             <div className='col-lg-3 col-md-6 my-4'>
                <Card />
            </div>
             <div className='col-lg-3 col-md-6 my-4 '>
                <Card />
            </div>
             <div className='col-lg-3 col-md-6 my-4'>
                <Card />
            </div>
             <div className='col-lg-3 col-md-6 my-4'>
                <Card />
            </div>
        </div>
    </div>
    </>
  )
}

export default PersonList;
