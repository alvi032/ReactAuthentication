import React from 'react';

function Index() {
    return (
        <div>
            <h1>Homepage</h1>
            <p>Logged in as:</p>
            <a href='signin'>Sign In</a>
            <br/>
            <a href='signout'>Sign Out</a>
            <br/>
            <a href='register'>Register</a>
            <br/>
        </div>
    );
}

export default Index;