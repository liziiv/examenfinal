import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetailPage from './pages/CountryDetailPage';

const App = () => {
    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/:countryCode" element={<CountryDetailPage countries={countries} />} />
            </Routes>
        </Router>
    );
};

export default App;