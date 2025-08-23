import React from 'react'
import TextType from '../components/ExternalDesigns/TextType/TextType'

const Home = () => {
  return (
    <div className='container-lg text-center col-lg-8'>
        <div style= {{
            display: "flex",
            justifyContent: "center",  // Horizontal center
            alignItems: "center",      // Vertical center
            height: "80vh"            // Full viewport height
            }}>
            <h1 className='display-3'>
                <TextType 
                text={["Welcome to my Sample Mini Project. Just a Start, Happy Coding!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                />
            </h1>
        </div>
    </div>
  )
}

export default Home
