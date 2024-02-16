import React, { useState } from 'react';
import TextField from '../components/textField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login () {
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const buttonOnClick = () => {
        axios.get(`https://swapi.dev/api/people/?search=${name}`)
            .then(response => {
                const peopleData = response.data.results;
                const match = peopleData.find(person => person.name === name && person.birth_year === password);
                if (match) {
                    console.log("Login successful");
                    history.push('/searchStars');
                    window.location.reload();
                    window.location.href = window.location.href;
                } else {
                    setError('Invalid credentials');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            });
    }

    return (
        <div>
            <TextField
                label={"Name"}
                placeholder={"Name"}
                value={name}
                onChange={e => setName(e.target.value)} />
            <TextField
                label={"Password"}
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={buttonOnClick} style={{
                color: "black",
                background: "#87CEEB",
                border: "none",
                padding: "8px 12px"
            }}>Login</button>
        </div>
    )
}
