import React from 'react';
import PropTypes from 'prop-types';
import './CardAvaliation.css'; // Optional: Add styles in a separate CSS file

const CardAvaliation = ({ title, description }) => {
    return (
        <div className="card-avaliation">
            <h2>{title}</h2>
            <p>{description}</p>

            
        </div>
    );
};
CardAvaliation.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default CardAvaliation;