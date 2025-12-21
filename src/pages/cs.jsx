import React from 'react';
import { useNavigate } from 'react-router-dom'

function CS() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>
                COMPUTER SCIENCE
            </h1>
            <button onClick={() => handleNavigation('/')}>
                Back
            </button>
        </div>
    )

}

export default CS;
