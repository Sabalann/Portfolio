export function TechCard({svg, title}) {
    return (
        <>
            <div className="techCardBackground">
                <div className="techCard">
                    {svg}
                    <p className="techCardHeading">{title}</p>
                </div>
            </div>
        </>
    )
}