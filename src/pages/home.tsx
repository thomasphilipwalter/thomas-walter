import { useNavigate } from 'react-router-dom' 

const Home = (): React.ReactElement => {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path)
    }

    return (
        <div className="flex h-full w-full">
            {/* Left Container */}
            <div className="flex-2 flex flex-col items-start p-8 gap-1">
                <h1 className="text-3xl! font-bold">
                    Thomas Walter
                </h1>
                <div className="flex items-center gap-2 text-sm">
                    <a className="hover:underline" target="_blank" href="https://www.linkedin.com/in/thomas-walter-46199a1b1/">LinkedIn</a>
                    <span className="text-lg">·</span>
                    <a className="hover:underline" target="_blank" href="https://github.com/thomasphilipwalter">GitHub</a>
                    <span className="text-lg">·</span>
                    <a className="hover:underline" target="_blank" href="./thomas_walter.pdf">Resume</a>
                </div>
                <p className="text-left mt-6">
                    Hello! I'm Thomas, a computer science major at Yale. My coursework has spanned CS fundamentals, from algos and data structures to web development and database design, to other areas of interst like quantum computing, big-data systems, and computation game intelligence. During my internships, I've spent time writing firmware at Schneider Electric, working on network communications for a high-precision servo drive. I've also worked as a software engineer at an oncology lab at the Yale School of Medicine and at a climate advisory startup in New York. Outside of CS, I'm a cellist and enjoy everything artistic! Feel free to browse below.
                </p>
                <div></div>
                <div className="overflow-visible">
                    <div 
                        onClick={() => handleNavigation('/cs')} 
                        className="cursor-pointer font-bold hover:brightness-90 text-xl ml-30 bg-[url('/button-bg.png')] bg-[length:100%] bg-center bg-no-repeat px-4 py-2 mt-6"
                    >
                        CS →
                    </div>
                </div>
                <div className="overflow-visible">
                    <div 
                        onClick={() => handleNavigation('/music')} 
                        className="cursor-pointer font-bold hover:brightness-90 text-xl ml-60 bg-[url('/button-bg-2.png')] bg-[length:65%] bg-center bg-no-repeat px-4 py-2 mt-6"
                    >
                        Music →
                    </div>
                </div>
                <div className="overflow-visible">
                    <div 
                        onClick={() => handleNavigation('/art')} 
                        className="cursor-pointer font-bold hover:brightness-90 text-xl ml-90 bg-[url('/button-bg-3.png')] bg-[length:90%] bg-center bg-no-repeat px-4 py-2 mt-6"
                    >
                        Art →
                    </div>
                </div>
            </div>

            {/* Right Container */}
            <div className="flex-1 flex items-center justify-center p-8 pl-16">
                <img 
                    src="/me.JPG" 
                    alt="Home page image" 
                    className="max-h-full max-w-full object-contain rounded-sm"
                />
            </div>
        </div>
    )

};

export default Home;
