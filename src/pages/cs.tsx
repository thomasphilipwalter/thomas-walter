import { useNavigate } from 'react-router-dom'

function CS(): React.ReactElement {
    const navigate = useNavigate();

    const handleNavigation = (path: string): void => {
        navigate(path)
    }

    return (
        <div className="flex w-full">
            <div className="flex-2 flex flex-col items-start p-8 gap-1">
                <h1 className="text-3xl! font-bold">
                    Computer Science
                </h1>
                <div className="overflow-visible">
                    <div 
                        onClick={() => handleNavigation('/')} 
                        className="cursor-pointer font-bold hover:brightness-90 text-l bg-[url('/button-bg.png')] bg-[length:85%] bg-center bg-no-repeat px-4 py-2"
                    >
                        ← BACK
                    </div>
                </div>
                <p className="text-left mt-4">
                    My experience includes internships at Schneider Electric, the Yale School of Medicine, and OnePointFive, a climate advisory 
                    startup in New York. At <span className="font-bold">Schneider Electric</span>, I interned as a firmware engineer on the servo-drive network communications team 
                    in Marktheidenfeld, Germany. My work there involved bringing our servo-drive server up to the OPC UA 
                    standard, while maintaining compatibility with Schneider systems and stringent latency and throughput 
                    requirements. At the <span className="font-bold">Yale School of Medicine</span>, I was working on a software tool, visAPPprot, for visualizating patient proteomics data. 
                    Challenges there involved working through legacy codebases and bringing them up to code with common software engineering best practices, 
                    streamlining build processes for speed and robustness across environments, and reworking data analysis pipelines in R for better efficiency of
                    multi-million entry datasets. We detailed part of our work in a paper published at the VisGap 2025 conference on visualization research (linked below). At <span className="font-bold">OnePointFive</span>, 
                    I was the sole software engineer on a team of approx. 20, working to build out systems for internal use at the advisory firm. I built many small tools and automations for 
                    data exchange between company systems, natural language interaction with third party tools through MCP and Claude Desktop, and internal full-stack applications to speed up the proposal 
                    finding and generation process. After my internship, I was kept on part time during the fall semester to maintain and continue biulding out this proposal generation tool.
                </p>
                <p className="text-left mt-4">
                    <span className="font-bold">Coursework: </span>Systems Programming (CPSC3230), Big Data Systems (CPSC5380), Database Systems (CPSC4370), Software Engineering (CPSC4390), Quantum Computing (CPSC4470), Algorithms (CPSC3650), Computer Intelligence for Games (CPSC4740), Full-Stack Web Development (CPSC4190), Data Structures & Programming Techniques (CPSC2230), Real Analysis (CPSC2550), Linear Algebra (CPSC2250)
                </p>
                <p className="text-left mt-4">
                    <span className="font-bold">Languages/Frameworks: </span>Python, C/C++, JavaScript/TypeScript, Rust, Java, React, Swift, SwiftUI, Node.js, Flask, Django, PostgreSQL, Docker, Kubernetes, Git REST APIs, CI/CD, Linux, R, Redis, Networking, Distributed Systems Design
                </p>
                <h1 className="text-2xl! font-bold mt-6">
                    Projects
                </h1>
                <p className="text-left mt-4 flex items-center gap-2">
                    <img 
                        src="/PracticeRoom-logo.jpg" 
                        alt="PracticeRoom logo" 
                        className="w-8 h-8 object-contain rounded-lg"
                    />
                    <span className="font-bold">PracticeRoom</span>
                </p>
                <p className="text-left font-bold text-sm">
                    <em>** Swift, SwiftUI, Supabase, Supabase Storage **</em>
                </p>
                <p className="text-left">
                    PracticeRoom is an iOS social application targeting classical musicians. Users can post 60 second practice clips to a global feed, 
                    follow other users, leave comments, and run a number of audio analysis functions to quantitatively evaluate their playing. I built this project on my
                    own for some of my friends. Currently, it's deployed on testflight to test users. Want to try it out? Click <a className="hover:underline" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdcJTtgEiv4P3D7H2_OHAK6rXAastnAVQPiztDPr0UJVhOq3g/viewform?usp=header">here</a> to get access. 
                </p>
                <p className="text-left mt-4">
                    <span className="font-bold">Audio Analysis Tools for Classical Musicians</span>
                </p>
                <p className="text-left font-bold text-sm">
                    <em>** Python, FastAPI, Render **</em>
                </p>
                <p className="text-left">
                    Pything pip package for specialized audio analysis for monophonic classical string playing. From an audio file, calculate vibrato width and amplitude, intonation accuracy, and 
                    pitchd eviation from single-key just intonation. You can find the project repository <a className="hover:underline" target="_blank" href="https://github.com/thomasphilipwalter/practice-tools">here</a>.
                </p>
                <p className="text-left mt-4">
                    <span className="font-bold">RFP Analyzer</span>
                </p>
                <p className="text-left font-bold text-sm">
                    <em>** Python, Flask, ChromaDB, OpenAI API, React, JavaScript, Railway, PostgreSQL **</em>
                </p>
                <p className="text-left">
                    An internal tool I built during my most recent internship at OnePointFive. The company wanted to begin bidding for larger, government contracts, but found the process time intensive
                    and laborious, and were looking for a way to automate the process. RFP analyzer is a full-stack application that scrapes a number of government RFP databases, filters for climate/sustainability 
                    related tenders, assess company fit based on OnePointFive internal documents and slide decks, assigns experts in the OnePointFive Expert Network (1000+ members) with relevant experience to strengthen
                    the bid, and uses LLMs to draft tailored proposals.
                </p>
                <p className="text-left mt-4 flex items-center gap-2 h-6">
                    <img 
                        src="/jukeboxlogo.png" 
                        alt="Jukebox logo" 
                        className="w-26 h-26 object-contain rounded-lg"
                    />
                    <span className="font-bold">Jukebox: A Social Platform for Music Reviews and Discovery</span>
                </p>
                <p className="text-left font-bold text-sm">
                    <em>** Python, React, JavaScript, Django, PostgreSQL, Redis, Render **</em>
                </p>
                <p className="text-left">
                    Jukebox is a comprehensive social media platform for music lovers. Designed to be a kind of "Goodreads For Music", users can post long- or short-form album or song reviews, start live chatrooms about
                    certain topics, create tailored feeds, and import personalized suggestions and playlists straight to their spotify account. I built this in a team of six during my semester long software
                    engineering class. Check it out <a className="hover:underline" target="_blank" href="https://jukebox-frontend-ynjn.onrender.com/">here</a>!
                </p>
                <p className="text-2xl! font-bold mt-6">
                    Publications
                </p>
                <p className="text-left mt-4">
                    <span className="font-bold">Challenges in the Development, Distribution, and Maintenance of Software Visualization Tools in Biology and Medicine</span>
                </p>
                <p className="text-left">
                    Co-authored a paper during my time at the Blenman Innovation Group at the Yale School of Medicine, detailing the challenges in building and maintaining visualization 
                    software in biology and medicine. You can find the paper <a className="hover:underline" target="_blank" href="https://diglib.eg.org/items/590c781c-baaa-4de2-8753-8e7534e02f7a">here</a>.
                </p>
            </div>
        </div>
    )
}

export default CS;
