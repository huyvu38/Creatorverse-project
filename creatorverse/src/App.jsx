import { Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>Home Page</h1>
}

function CreateCreator() {
  return <h1>Create Creator Page</h1>
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<CreateCreator />} />
      </Routes>
  )
}

export default App