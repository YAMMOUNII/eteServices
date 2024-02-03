import React from 'react'
import './../utils/Style/pages/NotFound.scss'

const NotFound = () => {
    return (
        <div className="flex-container">
            <div className="text-center">
                <h1>
                    <span className="fade-in" id="digit1">4</span>
                    <span className="fade-in" id="digit2">0</span>
                    <span className="fade-in" id="digit3">4</span>
                </h1>
                <h3 className="fadeIn">PAGE NOT FOUND</h3>
                <button onClick={() => window.location.href = "/"}>Return To Home</button>
            </div>
        </div>
    )
}

export default NotFound