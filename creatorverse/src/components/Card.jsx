import { Link } from 'react-router-dom'

function Card({ creator }) {
    return (
        <div className="card">

            <Link to={`/view/${creator.id}`}>
                <h2>{creator.name}</h2>
            </Link>

            {creator.imageURL && (
                <img
                    src={creator.imageURL}
                    alt={creator.name}
                    width="300"
                />
            )}

            <p>{creator.description}</p>

            <a
                href={creator.url}
                target="_blank"
                rel="noreferrer"
            >
                Visit Channel
            </a>

            {/* EDIT BUTTON */}
            <Link to={`/edit/${creator.id}`}>
                <button className="mt-3 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600 transition">
                    Edit
                </button>
            </Link>

        </div>
    )
}

export default Card