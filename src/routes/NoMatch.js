import { useLocation, Link } from "react-router-dom";

function NoMatch() {
    let location = useLocation();

    return (
        <>
            <p>
                No match for this route "<code>{location.pathname}</code>"
            </p>

            <Link to="/" title="Go Home">
                Go Home
            </Link>
        </>
    )
}

export default NoMatch;