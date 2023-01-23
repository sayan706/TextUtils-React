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
                          <strong>This is a Text utillity based App.</strong> T extUtils is simply a set of utility functions to do operations on String objects. I usually have gone through many projects & I have seen many times in the code there is no use of TextUtils, I am not saying that it's necessary to use it but if we can reduce some extra work so then why not?
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
