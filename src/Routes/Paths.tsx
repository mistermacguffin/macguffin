import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Post from '../Pages/Post'

export default function Paths() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
        </Routes>
    )
}