import React from 'react';
import { useNavigate } from 'react-router-dom' 

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div>
            <h1>
                HOME PAGE
            </h1>
            <button onClick={() => handleNavigation('/cs')}>
                CS
            </button>
            <button onClick={() => handleNavigation('/music')}>
                Music
            </button>
            <button onClick={() => handleNavigation('/art')}>
                Art
            </button>
        </div>
    )

};

export default Home;
