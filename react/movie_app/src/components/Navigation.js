import React from "react";
import Link from 'react-router-dom/Link';

function Navigation (){ // inside the router

    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
    );
}

export default Navigation;