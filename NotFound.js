import { Link } from "react-router-dom"
export default function NotFound () {
    return (
        <>
            <h2>404 (Not Found)</h2>
            <h2>The Url you Visited is not Defined</h2>

            <Link to="/home" >
                <button>Return to Home Page</button>
            </Link>
        </>
    )
}

