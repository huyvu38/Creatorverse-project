import { Routes, Route } from 'react-router-dom'

import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'

function App() {
    return (
        <Routes>
            <Route path="/" element={<ShowCreators />} />
            <Route path="/new" element={<AddCreator />} />
            <Route path="/edit/:id" element={<EditCreator />} />
            <Route path="/creator/:id" element={<ViewCreator />} />
        </Routes>
    )
}

export default App