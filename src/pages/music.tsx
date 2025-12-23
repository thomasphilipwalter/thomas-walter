import { useNavigate } from 'react-router-dom'

function Music(): React.ReactElement {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path)
    }

    return (
        <div className="flex h-full w-full">
            {/* Left Container */}
            <div className="flex-2 flex flex-col items-start p-8 gap-1">
                <h1 className="text-3xl! font-bold">
                    Music
                </h1>
                <div className="overflow-visible">
                    <div 
                        onClick={() => handleNavigation('/')} 
                        className="cursor-pointer font-bold hover:brightness-90 text-l bg-[url('/button-bg-2.png')] bg-[length:80%] bg-center bg-no-repeat px-4 py-2"
                    >
                        ← BACK
                    </div>
                </div>
                <p className="text-left mt-6">
                    <span className="font-bold">Hello! I'm Thomas, a computer science major at Yale.</span> My coursework has spanned CS fundamentals, from algos and data structures to web development and database design, to other areas of interest like quantum computing, big-data systems, and computation game intelligence. During my internships, I've spent time writing firmware at Schneider Electric, working on network communications for a high-precision servo drive. I've also worked as a software engineer at an oncology lab at the Yale School of Medicine and at a climate advisory startup in New York. Outside of CS, I'm a cellist and enjoy everything artistic! Feel free to browse below.
                </p>
                <div></div>
            </div>
        </div>
    )

}

export default Music;
