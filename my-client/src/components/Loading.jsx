import React from 'react'
import loadingGif from '../components/ExternalDesigns/load-33.gif'

const Loading = () => {
  return (
    <>
        <div style={{
        width: "100%",
        height: "80vh",
        display : "flex",
        flexDirection: "column",
        justifyContent : "center",
        alignItems : "center",
         }}>
            <img src={loadingGif} alt="Loading" width="140rem" />
        </div>
    </>
  );
}

export default Loading
