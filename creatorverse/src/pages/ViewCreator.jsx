import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'

function ViewCreator() {

    const { id } = useParams()
    const [creator, setCreator] = useState(null)

    useEffect(() => {

        const fetchCreator = async () => {

            console.log("URL id:", id)

            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', Number(id))

            console.log("DATA:", data)
            console.log("ERROR:", error)

            setCreator(data?.[0] || null)
        }

        fetchCreator()

    }, [id])

    if (!creator) {
        return <p>Loading...</p>
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 text-center">

            <h1 className="text-3xl font-bold mb-6">
                {creator.name}
            </h1>

            {creator.imageURL && (
                <img
                    src={creator.imageURL}
                    alt={creator.name}
                    className="w-64 h-64 object-cover rounded-xl shadow-md mx-auto mb-6"
                />
            )}

            <p className="text-gray-600 text-lg mb-6">
                {creator.description}
            </p>

            <a
                href={creator.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
                Visit Channel
            </a>

        </div>
    )
}

export default ViewCreator