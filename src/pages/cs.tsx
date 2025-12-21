import { useNavigate } from 'react-router-dom'

function CS(): React.ReactElement {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
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
