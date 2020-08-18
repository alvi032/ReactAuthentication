import React from 'react';

function Index() {
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <input type="text"/>
                <br/>
                <br/>
                <input type="password"/>
                <br/>
                <br/>
                <button type={"submit"}>Sign In</button>
            </form>
        </div>
    );
}

export default Index;