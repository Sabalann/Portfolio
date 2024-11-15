export function Card({title, description}) {
    return (
        <>
            <div className="card">
                <p className="cardHeading">{title}</p>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Card