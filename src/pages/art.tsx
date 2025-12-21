import { useNavigate } from 'react-router-dom'

function Art(): React.ReactElement {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
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
