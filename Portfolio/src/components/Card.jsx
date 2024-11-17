export function Card({title, description}) {
    return (
        <>
            <div className="cardBackground">
                <div className="card">
                    <p className="cardHeading">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card