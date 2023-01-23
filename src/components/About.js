import React, { useState } from 'react'

export default function About() {


    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        
    })
    const [btnnext, setbtnnext] = useState("Enable Dark Mode")
    const toggleStyle = () =>{
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'

            })
            setbtnnext("Enable Light Mode");
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'

            })
            setbtnnext("Enable Dark Mode");
            
        }

        }
  return (
      <div>
        <div className="container" style={myStyle}>
           <h1 className='my-3'>About Us</h1>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          About Us
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" style= {myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body" style= {myStyle}>
                          <strong>This is a Text utillity based App.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
          </div>
        
        <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnnext}</button>
        </div>
        </div>
    </div>
  )
}
