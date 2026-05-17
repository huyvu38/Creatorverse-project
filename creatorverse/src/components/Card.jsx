function Card({ creator }) {
    return (
        <div className="card">

            {creator.imageURL && (
                <img
                    src={creator.imageURL}
                    alt={creator.name}
                    width="300"
                />
            )}

            <h2>{creator.name}</h2>

            <p>{creator.description}</p>

            <a
                href={creator.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit Channel
            </a>

        </div>
    )
}

export default Card