import { useNavigate } from 'react-router-dom' 

const Home = (): React.ReactElement => {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path)
    }

    return (
        <div style={{ 
            display: 'flex', 
            height: '100vh',
            width: '100%'
        }}>
            {/* Left Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <h1>
                    Thomas Walter
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

            {/* Right Container */}
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <img 
                    src="/me.JPG" 
                    alt="Home page image" 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                    }}
                />
            </div>
        </div>
    )

};

export default Home;
