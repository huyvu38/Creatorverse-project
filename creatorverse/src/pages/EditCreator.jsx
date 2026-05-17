import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function EditCreator() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    })

    // 1. GET existing creator data
    useEffect(() => {

        const fetchCreator = async () => {

            const { data, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', Number(id))
                .single()

            if (data) {
                setForm(data)
            }

            if (error) {
                console.log(error)
            }
        }

        fetchCreator()

    }, [id])

    // 2. handle input changes
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // 3. update database
    async function handleSubmit(e) {
        e.preventDefault()

        const { error } = await supabase
            .from('creators')
            .update(form)
            .eq('id', Number(id))

        if (error) {
            console.log(error)
            return
        }

        navigate('/')
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6">

            <h1 className="text-2xl font-bold mb-6">
                Edit Creator
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    name="url"
                    value={form.url}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full h-32 border p-2 rounded resize-none"
                />

                <input
                    name="imageURL"
                    value={form.imageURL}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    Update Creator
                </button>

            </form>

        </div>
    )
}

export default EditCreator