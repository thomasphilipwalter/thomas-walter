import { useNavigate } from 'react-router-dom' 

const Home = (): React.ReactElement => {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path)
    }

    return (
        <div className="flex h-screen w-full">
            {/* Left Container */}
            <div className="flex-1 flex flex-col justify-center items-center p-8">
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
            <div className="flex-1 flex justify-center items-center p-8">
                <img 
                    src="/me.JPG" 
                    alt="Home page image" 
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </div>
    )

};

export default Home;
