import React from 'react';
import { useNavigate } from 'react-router-dom'

function Art() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>
                ART
            </h1>
            <button onClick={() => handleNavigation('/')}>
                Back
            </button>
        </div>
    )

}

export default Art;
