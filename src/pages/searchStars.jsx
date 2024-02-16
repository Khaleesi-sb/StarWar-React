import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '../components/dropdown';
import SearchBar from '../components/searchBar';

export default function SearchStars() {
    const [searchTerm, setSearchTerm] = useState('');
    const [options, setOptions] = useState([]);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        axios.get(`https://swapi.dev/api/planets/?search=${e.target.value}`)
            .then(response => {
                setOptions(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const handleClearClick = () => {
        setSearchTerm('');
        setOptions([]); // Clear the dropdown options
    };

    return (
        <div>
            <p style={{ color: "#87CEEB" }}>Search for planets</p>
            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "center"
            }}>
            <SearchBar searchTerm={searchTerm} handleInputChange={handleInputChange} handleClearClick={handleClearClick}/>
            </div>
            {searchTerm && (
                <Dropdown options={options} />
            )}
            
        </div>
    );
};
