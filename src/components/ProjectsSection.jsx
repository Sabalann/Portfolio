import Card from "./Card.jsx";

export function ProjectsSection() {
    return (
        <>
            <div className="projects section">
                <Card title="Netflix Clone"
                    //description="For my first project with React, I decided to pick a website to clone. At this point I had read a lot of the React documentation and watched tutorials, I wanted to see how far I could get without having to design anything myself."
                      liveLink="https://netflixclone.sabalan.info/" repoLink="https://github.com/Sabalann/Netflix-Clone"></Card>
                <Card title="Coming Soon..." description=""></Card>
                <Card title="Coming Soon..." description=""></Card>
                <Card title="Coming Soon..." description=""></Card>
            </div>
        </>
    )
}