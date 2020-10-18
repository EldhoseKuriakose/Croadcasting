import React from 'react';
import './SignUpCategory.styles.scss';

const SignUpCategory = ({ title, imageUrl, text }) => (
    <div className="sign-up-category-container">
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">{text}</span>
        </div>
    </div>
);

export default SignUpCategory;