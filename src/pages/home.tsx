import { useNavigate } from 'react-router-dom' 

const Home = (): React.ReactElement => {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path)
    }

    return (
        <div className="flex h-full w-full">
            {/* Left Container */}
            <div className="flex-1 flex flex-col items-start p-8 gap-6">
                <h1 className="text-3xl! font-bold">
                    Thomas Walter
                </h1>
                <p className="text-left">
                    Hello! I'm Thomas, a computer science major at Yale. My coursework has spanned CS fundamentals, from algorithms and data structures to web development and database design, to other areas of interst like quantum computing, big-data system design, and computation game intelligence. Outside of CS, I'm a cellist and enjoy everything artistic! Feel free to browse below.
                </p>
                <div 
                    onClick={() => handleNavigation('/cs')} 
                    className="cursor-pointer hover:underline text-xl"
                >
                    CS →
                </div>
                <div 
                    onClick={() => handleNavigation('/music')} 
                    className="cursor-pointer hover:underline text-xl ml-30"
                >
                    Music →
                </div>
                <div 
                    onClick={() => handleNavigation('/art')} 
                    className="cursor-pointer hover:underline text-xl ml-60"
                >
                    Art →
                </div>
            </div>

            {/* Right Container */}
            <div className="flex-1 flex items-start p-8">
                <img 
                    src="/me.JPG" 
                    alt="Home page image" 
                    className="w-3/4 max-h-120 object-contain"
                />
            </div>
        </div>
    )

};

export default Home;
