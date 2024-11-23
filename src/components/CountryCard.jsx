import React from 'react';

const CountryCard = ({ country, onSelect }) => {
    return (
        <div 
            className="card" 
            style={{ width: '18rem', margin: '10px', cursor: 'pointer' }}
            onClick={() => onSelect(country)}
        >
            <img 
                src={country.flags.png} 
                alt={country.name.common} 
                className="card-img-top"
                style={{ height: '150px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Region: {country.region}</p>
            </div>
        </div>
    );
};

export default CountryCard;
