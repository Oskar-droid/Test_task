import React, { useState } from "react";

function Country() {
    const [country, setCountry] = useState('');

    const inputChange = (event) => {
        setCountry(event.target.value);
    };
    
    return (
        <>
        <input type='text' placeholder='Поиск страны' value={country} onChange={inputChange} id="country" />
        </>
    );
}

export default Country;