// Projects.jsx
import netflixCloneSS from '../../public/projectScreenshots/netflixCloneSS.jpg';
import pacmanSS from '../../public/projectScreenshots/pacmanSS.jpg';
import programmingLearningSS from '../../public/projectScreenshots/programmingLearningSS.jpg';
import shootEmUpSS from '../../public/projectScreenshots/shootEmUpSS.png';

const projects = [
    {
        id: "1",
        title: "Netflix Clone",
        description: "This is a personal project where I developed a Netflix clone to practice front-end development. The app features a responsive design, interactive user interface, and dynamic content fetching. It replicates core functionalities like browsing categories, viewing movie details, and exploring a visually appealing layout, providing a hands-on learning experience with modern web technologies.",
        image: netflixCloneSS,
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        liveLink: "https://netflixclone.sabalan.info/",
        repoLink: "https://github.com/Sabalann/Netflix-Clone"
    },
    {
        id: "2",
        title: "Search Algorithms For Pacman",
        description: "This is a school project where I enhanced the classic 'Pacman' game by implementing various search algorithms. The project explores techniques like Depth First Search, Breadth First Search, A Search, and Uniform Cost Search to guide Pacman through the maze. It demonstrates how different algorithms impact pathfinding and decision-making within the game.",
        image: pacmanSS,
        technologies: ["Python"],
        repoLink: "https://github.com/Sabalann/PacMan-Python"
    },
    {
        id: "3",
        title: "Learning Programming App",
        description: "This is a programming learning app I developed, where users control a character on a grid by writing commands. The app features an interactive environment designed to teach the basics of coding through step-by-step challenges. It includes functionality for users to input sequences of commands, execute them, and see their effects in real time. This project focuses on making programming concepts accessible and engaging.",
        image: programmingLearningSS,
        technologies: ["C#", "Windows Forms"],
        repoLink: "https://github.com/Sabalann/Programming-Learning-Windows-App"
    },
    {
        id:"4",
        title: "Shoot'em Up",
        description: "A school project where I developed a Shoot'em Up style game with only Haskell.",
        image: shootEmUpSS,
        technologies: ["Haskell"],
        repoLink:"https://github.com/Sabalann/Shoot-em-Up"

    },
];

export default projects;