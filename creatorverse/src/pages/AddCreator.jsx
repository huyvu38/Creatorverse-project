import { useState } from 'react'
import { supabase } from '../client'
import { useNavigate } from 'react-router-dom'

function AddCreator() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: ''
    })

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const { error } = await supabase
            .from('creators')
            .insert([form])

        if (error) {
            console.log(error)
            return
        }

        navigate('/')
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6">

            <h1 className="text-2xl font-bold mb-6">
                Add Creator
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    name="url"
                    placeholder="URL"
                    value={form.url}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <input
                    name="imageURL"
                    placeholder="Image URL (optional)"
                    value={form.imageURL}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />

                <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                    Add Creator
                </button>

            </form>

        </div>
    )
}

export default AddCreator