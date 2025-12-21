import { useNavigate } from 'react-router-dom'

function Music(): React.ReactElement {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
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
