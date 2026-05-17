import { useState, useEffect } from 'react'
import { supabase } from '../client'
import Card from '../components/Card'

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
        </div>
    )
}

export default ShowCreators