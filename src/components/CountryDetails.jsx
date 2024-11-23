import React from 'react';

const CountryDetails = ({ country, onClose }) => {
    if (!country) return null;

    return (
        <div className="modal" style={{ display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{country.name.common}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <img 
                            src={country.flags.png} 
                            alt={country.name.common} 
                            className="img-fluid mb-3"
                        />
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Subregion:</strong> {country.subregion}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
                        <p><strong>Timezones:</strong> {country.timezones?.join(', ') || 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
