import React from 'react'

function About(props) {
    return (
        <div>
            {props.match.params.id}
            <h1 className="display-4">About Contact Manager</h1>
            <p className="lead">Simble app to manage contact</p>
            <p className="seconady">Version 1.0.0</p>
        </div>
    )
}

export default About;
