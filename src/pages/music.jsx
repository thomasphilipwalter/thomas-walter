import React from 'react';
import { useNavigate } from 'react-router-dom'

function Music() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>
                MUSIC
            </h1>
            <button onClick={() => handleNavigation('/')}>
                Back
            </button>
        </div>
    )

}

export default Music;
