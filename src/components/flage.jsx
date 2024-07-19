import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import '../design/global.css';

const flags = [
    "CA", "US", "GB", "IN", "NG", "ZA", "JP", "KR", "PH", "MX", "ES", "RU", "UA", "IT", "AF", "PK", "LK", "SY"
];

function Flage() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {flags.map(code => (
                <ReactCountryFlag
                    key={code}
                    countryCode={code}
                    svg
                    style={{
                        width: '2em',
                        height: '2em',
                        margin: '0.2em'
                    }}
                />
            ))}
        </div>
    );
}

export default Flage;
