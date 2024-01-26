import React from 'react';

const Card = ({ icon, text }) => (
    <div className="card">
        <img src={icon} alt="Card Icon" />
        <p>{text}</p>
    </div>
);

export default Card;