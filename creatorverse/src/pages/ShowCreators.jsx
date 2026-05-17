import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function ShowCreators() {

    const [creators, setCreators] = useState([])

    useEffect(() => {
        async function fetchCreators() {

            const { data: creators, error } = await supabase
                .from('creators')
                .select()

            console.log("CREATORS:", creators)
            console.log("ERROR:", error)

            if (error) {
                console.error(error)
                return
            }

            setCreators(creators || [])
        }

        fetchCreators()
    }, [])

    return (
        <div>
            <h1>Creatorverse</h1>

            {creators.length === 0 ? (
                <p>No creators found.</p>
            ) : (
                creators.map((creator) => (
                    <Card
                        key={creator.id}
                        creator={creator}
                    />
                ))
            )}

            <Link to="/new">
                <button className="bg-black text-white px-4 py-2 rounded-lg mb-6 hover:bg-gray-800 transition">
                    + Add Creator
                </button>
            </Link>
        </div>
    )
}

export default ShowCreators