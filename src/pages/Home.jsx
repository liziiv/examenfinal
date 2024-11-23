import React, { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';
import CountryDetails from '../components/CountryDetails';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data.slice(0, 15))); 
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Examen de Recuperación</h1>
            <h2 className="my-4">Reyna Elizabeth Vásquez Valenzuela</h2>
            <h2 className="my-4">1790-21-340</h2>
            <div className="d-flex flex-wrap">
                {countries.map(country => (
                    <CountryCard 
                        key={country.cca3} 
                        country={country} 
                        onSelect={setSelectedCountry} 
                    />
                ))}
            </div>

            {selectedCountry && (
                <CountryDetails 
                    country={selectedCountry} 
                    onClose={() => setSelectedCountry(null)} 
                />
            )}
        </div>
    );
};

export default Home;
