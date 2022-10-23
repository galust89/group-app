import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
    // const [users, setUsers] = useState(null);
    const [user, setUser] = useState(null);
    // let [id, setId] = useState(1);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch(`${url}/${id}`)
    //         .then(response => response.json())
    //         .then(res => {
    //             setUser(res);
    //             setLoading(false);
    //         })
    //         .catch(e => console.log(e));
    // }, [id]);

    const getUser = async id => {
        setLoading(true);
        const response = await axios.get(`${url}/${id + 1}`);
        setUser(response.data);
        setLoading(false);
    };

    const loadNext = id => {
        getUser(id);
        // setId((id += 1));
    };

    const loadUser = () => {
        getUser(1);
    };

    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <div>
                <button type="button" onClick={loadUser}>
                    get Users
                </button>
            </div>
            {user && user.name} <button onClick={() => loadNext(user.id)}>Next</button>
        </div>
    );
    // return <div>{users && users.map(({ name }) => <div key={name}>{name}</div>)}</div>;
}

export default App;
