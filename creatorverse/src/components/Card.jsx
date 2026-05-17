function Card({ creator }) {
    return (
        <div>
            <h2>{creator.name}</h2>

            <p>{creator.description}</p>

            <a href={creator.url} target="_blank">
                Visit Channel
            </a>

            {creator.imageURL && (
                <img
                    src={creator.imageURL}
                    alt={creator.name}
                    width="200"
                />
            )}
        </div>
    )
}

export default Card