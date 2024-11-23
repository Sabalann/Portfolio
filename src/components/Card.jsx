export function Card({title, description, link}) {
    const handleClick = () => {
        window.open(`https://${link}`, '_blank');
    }
    return (
        <>
            <div className="cardBackground" onClick={handleClick}>
                <div className="card">
                    <p className="cardHeading">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card