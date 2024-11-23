import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CountryDetailPage = ({ countries }) => {
    const { countryCode } = useParams();
    const navigate = useNavigate();
    const country = countries.find(c => c.cca3 === countryCode);

    if (!country) return <p>Country not found</p>;

    return (
        <div className="container">
            <button onClick={() => navigate(-1)} className="btn btn-secondary my-3">Back</button>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={country.name.common} className="img-fluid mb-3" />
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
        </div>
    );
};

export default CountryDetailPage;