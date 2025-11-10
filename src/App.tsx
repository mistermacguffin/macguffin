import { BrowserRouter as Router, Link } from 'react-router-dom'
import Paths from './Routes/Paths'
import './App.css'

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
            </nav>
            <Paths/>
        </Router>
    )
}

export default App