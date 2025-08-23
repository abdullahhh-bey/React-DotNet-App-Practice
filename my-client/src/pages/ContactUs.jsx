import React from 'react'
import TextType from '../components/ExternalDesigns/TextType/TextType';

const ContactUs = () => {
  return (
    <>
    <div className='container-lg text-center col-lg-8'>
            <div style= {{
                display: "flex",
                justifyContent: "center",  
                alignItems: "center",      
                height: "80vh"           
                }}>
                <h1 className='display-3'>
                    <TextType 
                    text={["Contact not Available, You can't see me!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    />
                </h1>
            </div>
        </div>
    </>
  )
}

export default ContactUs;